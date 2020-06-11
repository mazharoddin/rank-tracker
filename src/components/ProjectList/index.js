import React from 'react';
import { Row, Col } from 'reactstrap';
import Project from '../Project';


export default function ProjectList(props) {
  return props.projects.map((project, key) => (
    <Row className='mb-4' key={key}>
      <Col xs={12}>
        <Project details={project}></Project>
      </Col>
    </Row>
  ));
}