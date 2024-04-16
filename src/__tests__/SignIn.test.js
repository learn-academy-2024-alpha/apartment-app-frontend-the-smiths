import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home.js"

test("renders SignIn component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText("Luxury in the Maldives")
  expect(signInTitle).toBeInTheDocument()

  const maidService = screen.getByText(/Maid Services/)
  expect(maidService).toBeInTheDocument()
  const personalChefs = screen.getByText(/Personal Chefs/)
  expect(personalChefs).toBeInTheDocument()
  const wifi = screen.getByText(/Fiber Optic Wifi/)
  expect(wifi).toBeInTheDocument()
})
