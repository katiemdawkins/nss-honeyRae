import React from "react";
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList";
import { CustomerList } from "./customers/CustomerList";
import { TicketList } from "./serviceTickets/TicketList";
import { TicketForm } from "./serviceTickets/TicketForm";

export const ApplicationViews = () => { 
    return (
        <>
            <Route path ="/customers">
                <h2>Customers</h2>
                <CustomerList />
            </Route>

            <Route path="/employees">
                <h2>Employees</h2>
                <EmployeeList />
            </Route>

            <Route exact path="/serviceTickets">
                <h2>Service Tickets</h2>
                <TicketList />
            </Route>

           <Route path="/serviceTickets/create">
               <TicketForm />
            </Route>
        </>
    )
}

//Route Component - Is the partner to Link - it's listening for the link event
//what ever matches it will display the proper component with the data
