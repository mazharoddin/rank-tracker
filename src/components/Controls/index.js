import React from 'react';
import { Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSync, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export default function Controls() {
  return (
    <Row>
      <Col sm={3}>
        <FormGroup className="has-search">
          <FontAwesomeIcon className="form-control-feedback" icon={faSearch} size="1x" />
          <Input type="text" name="search" id="search" style={{ fontSize: 'inherit' }} placeholder="Search Projects" />
        </FormGroup>
      </Col>
      <Col sm={{ size: 7, offset: 2 }} className="text-right">
        <FormGroup>
          <Button style={{ border: 'solid 1px #e6e6e6', backgroundColor: '#ffffff', color: '#1a181e', fontSize: 'inherit' }}><FontAwesomeIcon icon={faSync} /> Refresh All</Button>&nbsp;&nbsp;&nbsp;
          <Button style={{ backgroundColor: "#7442d3", fontSize: 'inherit' }}><FontAwesomeIcon icon={faPlus} /> New Project</Button>
        </FormGroup>
      </Col>
    </Row>
  );
}
