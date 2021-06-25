import './App.css';
import { useState } from "react"
import Axios from 'axios'
//import { response } from 'express';

function App() {

  const [name, setName]=useState("");
  const [age, setAge]=useState(0);
  const [country, setCountry]=useState(" ");
  const [position, setPosition]=useState(" ");
  const [wage, setWage]=useState(0);
  const [newWage, setnewWage]=useState(0);

  const[employeeList, setEmployeeList] = useState([]);

  
  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name:name, 
      age:age, 
      country:country,
      position:position,
      wage:wage,
    }).then(()=>{
      setEmployeeList([...employeeList, {
        name:name, 
        age:age, 
        country:country,
        position:position,
        wage:wage,
      }]);
    });
  };

  const getEmployee = () => {
    Axios.get('http://localhost:3001/employees').then((response)=>{
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = (id) => {
    Axios.put('http://localhost:3001/update', {
      wage: newWage,
      id: id,
    }).then((response) => {
      setEmployeeList(employeeList.map((val)=> {
        return val.id === id ? {
          id:val.id,
          name:val.name,
          age:val.age,
          position:val.position,
          country:val.country,
          wage:newWage,
        }:val;
      }))
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    .then((response)=>{
      setEmployeeList(employeeList.filter((val)=>{
        return val.id != id;
      }));
    });
  }

  return (
    <div className="App">
      <div className ="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event)=>{
            setName(event.target.value)
          }} 
        />
        <label>Age:</label>
        <input 
          type="number"
          onChange={(event) => {
            setAge(event.target.value)
          }}
        />
        <label>Position:</label>
        <input 
          type="text"
          onChange={(event)=>{
            setPosition(event.target.value)
          }}
        />
        <label>Country:</label>
        <input
         type="text" 
         onChange ={(event)=>{
           setCountry(event.target.value)
         }} 
        />
        <label>Wage(year):</label>
        <input 
          type="number" 
          onChange = {(event)=> {
            setWage(event.target.value)
          }}
        />
        <button onClick = {addEmployee}>Add Employee</button>
      </div>
      <hr
        style={{
            margin:15,
            color: 'blue',
            backgroundColor: 'blue',
            width: 1890
        }}
    />
    <div className="employees">
      <button onClick={getEmployee}>Show Employee</button>
      {employeeList.map((val, index) => {
        return (
        <div className="employee">
          <div className = "left">
            <h3>Name: {val.name}</h3>
            <h3>Age: {val.age}</h3>
            <h3>Position: {val.position}</h3>
            <h3>Country: {val.country}</h3>
            <h3>Wage: {val.wage}</h3>
          </div>
          <div> 
            <input
              type="number"
              placeholder= "2000"
              onChange={(event)=>{
                setnewWage(event.target.value)
              }} />
            <button onClick={() => {updateEmployee(val.id)}}>Update</button>
            <button onClick={() => {deleteEmployee(val.id)}}>Delete</button>
          </div>
        </div>
        );
      })}
    </div>
    
  </div>
  );
}

export default App;
