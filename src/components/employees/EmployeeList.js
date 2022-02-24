import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    //create a state variable, and a function that will modify the state variable  
    const [ specialties, setSpecial ] = useState ([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

// implementing useEffect hook to observe employees state variable for changes 
//extracting the specialty of each employee to update value of state variable- specialties- with , separated list
    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
       const justSpecialties = employees.map(emp => emp.specialty)
        setSpecial(justSpecialties.join(", "))
    }, [employees])

    return (
        <>
            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}