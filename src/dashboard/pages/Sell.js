import React from "react";

import Button from "../../shared/components/FormElements/Button";

const Sell = () => {
  const MEXICO_STATES = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Chihuahua",
    "Colima",
    "Campeche",
    "Coahuila",
    "Chiapas",
    "Federal District",
    "Durango",
    "Guerrero",
    "Guanajuato",
    "Hidalgo",
    "Jalisco",
    "México State",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "Sinaloa",
    "San Luis Potosí",
    "Sonora",
    "Tabasco",
    "Tlaxcala",
    "Tamaulipas",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="operation">Operación</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="operation"
            value="Venta"
            readOnly={true}
          />
          <label htmlFor="folio">Folio</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="folio"
            readOnly={true}
            value="F0000058"
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="date">Fecha</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="date"
            value="14/Oct/2020"
            readOnly={true}
          />
          <label htmlFor="time">Hora</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="time"
            value="12:26 PM"
            readOnly={true}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-8">
          <label htmlFor="name">Nombre(s) / Apellido(s)</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group col-4">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-8">
          <label htmlFor="address">Dirección</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-group col-4">
          <label htmlFor="state">Estado</label>
          <select id="state" className="form-control">
            {MEXICO_STATES.map((state, index) => (
              <option key={index}>{state}</option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <div className="form-group row justify-content-end">
        <label htmlFor="sellAmount" className="col-2 col-form-label">
          Cantidad
        </label>
        <div className="col-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="sellAmount"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
        </div>
      </div>
      <div className="form-group row justify-content-end">
        <label htmlFor="sellExchangeAmount" className="col-2 col-form-label">
          Tipo de Cambio
        </label>
        <div className="col-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="sellExchangeAmount"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
        </div>
      </div>
      <div className="form-group row justify-content-end">
        <label htmlFor="sellPayAmount" className="col-2 col-form-label">
          Importe a pagar
        </label>
        <div className="col-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="sellPayAmount"
              aria-label="Amount (to the nearest dollar)"
              readOnly={true}
              value=""
            />
          </div>
        </div>
      </div>
      <div className="form-group row justify-content-end">
        <div className="col d-flex align-items-center">
          <Button to="/dashboard" buttonType="link">
            Cancel
          </Button>
        </div>
        <div className="col-4 d-flex justify-content-around">
          <Button type="button" buttonType="secondary">
            <span className="bs bs-printer"></span> Imprimir recibo
          </Button>
          <Button type="button">Completar venta</Button>
        </div>
      </div>
    </form>
  );
};

export default Sell;
