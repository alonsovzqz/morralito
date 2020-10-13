import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import logo from "../../assets/images/logo.png";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [formState, inputHandler, setFormData] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    setFormData(
      {
        ...formState.inputs,
        username: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
      },
      false
    );
  }, []);

  const users = [
    {
      id: 1,
      username: "juan.perez",
      name: "Juan Perez",
      phone: "111-444-5555",
      password: "JuanPerez25",
      isAdmin: false,
    },
    {
      id: 2,
      username: "judith.chavez",
      name: "Judith Chavez",
      phone: "555-555-5555",
      password: "JudithChavez26",
      isAdmin: true,
    },
  ];

  const authSubmitHandler = (event) => {
    event.preventDefault();

    // TO-DO: Change the logic to redirect
    // the user once logged in.
    history.push("/dashboard");
  };

  return (
    <div className="login d-flex flex-column justify-content-center align-items-center">
      <img
        src={logo}
        className="img-fluid mx-auto"
        alt="Logo"
        width="256"
        height="256"
      />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="username"
          elementType="input"
          type="text"
          placeholder="juan.perez"
          label="Usuario"
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Por favor ingresa el usuario."
          onInput={inputHandler}
        />
        <Input
          id="password"
          elementType="input"
          type="password"
          label="Contraseña"
          placeholder="JuanPerez25"
          validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_REQUIRE()]}
          errorMessage="La contraseña debe tener al menos 6 caracteres."
          onInput={inputHandler}
        />
        <Button
          type="submit"
          buttonType="primary"
          buttonBlock
          disabled={!formState.isValid}
        >
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default Login;
