import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 

  useEffect(() => {
    fetchItems();
    }, []);


  const fetchItems = async () => {
    const data = await fetch("http://regions.ala.org.au/regions/regionList");
    const items = await data.json();
    console.log(items);
    
  };


  return (
    <div className="App">
 
    </div>
  );
}

export default App;
