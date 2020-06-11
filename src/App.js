import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Controls from './components/Controls';
import ProjectList from './components/ProjectList';
import Heading from './components/Heading';
import Notification from './components/Notification';
import './App.css';
import Sidebar from './components/Sidebar';

const projects = [
  {
    name: 'Samsara 1.0',
    url: 'samara.com',
    lastUpdated: '1 hour ago',
    averagePosition: {
      value: 22.9,
      change: '+0.3',
    },
    keywords: 270,
    serp: 5,
    positions: {
      up: 62,
      down: 12,
    },
    history: [
      {
        name: '#1-10',
        up: 11,
        down: 0,
      },
      {
        name: '#11-30',
        up: 11,
        down: 0,
      },
      {
        name: '#31-100',
        up: 5,
        down: 0,
      }
    ],
    country: {
      code: 'US',
      name: 'United States',
    },
  },
  {
    name: 'Creditspring',
    url: 'creditspring.co.uk',
    lastUpdated: '1 hour ago',
    averagePosition: {
      value: 31.2,
      change: '+0.3',
    },
    keywords: 1211,
    serp: 3,
    positions: {
      up: 131,
      down: 2,
    },
    history: [
      {
        name: '#1-10',
        up: 11,
        down: 0,
      },
      {
        name: '#11-30',
        up: 11,
        down: 0,
      },
      {
        name: '#31-100',
        up: 5,
        down: 0,
      }
    ],
    country: {
      code: 'GB',
      name: 'United Kingdom',
    },
  },
  {
    name: 'Khatabook',
    url: 'khatabook.com',
    lastUpdated: '1 hour ago',
    averagePosition: {
      value: 56.6,
      change: '-2.20',
    },
    keywords: 4790,
    serp: 8,
    positions: {
      up: 121,
      down: 90,
    },
    history: [
      {
        name: '#1-10',
        up: 11,
        down: 0,
      },
      {
        name: '#11-30',
        up: 11,
        down: 0,
      },
      {
        name: '#31-100',
        up: 5,
        down: 0,
      }
    ],
    country: {
      code: 'IN',
      name: 'India',
    },
  },
];

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm="2" style={{ backgroundColor: '#1C2742' }}>
          <Sidebar></Sidebar>
        </Col>
        <Col sm="10" className="p-0">
          <Notification></Notification>
          <Heading className="pt-3 pl-5 pr-5 mb-4"></Heading>
          <div className="pl-5 pr-5">
            <Controls></Controls>
            <ProjectList projects={projects}></ProjectList>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
