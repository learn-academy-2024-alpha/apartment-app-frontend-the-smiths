// import NavButton from "../components/NavButton"
import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const ApartmentEdit = ({ apartments, updateApartment, user }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(apartments)
  // const apartment = apartments.find((item) => item.id === +id)

  // const preloadedValues = {
  //   street: apartment?.street,
  //   unit: apartment?.unit,
  //   city: apartment?.city,
  //   state: apartment?.state,
  //   square_footage: apartment?.square_footage,
  //   price: apartment?.price,
  //   bedrooms: apartment?.bedrooms,
  //   bathrooms: apartment?.bathrooms,
  //   pets: apartment?.pets,
  //   image: apartment?.image,
  //   user_id: user.id,
  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (editedApartment) => {
    updateApartment(editedApartment, apartment.id)
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
            <div>
              <input
                type="radio"
                name="smart_security_system"
                value="true"
                id="smart_security_system_yes"
                className="form-check-input"
                {...register("smart_security_system")}
              />
              <Label
                for="smart_security_system_yes"
                className="form-check-label"
              >
                Yes
              </Label>
            </div>
            <div>
              <input
                type="radio"
                name="smart_security_system"
                value="false"
                id="smart_security_system_no"
                className="form-check-input"
                {...register("smart_security_system")}
              />
              <Label
                for="smart_security_system_no"
                className="form-check-label"
              >
                No
              </Label>
            </div>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="rooftop_pool">Rooftop Pool</Label>
            <div>
              <input
                type="radio"
                name="rooftop_pool"
                value="true"
                id="rooftop_pool_yes"
                className="form-check-input"
                {...register("rooftop_pool")}
              />
              <Label for="rooftop_pool_yes" className="form-check-label">
                Yes
              </Label>
            </div>
            <div>
              <input
                type="radio"
                name="rooftop_pool"
                value="false"
                id="rooftop_pool_no"
                className="form-check-input"
                {...register("rooftop_pool")}
              />
              <Label for="rooftop_pool_no" className="form-check-label">
                No
              </Label>
            </div>
          </FormGroup>
        </Col>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="golf_course">Golf Course</Label>
              <div>
                <input
                  type="radio"
                  name="golf_course"
                  value="true"
                  id="golf_course_yes"
                  className="form-check-input"
                  {...register("golf_course")}
                />
                <Label for="golf_course_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="golf_course"
                  value="false"
                  id="golf_course_no"
                  className="form-check-input"
                  {...register("golf_course")}
                />
                <Label for="golf_course_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="community_garden">Community Garden</Label>
              <div>
                <input
                  type="radio"
                  name="community_garden"
                  value="true"
                  id="community_garden_yes"
                  className="form-check-input"
                  {...register("community_garden")}
                />
                <Label for="community_garden_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="community_garden"
                  value="false"
                  id="community_garden_no"
                  className="form-check-input"
                  {...register("community_garden")}
                />
                <Label for="community_garden_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="spa">Spa</Label>
              <div>
                <input
                  type="radio"
                  name="spa"
                  value="true"
                  id="spa_yes"
                  className="form-check-input"
                  {...register("spa")}
                />
                <Label for="spa_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="spa"
                  value="false"
                  id="spa_no"
                  className="form-check-input"
                  {...register("spa")}
                />
                <Label for="spa_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="concierge">Concierge</Label>
              <div>
                <input
                  type="radio"
                  name="concierge"
                  value="true"
                  id="concierge_yes"
                  className="form-check-input"
                  {...register("concierge")}
                />
                <Label for="concierge_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="concierge"
                  value="false"
                  id="concierge_no"
                  className="form-check-input"
                  {...register("concierge")}
                />
                <Label for="concierge_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="onsite_daycare">Onsite Daycare</Label>
              <div>
                <input
                  type="radio"
                  name="onsite_daycare"
                  value="true"
                  id="onsite_daycare_yes"
                  className="form-check-input"
                  {...register("onsite_daycare")}
                />
                <Label for="onsite_daycare_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="onsite_daycare"
                  value="false"
                  id="onsite_daycare_no"
                  className="form-check-input"
                  {...register("onsite_daycare")}
                />
                <Label for="onsite_daycare_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="pizza_ovens">Pizza Ovens</Label>
              <div>
                <input
                  type="radio"
                  name="pizza_ovens"
                  value="true"
                  id="pizza_ovens_yes"
                  className="form-check-input"
                  {...register("pizza_ovens")}
                />
                <Label for="pizza_ovens_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pizza_ovens"
                  value="false"
                  id="pizza_ovens_no"
                  className="form-check-input"
                  {...register("pizza_ovens")}
                />
                <Label for="pizza_ovens_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="hibachi_grill">Hibachi Grill</Label>
              <div>
                <input
                  type="radio"
                  name="hibachi_grill"
                  value="true"
                  id="hibachi_grill_yes"
                  className="form-check-input"
                  {...register("hibachi_grill")}
                />
                <Label for="hibachi_grill_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="hibachi_grill"
                  value="false"
                  id="hibachi_grill_no"
                  className="form-check-input"
                  {...register("hibachi_grill")}
                />
                <Label for="hibachi_grill_no" className="form-check-label">
                  No
                </Label>
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="full_kitchen">Full Kitchen</Label>
              <div>
                <input
                  type="radio"
                  name="full_kitchen"
                  value="true"
                  id="full_kitchen_yes"
                  className="form-check-input"
                  {...register("full_kitchen")}
                />
                <Label for="full_kitchen_yes" className="form-check-label">
                  Yes
                </Label>
              </div>
              <div>
                <input
                  type="radio"
                  name="full_kitchen"
                  value="false"
                  id="full_kitchen_no"
                  className="form-check-input"
                  {...register("full_kitchen")}
                />
                <Label for="full_kitchen_no" className="form-check-label">
                  No
                </Label>
              </div>
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

export default ApartmentEdit
