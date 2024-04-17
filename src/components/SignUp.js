import React from "react"
import { Form, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"

const SignUp = ({ signUp, handleShowSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (newUser) => {
    signUp({ user: newUser })
  }

  return (
    <div className="sign-in-up-form-cont">
      <h2
        className="fancy-font"
        style={{ fontSize: "3vh", textAlign: "center" }}
      >
        Sign Up
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="emailSignUp">Email</Label>
          <input
            id="emailSignUp"
            name="email"
            type="text"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="form-validations error-form-text">
              Email is required
            </span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="passwordSignUp">Password</Label>
          <input
            id="passwordSignUp"
            name="password"
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="form-validations error-form-text">
              Password is required
            </span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="password_confirmation">Password Confirmation</Label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            className="form-control"
            {...register("password_confirmation", { required: true })}
          />
          {errors.password && (
            <span className="form-validations error-form-text">
              Password Confirmation is required
            </span>
          )}
        </FormGroup>
        <div className="justify-center">
          <button className="form-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Form>
      <hr />
      <div className="justify-center">
        <button className="other-form-option-btn" onClick={handleShowSignIn}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignUp
