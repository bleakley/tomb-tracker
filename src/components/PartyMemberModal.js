import React from 'react';
import { ListGroupItem, Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'

const leftFormCol = 4;
const rightFormCol = 8;

class PartyMemberModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      name: this.props.character.name,
      strength: this.props.character.strength,
      wisdom: this.props.character.wisdom,
      survival: this.props.character.survival,
      size: this.props.character.size
    };
  }

  handleClose() {
    this.props.close();
  }

  handleSave() {
    let newCharacter = new Character(this.state.name, this.props.character.template);
    newCharacter.strength = this.state.strength;
    newCharacter.wisdom = this.state.wisdom;
    newCharacter.survival = this.state.survival;
    newCharacter.size = this.state.size;
    this.handleClose();
    this.props.save(this.props.index, newCharacter);
  }

  handleDelete() {
    this.handleClose();
    this.props.remove();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>Name</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl onChange={(e) => this.setState({name: e.target.value})} type="text" value={this.state.name} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>Strength</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl onChange={(e) => this.setState({strength: e.target.value})} type="number" value={this.state.strength} min={1} max={30} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>Wisdom</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl onChange={(e) => this.setState({wisdom: e.target.value})} type="number" value={this.state.wisdom} min={1} max={30} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>{'Wisdom (Survival)'}</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl onChange={(e) => this.setState({survival: e.target.value})} type="number" value={this.state.survival} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={leftFormCol}>
                <ControlLabel>Size</ControlLabel>
              </Col>
              <Col sm={rightFormCol}>
                <FormControl componentClass="select" onChange={(e) => this.setState({size: e.target.value})} value={this.state.size}>
                  <option value={0}>Tiny</option>
                  <option value={1}>Small</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Large</option>
                  <option value={4}>Huge</option>
                  <option value={5}>Gargantuan</option>
                </FormControl>
              </Col>
            </FormGroup>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
            <Button bsStyle="primary" onClick={this.handleSave}>Save</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default PartyMemberModal;
