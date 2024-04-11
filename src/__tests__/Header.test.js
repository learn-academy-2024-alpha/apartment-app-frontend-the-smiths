import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import logo from "../assets/logo.png"

test("renders the Header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const headerLogo = screen.getByAltText(
    "two Vs overlapping in an elegant font"
  )
  expect(headerLogo).toBeInTheDocument()
  expect(headerLogo).toHaveAttribute("src", logo)

  const headerText = screen.getByText("Vibe Villas")
  expect(headerText).toBeInTheDocument()

  const apartmentsLink = screen.getByText("Apartments")
  expect(apartmentsLink).toBeInTheDocument()
  expect(apartmentsLink).toHaveAttribute("href", "/apartments")

  const contactLink = screen.getByText("Contact")
  expect(contactLink).toBeInTheDocument()
  expect(contactLink).toHaveAttribute("href", "/contact")

  const loginLink = screen.getByText("Login")
  expect(loginLink).toBeInTheDocument()
  expect(loginLink).toHaveAttribute("href", "/signin")

  const getStartedButton = screen.getByText("Get Started")
  expect(getStartedButton).toBeInTheDocument()
})
