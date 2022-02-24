import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/serviceTickets">ServiceTickets</Link>
            </li>
        </ul>
    )
}

          //  <li className="navbar__item">
              /*   <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("honey_customer")
                        }
                    }>
                    Log Out
                    </Link>
            </li> */
//Link components broadcast the message that the url has changed. We have to have the link.
//link has a "to" attribut that will render a hyperlink to the DOM when clicked
//the url in browser will change to the value of "to"