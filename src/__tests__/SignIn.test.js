import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home.js"
import SignIn from "../components/SignIn.js"

test("renders SignIn component", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText(/Sign In/)
  expect(signInTitle).toBeInTheDocument()

  const username = screen.getByLabelText(/Email/)
  expect(username).toBeInTheDocument()

  const password = screen.getByLabelText(/Password/)
  expect(password).toBeInTheDocument()

  const signInBtn = screen.getByText(/Submit/)
  expect(signInBtn).toBeInTheDocument()

  const createAccountBtn = screen.getByText(/Create an Account/)
  expect(createAccountBtn).toBeInTheDocument()
})
