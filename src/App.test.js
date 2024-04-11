import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const headerLogo = screen.getByAltText(
    "two Vs overlapping in an elegant font"
  )
  const headerText = screen.getByText("Vibe Villas")
  const apartmentsLink = screen.getByText("Apartments")
  const contactLink = screen.getByText("Contact")
  const loginLink = screen.getByText("Login")
  const getStartedButton = screen.getByText(/Get Started/i)
  expect(headerLogo).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
  expect(apartmentsLink).toBeInTheDocument()
  expect(contactLink).toBeInTheDocument()
  expect(loginLink).toBeInTheDocument()
  expect(getStartedButton).toBeInTheDocument()
  const markLink = screen.getByText("Mark Smith")
  const morganLink = screen.getByText("Morgan Smith")
  expect(morganLink).toBeInTheDocument()
  expect(markLink).toBeInTheDocument()
})
