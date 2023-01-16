import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import userData from "../../userData/index";
import { Link } from "react-router-dom";

const Login = () => {
  interface LoginState {
    fullname: string;
    username: string;
    password: string;
    isLoading: boolean;
    error: string;
    isLoggedIn: boolean;
  }

  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("newUser") || "{}");

    setUser(storedUser);
  }, [setUser]);

  type LoginAction =
    | { type: "login" | "success" | "error" | "logout" | "edit" }
    | { type: "field"; fieldName: string; payload: string };

  const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
      case "field": {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case "login": {
        return {
          ...state,
          error: "",
          isLoading: true,
        };
      }
      case "success": {
        return {
          ...state,
          error: "",
          isLoading: false,
          isLoggedIn: true,
        };
      }
      case "error": {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          username: "",
          password: "",
          error: "Usuário ou senha incorretos!",
        };
      }
      case "logout": {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
      case "edit": {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
      default:
        return state;
    }
  };

  const initialState: LoginState = {
    fullname: "",
    username: "",
    password: "",
    isLoading: false,
    error: "",
    isLoggedIn: false,
  };

  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await userData({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  console.log(user);

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <p>{`Hello ${username}`}</p>

            <button type="button" onClick={() => dispatch({ type: "edit" })}>
              <Link to="/edit">Editar</Link>
            </button>
            <button type="button" onClick={() => dispatch({ type: "logout" })}>
              Sair
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p> Olá, visitante!</p>
            <input
              type="text"
              placeholder="email, CPF ou PIS"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type="password"
              placeholder="senha"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value,
                })
              }
            />
            <button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "Processando....." : "Entrar"}
            </button>
            <p>Ainda não tem cadastro?</p>
            <Link to="/signup">
              <button className="signup">Cadastrar</button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
