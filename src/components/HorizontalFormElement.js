import React, { Component } from 'react';
import { FormGroup, ControlLabel, Col } from 'react-bootstrap'

const HorizontalFormElement = (props) => {
  return (
    <FormGroup>
      <Col sm={props.colWidths[0]}>
        <ControlLabel>{props.label}</ControlLabel>
      </Col>
      <Col sm={props.colWidths[1]}>
        {props.children}
      </Col>
    </FormGroup>
  )
}

export default HorizontalFormElement;
