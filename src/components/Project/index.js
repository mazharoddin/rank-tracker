import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faLongArrowAltUp, faLongArrowAltDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';
import { Card, Row, Col } from 'reactstrap';

export default function Project(props) {
  return (
    <Card className="p-3">
      <Row>
        <Col xs={4} sm={4} lg={4}>
          <strong className="text-dark">{props.details.name}</strong>&nbsp;
          <span>{props.details.url}</span>
        </Col>
        <Col xs={8} sm={8} lg={8} className="text-right">
          <span>Last Updated: {props.details.lastUpdated}</span>&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faEllipsisV} />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={6} sm={4} md={2} lg={2}>
          <p><span>Average Position</span> <FontAwesomeIcon icon={faQuestionCircle} /></p>
          <p>
            <span className="h6 font-weight-bold text-dark">{props.details.averagePosition.value}</span>&nbsp;
            <span className={props.details.averagePosition.change[0] === '+' ? 'text-success' : 'text-danger'}><strong>{props.details.averagePosition.change}</strong></span>
          </p>
        </Col>
        <Col xs={6} sm={4} md={2} lg={2}>
          <p><span>Keywords</span> <FontAwesomeIcon icon={faQuestionCircle} /></p>
          <p className="h6 font-weight-bold text-dark">{props.details.keywords}</p>
        </Col>
        <Col xs={6} sm={4} md={2} lg={2}>
          <p><span>SERP</span> <FontAwesomeIcon icon={faQuestionCircle} /></p>
          <p className="h6 font-weight-bold text-dark">{props.details.serp}</p>
        </Col>
        <Col xs={6} sm={4} md={2} lg={2}>
          <p><span>Positions</span> <FontAwesomeIcon icon={faQuestionCircle} /></p>
          <p className="h6 font-weight-bold text-dark"><FontAwesomeIcon className="text-success" icon={faLongArrowAltUp} /> {props.details.positions.up} &nbsp;&nbsp; <FontAwesomeIcon className="text-danger" icon={faLongArrowAltDown} /> {props.details.positions.down}</p>
        </Col>
        <Col xs={6} sm={4} md={2} lg={2}>
          {
            props.details.history.map((history, key) =>
              <Row key={key}>
                <Col sm="6" md="6" lg="6" className="p-1">{history.name}</Col>
                <Col sm="3" md="3" lg="3" className="p-1">{history.up}</Col>
                <Col sm="3" md="3" lg="3" className={key === 1 ? 'text-success p-1' : key === 2 ? 'text-danger p-1' : 'p-1'}>{history.down}</Col>
              </Row>
            )
          }
        </Col>
        <Col xs={6} sm={4} md={2} lg={2}>
          <p><span>Location</span> <FontAwesomeIcon icon={faQuestionCircle} /></p>
          <div>
            <ReactCountryFlag
              countryCode={props.details.country.code}
              svg
              style={{
                width: '2em',
                height: '2em',
              }}
            /> <span className="text-dark"><strong>{props.details.country.name}</strong></span>
          </div>
        </Col>
      </Row>
    </Card>
  );
}