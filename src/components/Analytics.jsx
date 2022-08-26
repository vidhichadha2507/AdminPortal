import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { cardStyles } from "./ReusableStyles";


const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Name of the Queue" placeholder="Enter name" type="text" />
  <FormInput description="Select type of Queue" placeholder="Enter name" type="text" />
  
   <FormInput description="Enter the Average Time" placeholder="Average Time" type="password"/>
  <FormInput description="Number of Patients per block" placeholder="Average Time" type="password"/>
  <FormInput description="Maximum size of Queue" placeholder="Average Time" type="password"/>
   <FormButton title="Create Queue"/>
 </div>
);

const FormButton = props => (
<div id="button" class="row">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);

export default function Analytics() {
  return (
    <Section>
   
     <Popup trigger = {
      <div className="analytic ">
        <div className="content">
          <h2>Create Queue</h2>
        </div>
      </div>}>

        <div id="loginform">
          <FormHeader title="Login" />
          <Form />
          
        </div>

      </Popup>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .loginform{
    max-width: 500px;
    min-width: 300px;
    max-height: 700px;
    width: 30%;
    height: 60%;
    margin: 100px auto;
    background-color: #111111;
    border-radius: 25px;
  }
  
  .headerTitle{
    text-align: center;
    font-family: 'open sans', sans-serif;
    padding: 2rem 0;
    margin: 0;
    font-size: 2rem;
  }
  
  .row{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    max-width: 100%;
    
  }
  
  .row input{
    width: 80%;
    box-sizing: border-box;
    border: none;
    font-size: 0.9rem;
    padding-left: 1.5rem;
    padding-bottom: 1rem;
    box-shadow: inset 0px -3px 0px 0px rgba(187,187,187,0.2);
    transition: box-shadow 0.2s ease-in;
  }
  
  .row input:focus{
     box-shadow: inset 0px -3px 0px 0px rgba(34,193,195,0.7);
     outline: none;
  }
  
  .row input::-webkit-input-placeholder{
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  
  
  .row label{
    align-self: start;
    padding-left: 4.5rem;
    padding-bottom: 0.5rem;
    color: rgba(187,187,187,0.9);
    font-size: 1.6rem;
  }
  
  .row button{
    border-radius: 25px;
    width: 80%;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    background: #F94892;
    
    border: 0px;
    cursor: pointer;
    transition: opacity 0.25s ease-out;
  }
  
  .row button:hover{
    opacity: 0.8;
  }
  
  #button{
    padding-bottom: 1.5rem;
  }
  
  
  #alternativeLogin {
     text-align: center;
     padding-top: 2rem;
     margin-top: 1.5rem;
  }
  .analytic {
    // // ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    width: 100%;
    flex: 1;
    paddingHorizontal: 2.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #8f8e8a;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
