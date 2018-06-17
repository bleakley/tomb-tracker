import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap'

import PartyMemberModal from './PartyMemberModal'

class PartyMemberRow extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      showModal: false
    }
  }

  openModal() {
    this.setState({showModal: true});
    return false;
  }

  closeModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        <ListGroupItem style={{minHeight: '58px'}}>
          <span>
            {this.props.character.name}
            {this.props.navigating ? ' (navigating)' : null}
          </span>
          <Button className="pull-right" onClick={this.openModal}>Edit</Button>
        </ListGroupItem>
        <PartyMemberModal character={this.props.character} index={this.props.index} show={this.state.showModal} close={this.closeModal} save={this.props.save} remove={this.props.remove} />
      </div>
    );
  }
}

export default PartyMemberRow;
