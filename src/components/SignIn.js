import React from "react"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import mockUsers from "../mockUsers.js"

const SignIn = ({ signIn }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => {
    signIn({ user: formData })
    // navigate("/")
  }

  return (
    <div>
      SignIn
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

export default SignIn
