import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Tab(props) {
  const [tabItems, setTabItems] = useState([
    'standings',
    'scorers',
    'pastWinners',
    'teams',
    'matches'
  ]);

  return (
    <div className='tab-container'>
      <Nav tabs>
        {tabItems.map(tabItem => (
          <NavItem key={tabItem}>
            <NavLink
              href={`/competitions/${props.id}/${tabItem}`}
              path={tabItem}
            >
              {tabItem.split(/(?=[A-Z])/).join(' ')}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}
