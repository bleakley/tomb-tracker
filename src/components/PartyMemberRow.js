import React from 'react';
import { ListGroupItem, Radio } from 'react-bootstrap'


class PartyMemberRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListGroupItem>
        {this.props.character.name}
        {this.props.navigating ? ' (navigating)' : null}
      </ListGroupItem>
    );
  }
}

export default PartyMemberRow;
