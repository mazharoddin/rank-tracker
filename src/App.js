import React from 'react';
import ProjectList from './components/ProjectList';
import './App.css';
import { Container } from 'reactstrap';

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
    <Container>
      <ProjectList projects={projects}></ProjectList>
    </Container>
  );
}

export default App;
