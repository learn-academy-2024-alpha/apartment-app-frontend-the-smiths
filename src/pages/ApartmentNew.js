import React from "react"
import { Col, Row, Form, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ createApartment, user }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (newApartment) => {
    newApartment.user_id = user.id
    createApartment(newApartment)
    navigate("/my-apartments")
  }

  return (
    <div className="page-body">
      <h3 className="title-header center-content">Add a New Listing</h3>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-size">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Name of the Apartment"
                {...register("name", {
                  required: "Apartment name is required",
                })}
              />
              {errors.name && (
                <span className="form-validations">{errors.name.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="street">Street Address</Label>
              <input
                id="street"
                name="street"
                type="text"
                className="form-control"
                placeholder="Street Address"
                {...register("street", { required: "Address is required" })}
              />
              {errors.street && (
                <span className="form-validations">
                  {errors.street.message}
                </span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="unit">Unit</Label>
              <input
                id="unit"
                name="unit"
                type="text"
                className="form-control"
                placeholder="Unit"
                {...register("unit")}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <input
                id="city"
                name="city"
                type="text"
                className="form-control"
                placeholder="City"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <span className="form-validations">{errors.city.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="state">State</Label>
              <input
                id="state"
                name="state"
                type="text"
                className="form-control"
                placeholder="State"
                {...register("state", { required: "State is required" })}
              />
              {errors.state && (
                <span className="form-validations">{errors.state.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="square_footage">Square Footage</Label>
              <input
                id="square_footage"
                name="square_footage"
                type="number"
                className="form-control"
                placeholder="Square Footage"
                {...register("square_footage", {
                  required: "Square footage is required",
                })}
              />
              {errors.square_footage && (
                <span className="form-validations">
                  {errors.square_footage.message}
                </span>
              )}
            </FormGroup>
          </Col>
        </Row>
        {/* Price and Size */}
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="price">Price</Label>
              <input
                id="price"
                name="price"
                type="text"
                className="form-control"
                placeholder="Monthly Rental Price"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && (
                <span className="form-validations">{errors.price.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="bedrooms">Bedrooms</Label>
              <input
                id="bedrooms"
                name="bedrooms"
                type="number"
                className="form-control"
                placeholder="Number of Bedrooms"
                {...register("bedrooms", {
                  required: "Number of bedrooms is required",
                })}
              />
              {errors.bedrooms && (
                <span className="form-validations">
                  {errors.bedrooms.message}
                </span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="bathrooms">Bathrooms</Label>
              <input
                id="bathrooms"
                name="bathrooms"
                type="number"
                className="form-control"
                placeholder="Number of Bathrooms"
                {...register("bathrooms", {
                  required: "Number of bathrooms is required",
                })}
              />
              {errors.bathrooms && (
                <span className="form-validations">
                  {errors.bathrooms.message}
                </span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="pets">Pets Policy</Label>
              <input
                id="pets"
                name="pets"
                type="text"
                className="form-control"
                placeholder="Pets Policy"
                {...register("pets", { required: "Pet policy is required" })}
              />
              {errors.pets && (
                <span className="form-validations">{errors.pets.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        {/* Image and Features */}
        <FormGroup>
          <Label for="image">Image URL</Label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            placeholder="Image URL"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <span className="form-validations">{errors.image.message}</span>
          )}
        </FormGroup>
        <Col md={6}>
          <FormGroup>
            <Label for="smart_security_system">Smart Security System</Label>
            <select
              id="smart_security_system"
              name="smart_security_system"
              className="form-control"
              {...register("smart_security_system")}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="rooftop_pool">Rooftop Pool</Label>
            <select
              id="rooftop_pool"
              name="rooftop_pool"
              className="form-control"
              {...register("rooftop_pool")}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </FormGroup>
        </Col>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="golf_course">Golf Course</Label>
              <select
                id="golf_course"
                name="golf_course"
                className="form-control"
                {...register("golf_course")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="community_garden">Community Garden</Label>
              <select
                id="community_garden"
                name="community_garden"
                className="form-control"
                {...register("community_garden")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="spa">Spa</Label>
              <select
                id="spa"
                name="spa"
                className="form-control"
                {...register("spa")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="concierge">Concierge</Label>
              <select
                id="concierge"
                name="concierge"
                className="form-control"
                {...register("concierge")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="onsite_daycare">Onsite Daycare</Label>
              <select
                id="onsite_daycare"
                name="onsite_daycare"
                className="form-control"
                {...register("onsite_daycare")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="pizza_ovens">Pizza Ovens</Label>
              <select
                id="pizza_ovens"
                name="pizza_ovens"
                className="form-control"
                {...register("pizza_ovens")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="hibachi_grill">Hibachi Grill</Label>
              <select
                id="hibachi_grill"
                name="hibachi_grill"
                className="form-control"
                {...register("hibachi_grill")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="full_kitchen">Full Kitchen</Label>
              <select
                id="full_kitchen"
                name="full_kitchen"
                className="form-control"
                {...register("full_kitchen")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <div className="center-content">
          <button type="submit" className="nav-button">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default ApartmentNew
