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
  const apartmentsLink = screen.getByText("Available Apartments")
  const exploreLink = screen.getByText("Explore the Maldives")
  const getStartedButton = screen.getByText(/Get Started/i)
  expect(headerLogo).toBeInTheDocument()
  const getStartedButton2 = screen.getByText(/Sign In/i)
  expect(headerLogo).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
  expect(apartmentsLink).toBeInTheDocument()
  expect(exploreLink).toBeInTheDocument()
  expect(getStartedButton).toBeInTheDocument()
  expect(getStartedButton2).toBeInTheDocument()
  const markLink = screen.getByText("Mark Smith")
  const morganLink = screen.getByText("Morgan Smith")
  expect(morganLink).toBeInTheDocument()
  expect(markLink).toBeInTheDocument()
})
