import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyApartments from "../pages/MyApartments"
import mockApartments from "../mockApartments"
import mockUsers from "../mockUsers"
import logo from "../assets/logo.png"

describe("MyApartments component", () => {
  test("renders MyApartments component", async () => {
    render(
      <BrowserRouter>
        <MyApartments apartments={mockApartments} user={mockUsers[0]} />
      </BrowserRouter>
    )

    const myApartments = mockApartments.filter(
      (apt) => apt.user_id === mockUsers[0].id
    )
    const headerLogo = screen.getByAltText(
      "two Vs overlapping in an elegant font"
    )
    expect(headerLogo).toBeInTheDocument()

    const myAptHeader = screen.getByText(/My Apartments/)
    expect(myAptHeader).toBeInTheDocument()

    const myAptImg = screen.getAllByAltText("my unit")
    expect(myAptImg).toHaveLength(myApartments.length)

    const editButtons = screen.getAllByTestId("edit-icon")
    expect(editButtons).toHaveLength(myApartments.length)

    const deleteButtons = screen.getAllByTestId("delete-icon")
    expect(deleteButtons).toHaveLength(myApartments.length)

    const seeMoreBtn = screen.getAllByText(/See More/)
    expect(seeMoreBtn).toHaveLength(myApartments.length)

    const bedrooms = screen.getAllByText(/bedroom/)
    expect(bedrooms).toHaveLength(myApartments.length)

    const price = screen.getAllByText(/night/)
    expect(price).toHaveLength(myApartments.length)

    myApartments.forEach((apartment) => {
      const aptName = screen.getByText(apartment.name)
      expect(aptName).toBeInTheDocument()

      const cityAndState = screen.getByText(
        `${apartment.city}, ${apartment.state}`
      )
      expect(cityAndState).toBeInTheDocument()
    })
  })
})
