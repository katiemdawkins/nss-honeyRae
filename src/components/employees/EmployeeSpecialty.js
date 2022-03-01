import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const EmployeeSpecialty = () => {
    const [ employee, setSpecialty ] = useState({})

    const { employeeId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(res => res.json())
            .then((data) =>{
                setSpecialty(data)
            })
        },
        [employeeId]
    )

    return(
        <>
        <h2>Employee Specialty</h2>
            <section className="employee">
                <h3 className="employeeName">{ employee.name }</h3>
                <div className="employeeSpecialty">{ employee.specialty}</div>
            </section>
        </>
    )
}