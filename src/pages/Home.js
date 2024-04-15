import React from "react"
import SignUp from "../components/SignUp.js"
import SignIn from "../components/SignIn.js"

const Home = () => {
  const [user, setUser] = useState(null)
  const signIn = async (user) => {
    try {
      const signInResponse = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      })
      if (!signInResponse) {
        throw new Error(signInResponse.errors)
      }
      const payload = await signInResponse.json()
      localStorage.setItem("token", signInResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setUser(payload)
    } catch (error) {
      console.log("Error fetching sign in data")
    }
  }
  const signUp = (user) => {
    console.log(user)
  }

  return (
    <div className="home-cont">
      <div className="hero-text justify-center">
        <h2 className="hero-h2 fancy-font">Live the Vibe, Love Your Life</h2>
        <h3 className="hero-h3">
          As the leader of luxury apartment rentals in the Maldives, we offer an
          unparalleled experience that redefines modern elegance.
        </h3>
      </div>
      <div className="card-container d-flex" data-testid="card-container">
        <div className="card-left">
          <SignUp signUp={signUp} />
        </div>
        <SignIn signIn={signIn} />
      </div>
    </div>
  )
}

export default Home
