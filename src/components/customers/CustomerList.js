import React, { useEffect, useState } from "react"


export const CustomerList = () => {
    //this is our app state in React, invoking useState to set up our state, useState is a hook
    //useState returns an array, [] is our argument for useState, it's the initial value of the state for customers
    //array on left side- variable customers- to hold state of customers from api, and then a function whose job is to modify state for customers
    const [customers, setCustomers] = useState([])
    //create a new state variable that will contain a message that tells how many customers to display, and then a function that will modify state
    const [totalCustomerMessage, updateMessage ] = useState("")


    //another hook, takes 2 arguments - a function and an array
    //this is an event listener- when state changes, run this code
    useEffect(
        () => {
            //we've gotta fetch the data... like we've been doing
            fetch ("http://localhost:8088/customers")
                .then(res => res.json())
                //the customerArray comes back from the API
                .then ((customerArray) => {
                    //have to invoke setCustomers function, cant directly modify state in react
                    //have to use the function we provided when we established the state variable 
                    //takes the single arugment state that we just got from the API
                    setCustomers(customerArray)
                })
        },
        []
    )
//create a second useEffect aka event listener, every time the customer state changes the message will be updated
    useEffect (
        () => {
            if(customers.length ===1){
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

//using the map function (an array method) as a conversion tool below to to convert objects to html
    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}