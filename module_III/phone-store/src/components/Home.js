import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <div className ="Container">
        <div className="min-vh-100 row align-items-center">
          <div className="col-6">
            <div>
              <img src="/images/home.png" alt="home" className="w-100" />
            </div>
          </div>
          <div className="col-6">
            <div>
              <h1 className="text-primary">Welcome to the React Phone Store</h1>
              <Link className="btn btn-primary font-weight-bold" to="/catalog">Go to Catalog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;