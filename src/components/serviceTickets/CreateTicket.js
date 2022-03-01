import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export const Ticket = () => {
//create a useState variable to hold current ticket object
const [ ticket, assignTicket ]= useState({})
//state variable for array of employees
const [ employees, setEmployees] = useState([])

//variable storing the route parameter
const { ticketId } = useParams()
const history = useHistory()


//fetch the individual ticket, when the parameter value changes 
useEffect(
    () => {
        return fetch (`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
        .then(response => response.json())
        .then ((data) => {
            assignTicket(data)
        })
    },
    [ticketId] //above function runs when the value of ticketId Changes
)

//fetct all employees 
useEffect(
    () => {
        return fetch("http://localhost:8088/employees")
        .then(res=>res.json())
        .then((data) => {
            setEmployees(data)
        })
    },
    [] //only run when intial JSX rendering is complete
)

//function to invoke when an employee is chosen from <select> element
const assignEmployee = (changeEvent) => {
    //construct a new object to replace the existing one in the API
    const newServiceTicketObject = {
        customerId: ticket.customerId,
        employeeId: parseInt(changeEvent.target.value),
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: ticket.dateCompleted
    }
    //perform PUT HTTP request to replace resource
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newServiceTicketObject)
    })
    .then(()=>{
        history.push("/serviceTickets")
    })
}

//below is jsx
//use the ? - optional chaining - because those properties are nested and won't be seen from
//just the initialization of the state
//if we want to see properties of properties we need optional chaining
    return (
        <>
        <h2>Ticket Details</h2>
        <section className="ticket">
            <h3 className="ticket_description">{ ticket.description }</h3>
            <div className="ticket_customer">{ ticket.customer?.name }</div>
            <div className="ticket_employee">Assigned to
                <select value= {ticket.employeeId} onChange={ assignEmployee }>
                    {
                        employees.map(
                            (employee) =>{
                                return <option value ={employee.id} key={`employee--${employee.id}`}>
                                    { employee.name }
                                </option>
                            }
                        )
                    }
                </select>
            </div>
        </section>
        </>
    )
}