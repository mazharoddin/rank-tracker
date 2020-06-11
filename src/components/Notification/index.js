import React from 'react';
import { Card } from 'reactstrap';
import './index.css';

export default function Notification(props) {
  return (
    <Card className={`${props.className}`} style={{ backgroundColor: '#37A0F7', borderRadius: '0' }}>
      <p className="text-white text-center m-auto">You have 14 days left in your trial. Upgrade now</p>
    </Card>
  );
}
