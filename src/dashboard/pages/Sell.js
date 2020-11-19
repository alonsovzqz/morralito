import React, { useState } from "react";

import Button from "../../shared/components/FormElements/Button";

const { ipcRenderer } = require("electron");

const Sell = () => {
  const [qty, setQty] = useState("0.00");
  const [exchangeAmount, setExchangeAmount] = useState("0.00");
  const [totalPayAmount, setTotalPayAmount] = useState("0.00");
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
  const date = new Date();

  const updateTotalAmountHandlerFromSellAmount = (e) => {
    const parsedQty = parseFloat(e.target.value);
    const parsedExchangeAmount = parseFloat(exchangeAmount);

    setQty(parsedQty);

    setTotalPayAmount((parsedQty * parsedExchangeAmount).toString());
  };

  const updateTotalAmountHandlerFromSellExchange = (e) => {
    const parsedQty = parseFloat(qty);
    const parsedExchangeAmount = parseFloat(e.target.value);

    setExchangeAmount(parsedExchangeAmount);

    setTotalPayAmount((parsedQty * parsedExchangeAmount).toString());
  };

  const saveTransactionHandler = () => {
    const operationValue = document.getElementById("operation");
    const transactionId = document.getElementById("folio");
    const transactionDate = document.getElementById("date");
    const transactionTime = document.getElementById("time");
    const clientName = document.getElementById("name");
    const clientAddress = document.getElementById("address");
    const clientResidenceState = document.getElementById("state");
    const transactionAmount = document.getElementById("sellAmount");
    const transactionExchangeAmount = document.getElementById(
      "sellExchangeAmount"
    );
    const transactionTotalAmount = document.getElementById("sellPayAmount");

    const sellData = {
      operationType: operationValue.value,
      operationId: transactionId.value,
      operationDate: transactionDate.value,
      operationTime: transactionTime.value,
      operationClientName: clientName.value,
      operationClientAddress: clientAddress.value,
      operationClientResidenceState: clientResidenceState.value,
      operationTransactionAmount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(transactionAmount.value),
      operationTransactionExchangeAmount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(transactionExchangeAmount.value),
      operationTotalAmount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(transactionTotalAmount.value),
    };

    ipcRenderer.invoke("insert-data", sellData);
  };

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
            value={date.toLocaleDateString()}
            readOnly={true}
          />
          <label htmlFor="time">Hora</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="time"
            value={date.toLocaleTimeString()}
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
              onChange={updateTotalAmountHandlerFromSellAmount}
              defaultValue={qty}
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
              defaultValue={exchangeAmount}
              onChange={updateTotalAmountHandlerFromSellExchange}
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
              value={totalPayAmount}
            />
          </div>
        </div>
      </div>
      <div className="form-group row justify-content-end">
        <div className="col d-flex align-items-center">
          <Button to="/dashboard" buttonType="link">
            Cancelar
          </Button>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <Button type="button" onClick={saveTransactionHandler}>
            Completar venta
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Sell;
