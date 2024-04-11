import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

test("renders the Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )

  const markLink = screen.getByText("Mark Smith")
  const morganLink = screen.getByText("Morgan Smith")

  expect(markLink).toHaveAttribute("href", "https://github.com/mark19242")
  expect(morganLink).toHaveAttribute("href", "https://github.com/smorgannicole")
})
