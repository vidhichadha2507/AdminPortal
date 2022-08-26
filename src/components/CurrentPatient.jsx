import React from "react";
import styled from "styled-components";
import Select from 'react-select';

const data = [
  {
    employeeId: '01',
    name: 'Vidhi Chadha',
    email: 'Max Hospital',
    position: [
      {"value": "Remove", "label": "Remove"},
      {"value": "Pause", "label": "Pause"},
    ],
  },
 
]

export default function CurrentPatient() {
  const [employeeData, setEmployeeData] = React.useState(data)

  const onChange = (e, employeeId) => {
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    setEmployeeData(editData)
  }
  return (
    <Section>
      <div className="container">
      <h1 className="title">Current Patient</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>In Hospital</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position }) => (
            <tr key={employeeId}>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="email"
                  value={email}
                  type="email"
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type Email"
                />
              </td>
              <td>
 
                <Select options={position} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Section>
  );
}
const Section = styled.section`
body {
  box-sizing: border-box;
  color: #220f5f;
  font-family: 'Poppins', sans-serif;
  
  
}

.container {
  width: 100%;
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  margin-top: 70px;
 
  justify-content: flex-start;
}

.title {
  text-align: center;
  font-size: 26px;
  margin-bottom: 30px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr th {
  font-size: 18px;
  padding: 12px;
  border: 1px solid #eeeeee;
  text-align: left;
  background-color: rgba(217, 221, 146, 0.2);
}

tr td {
  border: 1px solid #eeeeee;
  text-align: left;
}

input {
  font-size: 16px;
  background-color: transparent;
  border: none;
  width: 91%;
  padding: 12px 12px;
  font-family: 'Poppins', sans-serif;
}

input:hover {
  background-color: #fffaf3;
}

input:focus {
  outline: 1px solid #ccc;
  border: 1px solid #ccc;
}`
