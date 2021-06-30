import React from "react"
import { Link } from "react-router-dom"

const NotFoundView = () => {
  return (
    <div className="NotFoundWrapper">
      <p> 404. Page, not found.</p>
      <Link to="/auth"> You can go back to the home page</Link>
    </div>
  )
}
export default NotFoundView
