import React, { useState, useEffect } from 'react';


function App() {
 
  
const proxyurl = "https://cors-anywhere.herokuapp.com/";
 const apiKey = "qkdtf9AxqFkNO4lEs9TPTmsHsMdvZOOUqdIv68rUuvPhiWapC0";
const apiSecret = "CerVUoPdQg2meKIvjni4wjjzKSGxB4WYJSF7jTqk";
const [items, setItems] = useState([]);

useEffect(() => {
  fetchItems();
  }, []);

const fetchItems = async () => {
    // Call details
  var org = 'RI77';
  var status = 'adoptable';
  const data = await fetch(`${proxyurl}https://api.petfinder.com/v2/oauth2/token`, {
  method: 'POST',
  body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + apiSecret,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  }); const items = await data.json();
    // console.log(items)

  const specificFetch = await fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
    headers: {
      'Authorization': items.token_type + ' ' + items.access_token,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }); const specificItems = await specificFetch.json();
      console.log(specificItems)

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
