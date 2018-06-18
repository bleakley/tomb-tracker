import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Panel, Button, ListGroup, Modal, Grid } from 'react-bootstrap'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import HorizontalFormElement from './HorizontalFormElement'
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
const leftSettingCol = 6;
const rightSettingCol = 6;

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addCharacterModalOpen: false,
      encumberanceRules: false,
      flyingRules: constants.FLYING_RULE_NEVER_ALLOWED,
      waterForageRules: constants.WATER_FORAGE_RULE_FOUL,
      overlandSpeedRules: constants.OVERLAND_TRAVEL_RULE_SIMPLE,
      temperature: constants.TEMPERATURE_HOT,
      precipitationRules: constants.PRECIPITATION_RULE_RANDOM_HIGH_HUMID,
      terrain: constants.TERRAIN_CHULT_JUNGLE_NO_UNDEAD,
      randomSites: constants.RANDOM_SITE_RULE_NONE,
      newCharacterName: '',
      newCharacterTemplate: 0,
      characters: [new PartyMember('me', 0)],
      day: 1
   };

   this.savePartyMember = this.savePartyMember.bind(this);
   this.deletePartyMember = this.deletePartyMember.bind(this);
   this.copyPartyMember = this.copyPartyMember.bind(this);
   this.onPartySortEnd = this.onPartySortEnd.bind(this);
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
      <Grid fluid>
      <Col md={8} className="primaryColumn">
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Information</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form horizontal>
              <HorizontalFormElement label={'Day'} colWidths={[2, 10]}>
                <FormControl.Static>{this.state.day}</FormControl.Static>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Carrying Capacity'} colWidths={[2, 10]}>
                <FormControl.Static>{this.state.characters.reduce((t, c) => { return t + c.getCarryingCapacity(); }, 0)}</FormControl.Static>
              </HorizontalFormElement>
            </Form>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Your Party</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <SortablePartyMemberList items={this.state.characters} onSortEnd={this.onPartySortEnd} save={this.savePartyMember} remove={this.deletePartyMember} copy={this.copyPartyMember} />
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
            <HorizontalFormElement label={'Template'} colWidths={[leftFormCol, rightFormCol]}>
              <FormControl componentClass="select" onChange={(e) => this.setState({newCharacterTemplate: e.target.value, newCharacterName: constants.TEMPLATE_DATA[e.target.value].name})} value={this.state.newCharacterTemplate}>
                {_.range(constants.NUMBER_OF_TEMPLATES).map((v, i) => (<option key={i} value={i}>{constants.TEMPLATE_DATA[i].name}</option>))}
              </FormControl>
            </HorizontalFormElement>
            <HorizontalFormElement label={'Name'} colWidths={[leftFormCol, rightFormCol]}>
              <FormControl onChange={(e) => this.setState({newCharacterName: e.target.value})} type="text" value={this.state.newCharacterName} />
            </HorizontalFormElement>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({addCharacterModalOpen: false})}>Close</Button>
            <Button bsStyle="primary" onClick={ () => this.setState({characters: this.state.characters.concat([new PartyMember(this.state.newCharacterName, this.state.newCharacterTemplate)])}) }>Add Character</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col md={4} className="settingsColumn">
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Settings</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form horizontal>
              <HorizontalFormElement label={'Encumberance'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({encumberanceRules: e.target.value})} value={this.state.encumberanceRules}>
                  <option value={true} disabled={true}>On</option>
                  <option value={false}>Off</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Flying Forbidden'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({flyingRules: e.target.value})} value={this.state.flyingRules}>
                  <option value={constants.FLYING_RULE_ALWAYS_ALLOWED} disabled>Never</option>
                  <option value={constants.FLYING_RULE_NEVER_ALLOWED}>Always</option>
                  <option value={constants.FLYING_RULE_NOT_ENCUMBERED} disabled>While lightly encumbered</option>
                  <option value={constants.FLYING_RULE_NOT_HEAVILY_ENCUMBERED} disabled>While heavily encumbered</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Foraged Water'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({waterForageRules: e.target.value})} value={this.state.waterForageRules}>
                  <option value={constants.WATER_FORAGE_RULE_FRESH}>Always fresh</option>
                  <option value={constants.WATER_FORAGE_RULE_FOUL}>Always foul</option>
                  <option value={constants.WATER_FORAGE_RULE_QUARTER_FRESH}>1/4 fresh</option>
                  <option value={constants.WATER_FORAGE_RULE_HALF_FRESH}>1/2 fresh</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Overland Speed'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({overlandSpeedRules: e.target.value})} value={this.state.overlandSpeedRules}>
                  <option value={constants.OVERLAND_TRAVEL_RULE_SIMPLE}>Simple</option>
                  <option value={constants.OVERLAND_TRAVEL_RULE_ADVANCED} disabled>Advanced</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Temperature'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({temperature: e.target.value})} value={this.state.temperature}>
                <option value={constants.TEMPERATURE_COLD} disabled>Cold</option>
                <option value={constants.TEMPERATURE_NORMAL} disabled>Normal</option>
                <option value={constants.TEMPERATURE_HOT}>Hot</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Precipitation'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({precipitationRules: e.target.value})} value={this.state.precipitationRules}>
                  <option value={constants.PRECIPITATION_RULE_RANDOM}>Random</option>
                  <option value={constants.PRECIPITATION_RULE_RANDOM_LOW_HUMID}>Random Low Humidity</option>
                  <option value={constants.PRECIPITATION_RULE_RANDOM_HIGH_HUMID}>Random High Humidity</option>
                  <option value={constants.PRECIPITATION_RULE_NO_PRECIPITATION}>No precipitation</option>
                  <option value={constants.PRECIPITATION_RULE_LIGHT_PRECIPITATION}>Light precipitation</option>
                  <option value={constants.PRECIPITATION_RULE_HEAVY_PRECIPITATION}>Heavy precipitation</option>
                  <option value={constants.PRECIPITATION_RULE_THUNDERSTORM}>Thunderstorm</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Terrain'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({terrain: e.target.value})} value={this.state.terrain}>
                  <option value={constants.TERRAIN_CHULT_BEACH}>Beach</option>
                  <option value={constants.TERRAIN_CHULT_JUNGLE_NO_UNDEAD}>Jungle</option>
                  <option value={constants.TERRAIN_CHULT_JUNGLE_UNDEAD}>Jungle (undead)</option>
                  <option value={constants.TERRAIN_CHULT_JUNGLE_GREATER_UNDEAD}>Jungle (greater undead)</option>
                  <option value={constants.TERRAIN_CHULT_MOUNTAIN}>Mountains</option>
                  <option value={constants.TERRAIN_CHULT_RIVER}>River</option>
                  <option value={constants.TERRAIN_CHULT_RUIN}>Ruin</option>
                  <option value={constants.TERRAIN_CHULT_WASTELAND}>Wasteland</option>
                </FormControl>
              </HorizontalFormElement>
              <HorizontalFormElement label={'Random Sites'} colWidths={[leftSettingCol, rightSettingCol]}>
                <FormControl componentClass="select" onChange={(e) => this.setState({randomSites: e.target.value})} value={this.state.randomSites}>
                  <option value={constants.RANDOM_SITE_RULE_NONE}>None</option>
                  <option value={constants.RANDOM_SITE_RULE_SETTLEMENTS} disabled>Settlements only</option>
                  <option value={constants.RANDOM_SITE_RULE_RUINS} disabled>Ruins only</option>
                  <option value={constants.RANDOM_SITE_RULE_ALL} disabled>Settlements and ruins</option>
                </FormControl>
              </HorizontalFormElement>
            </Form>
          </Panel.Body>
        </Panel>
        </Col>
        </Grid>
      </div>
    );
  }
}

export default Tracker;
