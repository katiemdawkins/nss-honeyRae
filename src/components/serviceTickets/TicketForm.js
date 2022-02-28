import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketForm = () => {
    //user will be typing in information that is transient until they hit the submit button so we need this..
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false,
    })

    const history = useHistory()

    //when the user submits ticket we need to save the input and add things like time of submission, so we need to create a submit tickt object
    const submitTicket = (evt) => {
        evt.preventDefault()

        const newTicket = {
           description: ticket.description,
           emergency: ticket.emergency,
           customerId: parseInt(localStorage.getItem("honey_customer")),
           //the employeeId will actually be assigned later, but we have to hard code an actual number, otherwise json server thinks it's garbage data and deletes the whole object behind the scenes
           employeeId: 1,
           dateCompleted: ""
       }
       const fetchOption ={
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(newTicket)
       }
       return fetch("http://localhost:8088/serviceTickets", fetchOption)
        .then(()=>{
            history.push("/serviceTickets")
        })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description=evt.target.value
                                updateTicket(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                            />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input 
                        onChange={
                            (evt) =>{
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                updateTicket(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <button onClick={submitTicket} className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}