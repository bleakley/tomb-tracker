import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Panel, Button, ListGroup } from 'react-bootstrap'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import PartyMemberRow from './PartyMemberRow'

const SortablePartyMember = SortableElement(({value, sortIndex}) =>
  <PartyMemberRow character={value} navigating={sortIndex==0} />
);

const SortablePartyMemberList = SortableContainer(({items}) => {
  return (
    <ListGroup>
      {items.map((value, index) => (
        <SortablePartyMember key={`item-${index}`} index={index} value={value} sortIndex={index} />
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
  }

  onPartySortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      characters: arrayMove(this.state.characters, oldIndex, newIndex),
    });
  };

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
          <SortablePartyMemberList items={this.state.characters} onSortEnd={this.onPartySortEnd.bind(this)} />
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
