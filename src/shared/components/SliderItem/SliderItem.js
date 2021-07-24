import React from 'react';

import './SliderItem.css';

const SliderItem = ({ children, width }) => (
  <div className="slider__item" style={{ width }}>
    {children}
  </div>
);

export default SliderItem;
