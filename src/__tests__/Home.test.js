import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const homeH2Text = screen.getByText(/Live the Vibe, Love Your Life/)
  expect(homeH2Text).toBeInTheDocument()
  const homeH3Text = screen.getByText(
    /As the undisputed leader in luxury apartment rentals, we offer an unparalleled experience that redefines elegance and comfort\./s
  )
  expect(homeH3Text).toBeInTheDocument()
  const card = screen.queryByTestId("card-container")
  expect(card).toBeInTheDocument()
})
