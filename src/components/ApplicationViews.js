import React from "react";
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList";
import { CustomerList } from "./customers/CustomerList";
import { TicketList } from "./serviceTickets/TicketList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { Ticket } from "./serviceTickets/CreateTicket";
import { EmployeeSpecialty } from "./employees/EmployeeSpecialty";

export const ApplicationViews = () => { 
    return (
        <>
            <Route path ="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeSpecialty />
            </Route>

            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>

            <Route exact path="/serviceTickets/:ticketId(\d+)">
                <Ticket />
            </Route>

           <Route path="/serviceTickets/create">
               <TicketForm />
            </Route>

            
        </>
    )
}

//Route Component - Is the partner to Link - it's listening for the link event
//what ever matches it will display the proper component with the data

//for Ticket- had to write a matching route- this is a DYNAMIC ROUTE- for the hyperlinked ticket text 
//"/tickets/:ticketId(\d+)" capture the primary key when the url changes
// when it is that exact path render the ticket component