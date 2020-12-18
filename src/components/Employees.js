import React from "react";
import "../App.css";
import { employeeData } from "../scripts/employeeData";
import Table from "./Table";

export const Employees = () => {


    const[data, set[data] = const [state, setstate] = useState(initialState)]
    const [q, setQ] = useState("")

    function search(rows) {
        return rows.filter(row => 
            row.name.toLowerCase().indexOf(q) > -1 ||
            row.email.toLowerCase().indexOf(q) > -1 ||
            row.phone.toLowerCase().indexOf(q) > -1 ||
            row.dob.toLowerCase().indexOf(q) > -1 ||
            
            )
    }


        return (
            <>
            <div>
                <input type="text" value={[q]} onChange{(e) => setQ(e.target.value)} />
            </div>
            <div>
            <Table data={search(employeeData)}/>
            </div>
            </>
        )
}





// export const Employees = () => {
//     return (
//         <>
//             <div className="employee-container">
//                 {data.map((data, key) => {
//                     return (
//                         <div key={key}>
//                             <Employee
//                                 key={key}
//                                 name={data.name}
//                                 phone={data.phone}
//                                 email={data.email}
//                                 dob={data.dob}
//                             />
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     );
// };

// const Employee = ({ name, phone, email, dob }) => {
//     if (!name) return <div />
//     return (
//         <table>
//             <tbody>
//                 <tr>
//                     <td>
//                         <h5>{name}</h5>
//                     </td>
//                     <td>
//                         <h5>{phone}</h5>
//                     </td>
//                     <td>
//                         <h4>{email}</h4>
//                     </td>
//                     <td>
//                         <p>{dob}</p>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }