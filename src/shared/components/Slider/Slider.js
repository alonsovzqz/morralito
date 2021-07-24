import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './Slider.css';

const Slider = ({ onSave, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="slider">
      <div
        className="slider__inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { width: '100%' })
        )}
      </div>
      <div className="slider__indicators">
        <Button
          disabled={activeIndex === 0}
          variant="primary"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          Anterior
        </Button>
        {activeIndex !== React.Children.count(children) - 1 ? (
          <Button
            disabled={activeIndex === React.Children.count(children) - 1}
            variant="primary"
            onClick={() => updateIndex(activeIndex + 1)}
          >
            Siguiente
          </Button>
        ) : (
          <Button variant="primary" onClick={onSave}>
            Guardar
          </Button>
        )}
      </div>
    </div>
  );
};

export default Slider;
