import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [value, setValue] = useState("");
  const[data,setData] = useState([])
  
  const searchData = () => {

    axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=c91b90bcc5ba4056af889f4d88504477&ingredients=${value}&number=21`
    )
    .then((res) => {
      console.log(res.data);
      setData(res.data)
    });

  };



  return (
    <>
      <div class="search container">
          <div>
          <div class="input-group searchbar">     
          <h3>Type the name of the ingredient</h3> <br/>
    <input type="text"  value={value}
            onChange={(e) => setValue(e.target.value)}
             placeholder="Type the ingredient"
     aria-label="Input group example" aria-describedby="btnGroupAddon"/>

      <button class="input-group-text btn-primary" id="btnGroupAddon" 
      onClick={searchData}>Search</button><div>
  </div> 
  </div>
    <div class= "col123" >   {
  data.map((item)=>{
    return(
      <div class="flexitem flex-child1">
        <div class="item-title">{item.title}</div>
        <div class="item-image"><img src={item.image} alt="12"/></div>
      </div>
    
      )
  })}
  </div>
  </div>
  </div>


        {/* </form> */}
    
    </>
  );
};

export default Search;
