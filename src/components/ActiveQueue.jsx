import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";
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
    allotedTime: '10:00',
  },
 
]

export default function ActiveQueue() {
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
      <h1 className="title">Active Queue</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Notify</th>
            <th>Actions</th>
            <th>Alloted Time</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position, allotedTime }) => (
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
                <Select options={position}/>
              </td>
              <td>
                <input
                  name="time"
                  type="text"
                  value={allotedTime}
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type time"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position, allotedTime }) => (
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
                <Select options={position}/>
              </td>
              <td>
                <input
                  name="time"
                  type="text"
                  value={allotedTime}
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type time"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position, allotedTime }) => (
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
                <Select options={position}/>
              </td>
              <td>
                <input
                  name="time"
                  type="text"
                  value={allotedTime}
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type time"
                />
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
}

.title {
  text-align: center;
  font-size: 26px;
  margin-bottom: 40px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr th {
  font-size: 18px;
  padding: 10px;
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
}`;
