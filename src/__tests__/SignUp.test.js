import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home.js"
import SignUp from "../components/SignUp.js"

test("renders SignIn component", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )

  const signUpTitle = screen.getByText(/Sign Up/)
  expect(signUpTitle).toBeInTheDocument()

  const username = screen.getByLabelText(/Email/)
  expect(username).toBeInTheDocument()

  const password = screen.getByLabelText("Password")
  expect(password).toBeInTheDocument()

  const passwordConfirmation = screen.getByLabelText("Password Confirmation")
  expect(passwordConfirmation).toBeInTheDocument()

  const submitBtn = screen.getByText(/Submit/)
  expect(submitBtn).toBeInTheDocument()

  const signInBtn = screen.getByText(/Sign In/)
  expect(signInBtn).toBeInTheDocument()
})
