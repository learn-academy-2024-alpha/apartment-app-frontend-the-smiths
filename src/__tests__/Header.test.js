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

  const apartmentsLink = screen.getByText("Available Apartments")
  expect(apartmentsLink).toBeInTheDocument()
  expect(apartmentsLink).toHaveAttribute("href", "/apartments")

  const contactLink = screen.getByText("Explore the Maldives")
  expect(contactLink).toBeInTheDocument()
  expect(contactLink).toHaveAttribute(
    "href",
    "https://maldives-magazine.com/top-10/10-experiences-every-traveler-maldives.htm"
  )

  const getStartedButton = screen.getByText("Get Started")
  expect(getStartedButton).toBeInTheDocument()
})
