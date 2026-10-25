import React from 'react';
import { capabilities } from '../data/siteContent.js';

function RibbonGroup({ repeated = false }) {
  return (
    <div className="ribbon-group">
      {capabilities.map((item) => (
        <span className="ribbon-item" key={`${repeated ? 'repeat-' : ''}${item}`}>
          {item}<i />
        </span>
      ))}
    </div>
  );
}

export function MotionRibbon() {
  return (
    <div className="motion-ribbon" aria-hidden="true">
      <div className="ribbon-track">
        <RibbonGroup />
        <RibbonGroup repeated />
      </div>
    </div>
  );
}
