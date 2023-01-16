import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";

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

  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("newUser") || "{}");

    setUser(storedUser);
  }, [setUser]);

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

  const handleSubmit = () => {
    localStorage.setItem("newUser", JSON.stringify(newUser));
  };

  console.log(user);

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
            required
          />
          <input
            name="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />
          <input
            name="pis"
            type="text"
            value={pis}
            onChange={(e) => setPis(e.target.value)}
            placeholder="PIS"
          />
          <input
            name="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
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
            name="state"
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
          {fullname && email && cpf && pis && password ? (
            <>
              <Link
                className="signup-button"
                type="submit"
                role="button"
                onClick={handleSubmit}
                to="/"
              >
                Registrar
              </Link>
            </>
          ) : (
            <>
              <div className="tooltip-wrap">
                <Link
                  className="disabled-link"
                  type="submit"
                  role="button"
                  onClick={handleSubmit}
                  to="/"
                  aria-disabled
                >
                  Registrar
                </Link>
                <div className="tooltip-content">
                  Preencha Nome, Email, CPF, PIS e Senha
                </div>
              </div>
            </>
          )}
          <Link className="signup-button" type="submit" role="button" to="/">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
