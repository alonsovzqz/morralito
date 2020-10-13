import React from "react";

import Card from "../../shared/components/UIElements/Card";
import "./Dashboard.css";

const Dashboard = () => {
  const isAdmin = true;

  const OPERATIONS = [
    {
      id: 0,
      title: "Compra",
      description: "Compra de diferentes divisas.",
      icon: "cart3",
      btn: {
        url: "#",
        text: "Realizar compra",
      },
    },
    {
      id: 1,
      title: "Venta",
      description: "Venta de diferentes divisas.",
      icon: "cash-stack",
      btn: {
        url: "/sell",
        text: "Realizar venta",
      },
    },
    {
      id: 2,
      title: "Usuarios",
      description:
        "Permite dar de alta/baja de usuarios, así como también permite editar la información de los usuarios.",
      icon: "people-fill",
      btn: {
        url: "#",
        text: "Administrar usuarios",
      },
    },
    {
      id: 3,
      title: "Gastos",
      description:
        "Registra todos los gastos generados por la sucursal (renta, agua, luz, etc.)",
      icon: "receipt-cutoff",
      btn: {
        url: "#",
        text: "Registrar gastos",
      },
    },
    {
      id: 4,
      title: "Reportes",
      description:
        "Permite visualizar/imprimir/filtrar reportes de la sucursal por tiempo, empleado, fecha, etc.",
      icon: "clipboard-data",
      btn: {
        url: "#",
        text: "Abrir reportes",
      },
    },
    {
      id: 5,
      title: "Préstamo",
      description:
        "Permite registrar préstamos entre sucursales, generando un documento que valida la realización del mismo.",
      icon: "credit-card-2-back",
      btn: {
        url: "#",
        text: "Registrar préstamo",
      },
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="text-center py-3">Operaciones</h1>
      <div className="d-flex flex-column justify-content-center">
        <div className="operations">
          <div className="row">
            {OPERATIONS.map((operation) => (
              <div key={operation.id} className="col-6">
                <Card
                  key={operation.id}
                  title={operation.title}
                  description={operation.description}
                  iconName={operation.icon}
                  to={operation.btn.url}
                  btnText={operation.btn.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
