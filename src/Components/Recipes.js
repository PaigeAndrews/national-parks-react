import React, { useState, useEffect } from 'react';


function App() {
 
  
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "&api_key=0wTgkVsDBhjaLExofAwBmt3UzZqskd1R8THNKxmR";
const baseApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000";

const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
    }, []);


  const fetchItems = async () => {
    const url = `${baseApi}${apiKey}`;
    const data = await fetch(proxyurl + url);
    const items = await data.json();
    console.log(items);
    // setItems(items.results)
  };


  return (
    <div className="App">
        {/* {items.map (item => (
            <div className="foodTitle"  key={item.id}>{item.title}</div>
        ))} */}
    </div>
  );
}

export default App;
