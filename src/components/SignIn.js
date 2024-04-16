import React from "react"
import { Form, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"

const SignIn = ({ signIn, handleCreateAccount }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => {
    signIn({ user: formData })
  }

  return (
    <div className="sign-in-form-cont">
      <h2
        className="fancy-font"
        style={{ fontSize: "3vh", textAlign: "center" }}
      >
        Sign In
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="emailSignIn">Email</Label>
          <input
            id="emailSignIn"
            name="email"
            type="text"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="form-validations">Email is required</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="passwordSignIn">Password</Label>
          <input
            id="passwordSignIn"
            name="password"
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="form-validations">Password is required</span>
          )}
        </FormGroup>
        <div className="justify-center" style={{ marginBottom: "2vh" }}>
          <button className="form-submit-btn" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </Form>
      <hr />
      <div className="justify-center">
        <button className="other-form-option-btn" onClick={handleCreateAccount}>
          Create an Account
        </button>
      </div>
    </div>
  )
}

export default SignIn
