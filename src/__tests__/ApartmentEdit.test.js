import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentEdit from "../pages/ApartmentEdit"
import mockApartments from "../mockApartments.js"
import mockUsers from "../mockUsers"

test("renders ApartmentEdit component", () => {
  render(
    <BrowserRouter>
      <ApartmentEdit
        apartments={mockApartments}
        user={mockUsers}
        aptId={mockApartments[0].id}
      />
    </BrowserRouter>
  )

  const apartment = mockApartments.find((item) => item.id === mockUsers[0].id)

  const editTitle = screen.getByText(/Edit/)
  expect(editTitle).toBeInTheDocument()

  const name = screen.getByLabelText(/Name/)
  expect(name).toBeInTheDocument()
  const nameValue = screen.getByDisplayValue(apartment.name)
  expect(nameValue).toBeInTheDocument()

  const street = screen.getByLabelText(/Street Address/)
  expect(street).toBeInTheDocument()
  const streetValue = screen.getByDisplayValue(apartment.street)
  expect(streetValue).toBeInTheDocument()

  const city = screen.getByLabelText(/City/)
  expect(city).toBeInTheDocument()
  const cityValue = screen.getByDisplayValue(apartment.city)
  expect(cityValue).toBeInTheDocument()

  const unit = screen.getByLabelText(/Unit/)
  expect(unit).toBeInTheDocument()
  const unitValue = screen.getByDisplayValue(apartment.unit)
  expect(unitValue).toBeInTheDocument()

  const state = screen.getByLabelText(/State/)
  expect(state).toBeInTheDocument()
  const stateValue = screen.getByDisplayValue(apartment.state)
  expect(stateValue).toBeInTheDocument()

  const price = screen.getByLabelText(/Price/)
  expect(price).toBeInTheDocument()
  const priceValue = screen.getByDisplayValue(apartment.price)
  expect(priceValue).toBeInTheDocument()

  const square_footage = screen.getByLabelText(/Square Footage/)
  expect(square_footage).toBeInTheDocument()
  const square_footageValue = screen.getByDisplayValue(apartment.square_footage)
  expect(square_footageValue).toBeInTheDocument()

  const bedrooms = screen.getByLabelText(/Number of Bedrooms/)
  expect(bedrooms).toBeInTheDocument()
  const bedroomsValue = screen.getByDisplayValue(apartment.bedrooms)
  expect(bedroomsValue).toBeInTheDocument()

  const bathrooms = screen.getByLabelText(/Bathrooms/)
  expect(bathrooms).toBeInTheDocument()
  const bathroomsValue = screen.getByDisplayValue(apartment.bathrooms)
  expect(bathroomsValue).toBeInTheDocument()

  const pets = screen.getByLabelText(/Pets Policy/)
  expect(pets).toBeInTheDocument()
  const petsValue = screen.getByDisplayValue(apartment.pets)
  expect(petsValue).toBeInTheDocument()

  const image = screen.getByLabelText(/Image URL/)
  expect(image).toBeInTheDocument()
  const imageValue = screen.getByDisplayValue(apartment.image)
  expect(imageValue).toBeInTheDocument()

  const yes_radio_buttons = screen.getAllByLabelText(/Yes/)
  const no_radio_buttons = screen.getAllByLabelText(/No/)
  expect(yes_radio_buttons.length).toBeGreaterThan(0)
  expect(no_radio_buttons.length).toBeGreaterThan(0)

  const yes_radio_button_values = screen.getAllByDisplayValue("true")
  const no_radio_button_values = screen.getAllByDisplayValue("false")
  expect(yes_radio_button_values.length).toBeGreaterThan(0)
  expect(no_radio_button_values.length).toBeGreaterThan(0)

  const submitButton = screen.getByText("Submit Changes")
  expect(submitButton).toBeInTheDocument()
})
