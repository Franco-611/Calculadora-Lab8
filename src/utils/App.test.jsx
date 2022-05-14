import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App.jsx'

it('Cantidad de digitos', async () => {
  render(<App />)

  const boton = screen.getByText('1')
  expect(boton).toBeInTheDocument()

  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)

  expect(await screen.getByText('111111111').toBeInTheDocument)
})

it('Digitos del resultado', async () => {
  render(<App />)

  const boton = screen.getByText('9')
  const boton1 = screen.getByText('X')
  expect(boton).toBeInTheDocument()
  const boton12 = screen.getByText('=')

  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton1)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton)
  await userEvent.click(boton12)

  expect(await screen.getByText('ERROR').toBeInTheDocument)
})
