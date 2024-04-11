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

  const linkToApartments = screen.getByText("Apartments")
  expect(linkToApartments).toBeInTheDocument()
  expect(linkToApartments).toHaveAttribute("href", "/apartments")

  const linkToContact = screen.getByText("Contact")
  expect(linkToContact).toBeInTheDocument()
  expect(linkToContact).toHaveAttribute("href", "/contact")

  const linkToLogin = screen.getByText("Login")
  expect(linkToLogin).toBeInTheDocument()
  expect(linkToLogin).toHaveAttribute("href", "/signin")

  const buttonToGetStarted = screen.getByText("Get Started")
  expect(buttonToGetStarted).toBeInTheDocument()
})
