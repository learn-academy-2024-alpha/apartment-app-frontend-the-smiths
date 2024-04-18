import React from "react"
import { Form, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const ApartmentEdit = ({ apartments, user, updateApartment, aptId }) => {
  const navigate = useNavigate()
  const apartment = apartments?.find((item) => item.id === aptId)

  const preloadedValues = {
    name: apartment?.name,
    street: apartment?.street,
    unit: apartment?.unit,
    city: apartment?.city,
    state: apartment?.state,
    square_footage: apartment?.square_footage,
    price: apartment?.price,
    bedrooms: apartment?.bedrooms,
    bathrooms: apartment?.bathrooms,
    pets: apartment?.pets,
    image: apartment?.image,
    user_id: user?.id,
    smart_security_system: apartment?.smart_security_system.toString(),
    rooftop_pool: apartment?.rooftop_pool.toString(),
    golf_course: apartment?.golf_course.toString(),
    community_garden: apartment?.community_garden.toString(),
    keyless_entry: apartment?.keyless_entry.toString(),
    onsite_daycare: apartment?.onsite_daycare.toString(),
    smart_thermostat: apartment?.smart_thermostat.toString(),
    spa: apartment?.spa.toString(),
    concierge: apartment?.concierge.toString(),
    ocean_view: apartment?.ocean_view.toString(),
    personal_chef: apartment?.personal_chef.toString(),
    fiber_optic: apartment?.fiber_optic.toString(),
    maid_service: apartment?.maid_service.toString(),
    pizza_ovens: apartment?.pizza_ovens.toString(),
    hibachi_grill: apartment?.hibachi_grill.toString(),
    full_kitchen: apartment?.full_kitchen.toString(),
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (editedApartment) => {
    updateApartment(editedApartment, apartment.id)
    navigate("/my-apartments")
  }
  return (
    <>
      <h3>Edit {apartment?.name}</h3>
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
          <Label for="bathrooms">Bathrooms</Label>
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
            className="other-form-option-btn darker darker-transition"
            type="submit"
            style={{ width: "11vw" }}
          >
            Submit Changes
          </button>
        </div>
      </Form>
    </>
  )
}

export default ApartmentEdit
