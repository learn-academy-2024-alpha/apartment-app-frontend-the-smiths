import React from "react"
import { Form, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ createApartment, user, handleNewClick }) => {
  const navigate = useNavigate()

  const preloadedValues = {
    name: "Shell",
    street: "Test Street",
    unit: "Test Unit",
    city: "Addu",
    state: "Maldives",
    square_footage: 1000,
    price: "1,000",
    bedrooms: 4,
    bathrooms: 1.0,
    pets: "Test Pets",
    image:
      "https://images.unsplash.com/photo-1578439297699-eb414262c2de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxiZWFjaCUyMGhvdXNlfGVufDB8fDB8fHww",
    smart_security_system: false.toString(),
    rooftop_pool: true.toString(),
    golf_course: true.toString(),
    community_garden: true.toString(),
    keyless_entry: false.toString(),
    onsite_daycare: true.toString(),
    smart_thermostat: true.toString(),
    spa: true.toString(),
    concierge: false.toString(),
    ocean_view: false.toString(),
    personal_chef: false.toString(),
    fiber_optic: false.toString(),
    maid_service: false.toString(),
    pizza_ovens: true.toString(),
    hibachi_grill: true.toString(),
    full_kitchen: false.toString(),
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (newApartment) => {
    handleNewClick(null)
    newApartment.user_id = user.id
    createApartment(newApartment)
    navigate("/my-apartments")
  }

  return (
    <>
      <h3>Create a Listing</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            {...register("name", {
              required: "Apartment name is required",
            })}
          />
          {errors.name && (
            <span className="form-validations">{errors.name.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="street">Street Address</Label>
          <input
            id="street"
            name="street"
            type="text"
            className="form-control"
            {...register("street", { required: "Address is required" })}
          />
          {errors.street && (
            <span className="form-validations">{errors.street.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="unit">Unit</Label>
          <input
            id="unit"
            name="unit"
            type="text"
            className="form-control"
            {...register("unit")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <input
            id="city"
            name="city"
            type="text"
            className="form-control"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <span className="form-validations">{errors.city.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <input
            id="state"
            name="state"
            type="text"
            className="form-control"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && (
            <span className="form-validations">{errors.state.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="square_footage">Square Footage (number)</Label>
          <input
            id="square_footage"
            name="square_footage"
            type="number"
            className="form-control"
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
        <FormGroup>
          <Label for="price">Price</Label>
          <input
            id="price"
            name="price"
            type="text"
            className="form-control"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && (
            <span className="form-validations">{errors.price.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Number of Bedrooms</Label>
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            className="form-control"
            {...register("bedrooms", {
              required: "Number of bedrooms is required",
            })}
          />
          {errors.bedrooms && (
            <span className="form-validations">{errors.bedrooms.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms (number)</Label>
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            className="form-control"
            {...register("bathrooms", {
              required: "Number of bathrooms is required",
            })}
          />
          {errors.bathrooms && (
            <span className="form-validations">{errors.bathrooms.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets Policy</Label>
          <input
            id="pets"
            name="pets"
            type="text"
            className="form-control"
            {...register("pets", { required: "Pet policy is required" })}
          />
          {errors.pets && (
            <span className="form-validations">{errors.pets.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <span className="form-validations">{errors.image.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="smart_security_system">Smart Security System</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="smart_security_system"
              value={true}
              id="smart_security_system_yes"
              {...register("smart_security_system")}
            />
            <Label for="smart_security_system_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="smart_security_system"
              value={false}
              id="smart_security_system_no"
              {...register("smart_security_system")}
            />
            <Label for="smart_security_system_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="rooftop_pool">Rooftop Pool</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="rooftop_pool"
              value="true"
              id="rooftop_pool_yes"
              {...register("rooftop_pool")}
            />
            <Label for="rooftop_pool_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="rooftop_pool"
              value="false"
              id="rooftop_pool_no"
              {...register("rooftop_pool")}
            />
            <Label for="rooftop_pool_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="golf_course">Golf Course</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="golf_course"
              value="true"
              id="golf_course_yes"
              {...register("golf_course")}
            />
            <Label for="golf_course_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="golf_course"
              value="false"
              id="golf_course_no"
              {...register("golf_course")}
            />
            <Label for="golf_course_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="community_garden">Community Garden</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="community_garden"
              value="true"
              id="community_garden_yes"
              {...register("community_garden")}
            />
            <Label for="community_garden_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="community_garden"
              value="false"
              id="community_garden_no"
              {...register("community_garden")}
            />
            <Label for="community_garden_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="spa">Spa</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="spa"
              value="true"
              id="spa_yes"
              {...register("spa")}
            />
            <Label for="spa_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="spa"
              value="false"
              id="spa_no"
              {...register("spa")}
            />
            <Label for="spa_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="concierge">Concierge</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="concierge"
              value="true"
              id="concierge_yes"
              {...register("concierge")}
            />
            <Label for="concierge_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="concierge"
              value="false"
              id="concierge_no"
              {...register("concierge")}
            />
            <Label for="concierge_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="onsite_daycare">Onsite Daycare</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="onsite_daycare"
              value="true"
              id="onsite_daycare_yes"
              {...register("onsite_daycare")}
            />
            <Label for="onsite_daycare_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="onsite_daycare"
              value="false"
              id="onsite_daycare_no"
              {...register("onsite_daycare")}
            />
            <Label for="onsite_daycare_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="pizza_ovens">Pizza Ovens</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="pizza_ovens"
              value="true"
              id="pizza_ovens_yes"
              {...register("pizza_ovens")}
            />
            <Label for="pizza_ovens_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="pizza_ovens"
              value="false"
              id="pizza_ovens_no"
              {...register("pizza_ovens")}
            />
            <Label for="pizza_ovens_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="hibachi_grill">Hibachi Grill</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="hibachi_grill"
              value="true"
              id="hibachi_grill_yes"
              {...register("hibachi_grill")}
            />
            <Label for="hibachi_grill_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="hibachi_grill"
              value="false"
              id="hibachi_grill_no"
              {...register("hibachi_grill")}
            />
            <Label for="hibachi_grill_no">No</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="full_kitchen">Full Kitchen</Label>
          <div>
            <input
              className="pointer"
              type="radio"
              name="full_kitchen"
              value="true"
              id="full_kitchen_yes"
              {...register("full_kitchen")}
            />
            <Label for="full_kitchen_yes">Yes</Label>
          </div>
          <div>
            <input
              className="pointer"
              type="radio"
              name="full_kitchen"
              value="false"
              id="full_kitchen_no"
              {...register("full_kitchen")}
            />
            <Label for="full_kitchen_no">No</Label>
          </div>
        </FormGroup>
        <div>
          <button
            className="form-submit-btn darker darker-transition"
            type="submit"
            style={{ width: "9vw" }}
          >
            Create Listing
          </button>
        </div>
      </Form>
    </>
  )
}

export default ApartmentNew
