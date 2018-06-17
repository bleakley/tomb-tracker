import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Panel, Button, ListGroup, Modal } from 'react-bootstrap'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import PartyMemberRow from './PartyMemberRow'
import PartyMember from '../models/PartyMember'
import * as _ from 'lodash';
import * as constants from '../models/constants';

const SortablePartyMember = SortableElement(({value, sortIndex, save, remove, copy}) =>
  <PartyMemberRow character={value} navigating={sortIndex==0} index={sortIndex} save={save} remove={remove} copy={copy}/>
);

const SortablePartyMemberList = SortableContainer(({items, save, remove, copy}) => {
  return (
    <ListGroup>
      {items.map((value, index) => (
        <SortablePartyMember key={`item-${index}`} index={index} value={value} sortIndex={index} save={save} remove={() => remove(index)} copy={() => copy(index)} />
      ))}
    </ListGroup>
  );
});

const leftFormCol = 4;
const rightFormCol = 8;

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addCharacterModalOpen: false,
      newCharacterName: '',
      newCharacterTemplate: 0,
      characters: [new PartyMember('me', 0)],
      day: 1
   };

   this.savePartyMember = this.savePartyMember.bind(this);
   this.deletePartyMember = this.deletePartyMember.bind(this);
   this.copyPartyMember = this.copyPartyMember.bind(this);
  }

  onPartySortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      characters: arrayMove(this.state.characters, oldIndex, newIndex),
    });
  };

  savePartyMember(index, character) {
    let newCharacters = this.state.characters;
    newCharacters[index] = character;
    this.setState({
      characters: newCharacters
    });

    console.log('saving ' + index);
    console.log(character);
  }

  deletePartyMember(index) {
    console.log('deleting ' + index);
    this.setState({
      characters: this.state.characters.slice(0, index).concat(this.state.characters.slice(index + 1))
    });
  }

  copyPartyMember(index) {
    console.log('copying ' + index);
    this.setState({
      characters: this.state.characters.slice(0, index).concat(_.cloneDeep(this.state.characters[index])).concat(this.state.characters.slice(index))
    });
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Information</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form horizontal>
              <FormGroup>
                <Col sm={2}>
                  <ControlLabel>Day</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl.Static>{this.state.day}</FormControl.Static>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                  <ControlLabel>Carrying Capacity</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl.Static>{this.state.characters.reduce((t, c) => { return t + c.getCarryingCapacity(); }, 0)}</FormControl.Static>
                </Col>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Your Party</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <SortablePartyMemberList items={this.state.characters} onSortEnd={this.onPartySortEnd.bind(this)} save={this.savePartyMember} remove={this.deletePartyMember} copy={this.copyPartyMember} />
            <Button onClick={ () => this.setState({addCharacterModalOpen: true}) }>+</Button>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Onward!</Panel.Title>
          </Panel.Heading>
          <Panel.Body><Button onClick={() => this.setState({day: this.state.day + 1}) }>Next Day</Button></Panel.Body>
        </Panel>
        <Modal show={this.state.addCharacterModalOpen} onHide={() => this.setState({addCharacterModalOpen: false})} >
          <Modal.Header closeButton>
            <Modal.Title>New Character</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>Template</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl componentClass="select" onChange={(e) => this.setState({newCharacterTemplate: e.target.value, newCharacterName: constants.TEMPLATE_DATA[e.target.value].name})} value={this.state.newCharacterTemplate}>
                  {_.range(constants.NUMBER_OF_TEMPLATES).map((v, i) => (<option key={i} value={i}>{constants.TEMPLATE_DATA[i].name}</option>))}
                </FormControl>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>Name</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl onChange={(e) => this.setState({newCharacterName: e.target.value})} type="text" value={this.state.newCharacterName} />
              </Col>
            </FormGroup>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({addCharacterModalOpen: false})}>Close</Button>
            <Button bsStyle="primary" onClick={ () => this.setState({characters: this.state.characters.concat([new PartyMember(this.state.newCharacterName, this.state.newCharacterTemplate)])}) }>Add Character</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Tracker;
