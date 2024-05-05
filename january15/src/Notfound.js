import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
    
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center text-danger">
          <h1 className="display-4">404</h1>
          <p className="lead">Oops! Page not found.</p>
          <p>The page you are looking for might is not found,  have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Notfound