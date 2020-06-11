import React from 'react';
import { Row, Col, FormGroup, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faQuestionCircle as faQuestionCircleSolid, faBell } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export default function Heading(props) {
  return (
    <Card className={`p-3 ${props.className}`}>
      <Row>
        <Col sm={4}>
          <span class="h5 text-dark">Rank Tracker</span> <FontAwesomeIcon icon={faQuestionCircle} /> How it works
      </Col>
        <Col sm={{ size: 7, offset: 1 }} className="text-right">
          <FormGroup>
            <span className="header-icon"><FontAwesomeIcon icon={faQuestionCircleSolid} size="lg" /></span>&nbsp;&nbsp;&nbsp;
            <span className="header-icon"><FontAwesomeIcon icon={faBell} size="lg" /></span>&nbsp;&nbsp;&nbsp;
            <span className="header-img"><img src="./profile.png" alt="Profile" /></span>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
}
