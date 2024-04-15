import React from "react"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import mockUsers from "../mockUsers.js"

const SignOut = ({ showSignUpForm }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (userData) => {
    console.log(userData)
    // navigate("/")
  }

  return (
    <div>
      SignUp
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="email">Email</Label>
              <input
                id="email"
                name="email"
                placeholder="email"
                type="text"
                className="form-control"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="form-validations">Email is required</span>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <input
                id="password"
                name="password"
                placeholder="password"
                type="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="form-validations">Password is required</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="password_confirmation">Password Confirmation</Label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            placeholder="password_confirmation"
            type="password"
            className="form-control"
            {...register("password_confirmation", { required: true })}
          />
          {errors.password && (
            <span className="form-validations">Password is required</span>
          )}
        </FormGroup>
        <div className="centering-content">
          <button
            onClick={handleSubmit}
            className="nav-button gochi-hand-regular"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default SignOut
