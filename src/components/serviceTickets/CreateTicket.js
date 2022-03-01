import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Ticket = () => {
//create a useState variable to hold an individual ticket
const [ ticket, assignTicket ]= useState({})

//object desctructuring
//variable storing the route parameter
const { ticketId } = useParams()

//fetch the ticket, set state when it comes back from API
useEffect(
    () => {
        return fetch (`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
        .then(response => response.json())
        .then ((data) => {
            assignTicket(data)
        })
    },
    [ticketId]
)

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
            <div className="ticket_employee">{ ticket.employee?.name }</div>
        </section>
        </>
    )
}