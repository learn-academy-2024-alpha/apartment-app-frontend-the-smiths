import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentNew from "../pages/ApartmentNew"

test("renders ApartmentNew component", () => {
  render(
    <BrowserRouter>
      <ApartmentNew />
    </BrowserRouter>
  )

  const newTitle = screen.getByText(/Create a Listing/)
  expect(newTitle).toBeInTheDocument()

  const name = screen.getByLabelText(/Name/)
  expect(name).toBeInTheDocument()

  const street = screen.getByLabelText(/Street Address/)
  expect(street).toBeInTheDocument()

  const city = screen.getByLabelText(/City/)
  expect(city).toBeInTheDocument()

  const unit = screen.getByLabelText(/Unit/)
  expect(unit).toBeInTheDocument()

  const state = screen.getByLabelText(/State/)
  expect(state).toBeInTheDocument()

  const price = screen.getByLabelText(/Price/)
  expect(price).toBeInTheDocument()

  const square_footage = screen.getByLabelText(/Square Footage/)
  expect(square_footage).toBeInTheDocument()

  const bedrooms = screen.getByLabelText(/Number of Bedrooms/)
  expect(bedrooms).toBeInTheDocument()

  const bathrooms = screen.getByLabelText(/Bathrooms/)
  expect(bathrooms).toBeInTheDocument()

  const pets = screen.getByLabelText(/Pets Policy/)
  expect(pets).toBeInTheDocument()

  const image = screen.getByLabelText(/Image URL/)
  expect(image).toBeInTheDocument()

  const yes_radio_buttons = screen.getAllByLabelText(/Yes/)
  const no_radio_buttons = screen.getAllByLabelText(/No/)
  expect(yes_radio_buttons).toBeInTheDocument
  expect(no_radio_buttons).toBeInTheDocument

  const submitButton = screen.getByText("Create Listing")
  expect(submitButton).toBeInTheDocument()
})
