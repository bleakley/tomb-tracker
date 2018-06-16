import React from 'react';
import { ListGroupItem, Modal, Button } from 'react-bootstrap'


class PartyMemberModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleClose() {
    this.props.close();
  }

  handleSave() {
    let newCharacter = {name: 'kragmar'};
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
            <Modal.Title>{this.props.character.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
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
