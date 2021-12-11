import React from 'react';
import  { useState } from 'react';
import Info from './data';
import './api.css'


const Api = () =>{
  
 const [search , setSearch] = useState('chicken')
  const [data,setdata] = useState([])
  const id= "831c1a95"
  const key="2e030734838c92da081516014f78ab8b";
  const items = 12
 


const submitHandler = e =>{
  e.preventDefault();
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${key}&from=0&to=${items}&calories=591-722&health=alcohol-free`)
  .then(response => response.json())
  .then(
    data => setdata(data.hits)
  )
  console.log(data)
}
return(
  <div className="header">
   
      <h1>FOOD RECIPES</h1>
   
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter a item name" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button value="sumbit">sumbit</button>
      </form>
      {
        data.length>=1? <Info data={data}/>:<marquee>PLEASE ENTER A REQUIRED RECIPE NAME IN A TEXTFIELD</marquee> 
      } 
  </div>
)}

export default Api