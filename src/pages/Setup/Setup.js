import React from 'react';

import { Row, Col, Form } from 'react-bootstrap';

import logo from '../../assets/images/logo.png';
import Slider from '../../shared/components/Slider/Slider';
import SliderItem from '../../shared/components/SliderItem/SliderItem';

import './Setup.css';

const Setup = () => {
  const saveInfoHandler = () => {
    console.log('Saving info...');
  };

  return (
    <div className="setup">
      <Row>
        <Col>
          <div className="stepper">
            <ul className="stepper-steps__list">
              <li className="step__item step__item--active">1</li>
              <li className="step__item">2</li>
              <li className="step__item">3</li>
              <li className="step__item">4</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <img className="setup__image" src={logo} alt="Logo" />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="display--flex flex--column">
          <div className="forms">
            <Slider onSave={saveInfoHandler}>
              <SliderItem>
                <div
                  className="display--flex flex--column"
                  style={{ width: '99%' }}
                >
                  <h3>Datos del negocio</h3>
                  <Form.Group controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa la dirección..."
                    />
                  </Form.Group>
                </div>
              </SliderItem>
              <SliderItem>
                <Form.Group controlId="rfc" style={{ width: '99%' }}>
                  <Form.Label>RFC</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa el RFC..." />
                </Form.Group>
              </SliderItem>
              <SliderItem>
                <Form.Group controlId="cnbv" style={{ width: '99%' }}>
                  <Form.Label>CNBV</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa el CNBV..." />
                </Form.Group>
              </SliderItem>
              <SliderItem>
                <div className="flex--column" style={{ width: '99%' }}>
                  <h3>Crea un usuario</h3>
                  <Form.Group controlId="user-username">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa el nombre del administrador..."
                    />
                  </Form.Group>
                  <Form.Group controlId="user-password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingresa una contraseña..."
                    />
                  </Form.Group>
                </div>
              </SliderItem>
            </Slider>
            {/*<div className="forms__item forms__item--active">
              <h3>Datos del negocio</h3>
            </div>
             <div className="forms__item"></div>
            <div className="forms__item"></div>
            <div className="forms__item">
              <h3>Crea un usuario</h3>
            </div> */}
          </div>
          {/* <Button
            className="align--self--end margin--top--2"
            variant="primary"
            onClick={handleNextItem}
          >
            Siguiente
          </Button> */}
        </Col>
      </Row>
    </div>
  );
};

export default Setup;
