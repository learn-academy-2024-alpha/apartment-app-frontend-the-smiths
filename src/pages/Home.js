import React from "react"

const Home = () => {
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
        <div className="card-left"></div>
      </div>
    </div>
  )
}

export default Home
