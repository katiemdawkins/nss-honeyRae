import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css"
import { Link } from "react-router-dom"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()
    

    const getState = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
    }

    useEffect(
        () => {
           getState()
        },
        []
    )

    useEffect(()=>{
        const activeTicketCount= tickets.filter(t=> t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
       .then((data)=>{
           getState(data)
       })
    }



    return (
        <>
            <h2>Service Tickets</h2>
            <div>
                <button onClick={()=> history.push("serviceTickets/create")}>Create Ticket</button>
            </div>
            { active }
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`ticket ${ticket.emergency ? `emergency`: ""}`}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/serviceTickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                            <button onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button>
                        </div>
                    }
                )
            }
        </>
    )
}

//converted the ticket description into a hyperlink 
//by directing to the url that it should change to when clicked 