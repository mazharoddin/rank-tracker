import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faThLarge, faChartLine, faSearch, faBiohazard, faBacon, faMoneyCheckAlt, faTools, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const menu = [
  {
    icon: faThLarge,
    name: 'Dashboard',
  },
  {
    icon: faChartLine,
    name: 'Site Explorer',
    subMenu: [1],
  },
  {
    icon: faSearch,
    name: 'Keyword Explorer',
    subMenu: [1],
  },
  {
    icon: faBacon,
    name: 'Rank Tracker',
  },
  {
    icon: faBiohazard,
    name: 'Distrbute Content',
    subMenu: [1],
  },
  {
    icon: faMoneyCheckAlt,
    name: 'PPC Explorer',
    subMenu: [1],
  },
  {
    icon: faTools,
    name: 'More Tools',
    subMenu: [1],
  },
  {
    icon: faLayerGroup,
    name: 'Integrations',
  },

]

export default function Sidebar(props) {
  return (
    <div className="sidebar p-3" style={{ color: '#cccccc' }}>
      <Row>
        <Col sm={12} className="mb-5">
          <img src="logo.svg" alt="Logo"/>
        </Col>
        {
          menu.map((menu, key) => (
            <Col sm={12} className="mt-4" key={key}>
              <Row>
                <Col sm={1} xs={1}>
                  <FontAwesomeIcon icon={menu.icon} />
                </Col>
                <Col sm={9} xs={6} className="pr-0">
                  {menu.name}
                </Col>
                <Col sm={1} xs={1} className="text-right p-0">
                  {menu.subMenu && <FontAwesomeIcon icon={faChevronDown} />}
                </Col>
              </Row>
            </Col>
          ))
        }
      </Row>
    </div>
  );
}
