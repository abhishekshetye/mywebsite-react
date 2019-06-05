import React from 'react';

export let MiddleComponent = ({middleComponent}) => (
  <h2 className="font-weight-light" id={middleComponent.css}>{middleComponent.data}</h2>
);