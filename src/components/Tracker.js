import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Panel, Button, ListGroup } from 'react-bootstrap'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import PartyMemberRow from './PartyMemberRow'

const SortablePartyMember = SortableElement(({value, sortIndex, save, remove}) =>
  <PartyMemberRow character={value} navigating={sortIndex==0} index={sortIndex} save={save} remove={remove} />
);

const SortablePartyMemberList = SortableContainer(({items, save, remove}) => {
  return (
    <ListGroup>
      {items.map((value, index) => (
        <SortablePartyMember key={`item-${index}`} index={index} value={value} sortIndex={index} save={save} remove={() => remove(index)} />
      ))}
    </ListGroup>
  );
});

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [{ name: 'me'}, { name: 'you'}],
      day: 1
   };

   this.savePartyMember = this.savePartyMember.bind(this);
   this.deletePartyMember = this.deletePartyMember.bind(this);
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
          </Form>
        </Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Your Party</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <SortablePartyMemberList items={this.state.characters} onSortEnd={this.onPartySortEnd.bind(this)} save={this.savePartyMember} remove={this.deletePartyMember} />
          <Button onClick={() => this.setState({characters: this.state.characters.concat([{name: 'new'}])}) }>+</Button>
        </Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Onward!</Panel.Title>
        </Panel.Heading>
        <Panel.Body><Button onClick={() => this.setState({day: this.state.day + 1}) }>Next Day</Button></Panel.Body>
      </Panel>

      </div>
    );
  }
}

export default Tracker;
