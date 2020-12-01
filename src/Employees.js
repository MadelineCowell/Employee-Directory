import React from "react";
import "./App.css";
import { employeeData } from "./data";

export const Employees = () => {
    return (
        <>
            <NavHeader />
            <div className="employee-container">
                {employeeData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Employee
                                key={key}
                                name={data.name}
                                phone={data.phone}
                                email={data.email}
                                dob={data.dob}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

const NavHeader = () => {
    return (
        <header className="header">
            <h2>EMPLOYEE DIRECTORY</h2>
        </header>
    )
}

const Employee = ({ name, phone, email, dob }) => {
    if (!name) return <div />
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{name}</h5>
                    </td>
                    <td>
                        <h5>{phone}</h5>
                    </td>
                    <td>
                        <h4>{email}</h4>
                    </td>
                    <td>
                        <p>{dob}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}