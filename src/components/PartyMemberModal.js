import React from 'react';
import { ListGroupItem } from 'react-bootstrap'


class PartyMemberModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListGroupItem>{this.props.character.name}</ListGroupItem>
    );
  }
}

export default PartyMemberModal;
