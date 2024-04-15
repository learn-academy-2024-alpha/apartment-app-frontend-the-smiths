import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import { NavLink } from "react-router-dom"

test("renders NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const notFound404 = screen.getByText(/4 0 4/)
  expect(notFound404).toBeInTheDocument()

  const pageNotFoundText = screen.getByText(/Page Not Found/)
  expect(pageNotFoundText).toBeInTheDocument()

  const homeButton = screen.getByText(/View More Apartments/)
  expect(homeButton).toBeInTheDocument()
})
