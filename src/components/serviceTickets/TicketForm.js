import React, { useState } from "react"

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: " ",
        emergency: false,
    });

    //const saveTicket = (event) => {
       // event.preventDefault()
    //}

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
                        type="checkbox" />
                </div>
            </fieldset>
            <button className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}