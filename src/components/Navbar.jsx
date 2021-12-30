import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{margin: "2rem"}}>
      <Link className="link" to="/create">Create New Loan</Link>
      <Link className="link" to="/details">Find Existing Loan</Link>
      <Link className="link" to="/update">Update Loan Details</Link>
    </div>
  )
}

export default Navbar
