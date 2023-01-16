import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("initial page render", () => {
  render(<App />);

  const inputUser = screen.getByPlaceholderText("email, CPF ou PIS");

  const inputPassword = screen.getByPlaceholderText("senha");

  const linkElement = screen.getByText(/Olá, visitante!/i);
  expect(linkElement).toBeInTheDocument();
  expect(inputUser).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
});

test("successful login render", async () => {
  render(<App />);

  const inputUser = screen.getByPlaceholderText("email, CPF ou PIS");
  fireEvent.change(inputUser, { target: { value: "username" } });

  const inputPassword = screen.getByPlaceholderText("senha");
  fireEvent.change(inputPassword, { target: { value: "password" } });

  const buttonSubmit = screen.getByText("Entrar");
  fireEvent.click(buttonSubmit);

  const processingButton = screen.getByText("Processando.....");
  expect(processingButton).toBeInTheDocument();
});

test("failed to login", async () => {
  render(<App />);

  const buttonSubmit = screen.getByText("Entrar");
  fireEvent.click(buttonSubmit);

  const processingButton = screen.getByText("Processando.....");
  expect(processingButton).toBeInTheDocument();

  render(<App />);

  await waitFor(() => {
    screen.getAllByText("Usuário ou senha incorretos!");
  });
});

test("signup screen", async () => {
  render(<App />);
  
  const buttonSignup = screen.getByText("Cadastrar");
  fireEvent.click(buttonSignup);

  const inputFullname = screen.getByPlaceholderText("Nome completo");
  fireEvent.change(inputFullname, { target: { value: "fullname" } });
  
  const inputEmail = screen.getByPlaceholderText("Email");
  fireEvent.change(inputEmail, { target: { value: "email" } });
  
  const inputCpf = screen.getByPlaceholderText("CPF");
  fireEvent.change(inputCpf, { target: { value: "cpf" } });
  
  const inputPis = screen.getByPlaceholderText("PIS");
  fireEvent.change(inputPis, { target: { value: "pis" } });
  
  const inputPassword = screen.getByPlaceholderText("Senha");
  fireEvent.change(inputPassword, { target: { value: "password" } });
  
  const inputStreet = screen.getByPlaceholderText("Rua");
  fireEvent.change(inputStreet, { target: { value: "street" } });
  
  const inputNumber = screen.getByPlaceholderText("Número");
  fireEvent.change(inputNumber, { target: { value: "number" } });
  
  const inputComp = screen.getByPlaceholderText("Complemento");
  fireEvent.change(inputComp, { target: { value: "comp" } });
  
  const inputCity = screen.getByPlaceholderText("Cidade");
  fireEvent.change(inputCity, { target: { value: "city" } });
  
  const inputCounty = screen.getByPlaceholderText("Estado");
  fireEvent.change(inputCounty, { target: { value: "county" } });
  
  const inputCountry = screen.getByPlaceholderText("País");
  fireEvent.change(inputCountry, { target: { value: "country" } });
    
  const inputZipcode = screen.getByPlaceholderText("CEP");
  fireEvent.change(inputZipcode, { target: { value: "zipcode" } });

  const buttonSubmit = screen.getByText("Registrar");
  fireEvent.click(buttonSubmit);  
});