import React, { useState } from "react";
import "../../styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import {
  validEmail,
  validCpf,
  validPis,
  validPassword,
} from "../../regex/regex";

const Signup = () => {
  interface UserData {
    fullname: string;
    email: string;
    cpf: string;
    pis: string;
    password: string;
    street: string;
    number: string;
    comp: string;
    city: string;
    county: string;
    country: string;
    zipcode: string;
  }

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pis, setPis] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [comp, setComp] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [cpfErr, setCpfErr] = useState(false);
  const [pisErr, setPisErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const newUser: UserData = {
    fullname: fullname,
    email: email,
    cpf: cpf,
    pis: pis,
    password: password,
    street: street,
    number: number,
    comp: comp,
    city: city,
    county: county,
    country: country,
    zipcode: zipcode,
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validCpf.test(cpf)) {
      setCpfErr(true);
    }
    if (!validPis.test(pis)) {
      setPisErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
    if (
      validEmail.test(email) &&
      validCpf.test(cpf) &&
      validPis.test(pis) &&
      validPassword.test(password)
    ) {
      localStorage.setItem("newUser", JSON.stringify(newUser));

      navigate("/");
    }
  };

  return (
    <div className="App">
      <div className="signup-container">
        <form className="form">
          <h2>Dados de Cadastro</h2>
          <input
            name="name"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Nome completo"
          />
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {emailErr && <span>Seu Email não é válido</span>}
          <input
            name="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />
          {cpfErr && <span>Seu CPF não é valido</span>}
          <input
            name="pis"
            type="text"
            value={pis}
            onChange={(e) => setPis(e.target.value)}
            placeholder="PIS"
          />
          {pisErr && <span>Seu PIS não é valido</span>}
          <input
            name="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          {pwdError && <span>Sua senha não é válida</span>}
          <h2>Endereço</h2>
          <input
            name="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Rua"
          />
          <input
            name="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Número"
          />
          <input
            name="comp"
            type="text"
            value={comp}
            onChange={(e) => setComp(e.target.value)}
            placeholder="Complemento"
          />
          <input
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Cidade"
          />
          <input
            name="county"
            type="text"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            placeholder="Estado"
          />
          <input
            name="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="País"
          />
          <input
            name="zipcode"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder="CEP"
          />
          <>
            <button
              className="submit-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Registrar
            </button>
          </>
          <Link className="submit-button" type="submit" role="button" to="/">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
