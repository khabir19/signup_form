import React from 'react';
import { getByPlaceholderText, render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from "../App"

test('renders initial page', () => {
  render(<App />);

  const inputUser = screen.getByPlaceholderText('email, CPF ou PIS');

  const inputPassword = screen.getByPlaceholderText('senha');

  const linkElement = screen.getByText(/Olá, visitante!/i);
  expect(linkElement).toBeInTheDocument();
  expect(inputUser).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
});

test('login successful', async () => {
  render(<App />);
  
  const inputUser = screen.getByPlaceholderText('email, CPF ou PIS');
  fireEvent.change(inputUser, {target: {value: 'harry' || 'harry@uol.com' || '12345678911' || '12345678912'}});

  const inputPassword = screen.getByPlaceholderText('senha');
  fireEvent.change(inputPassword, {target: {value: 'password'}});

  const buttonSubmit = screen.getByText('Entrar');
  fireEvent.click(buttonSubmit);

  const processingButton = screen.getByText('Processando.....');
  expect(processingButton).toBeInTheDocument();  

  render(<App />);

  await waitFor(() => {
    screen.getAllByText('Logout')
  })
})

test('failed to login', async () => {
  render(<App />);
  
  const buttonSubmit = screen.getByText('Entrar');
  fireEvent.click(buttonSubmit);
  
  const processingButton = screen.getByText('Processando.....');
  expect(processingButton).toBeInTheDocument();  

  render(<App />);

  await waitFor(() => {
    screen.getAllByText('Usuário ou senha incorretos!')
  })
})