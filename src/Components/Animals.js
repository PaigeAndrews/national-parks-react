import React, { useState, useEffect } from 'react';


function App() {

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "qkdtf9AxqFkNO4lEs9TPTmsHsMdvZOOUqdIv68rUuvPhiWapC0";
  const apiSecret = "CerVUoPdQg2meKIvjni4wjjzKSGxB4WYJSF7jTqk";
  
  let org = 'RI77';
  let status = 'adoptable';
  let token, tokenType, expires;



  useEffect(() => {
    makeCall();
    }, []);

  const getOAuth = async () => {
      // Call details
    let data = await fetch(`${proxyurl}https://api.petfinder.com/v2/oauth2/token`, {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
    headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
    });
    data = await data.json()
    token = await data.access_token;
    tokenType = await data.token_type;
    expires = await new Date().getTime() + (data.expires_in * 1000);
    return data;
};

const getPets = async () => {
      // Store token data
  const specificFetch = await fetch(`https://api.petfinder.com/v2/animals`, {
    headers: {
      'Authorization': `${tokenType} ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  let specificAdoptions = await specificFetch.json();
  console.log(specificAdoptions)
  return specificAdoptions
}

//  Get a token and fetch pets

const makeCall = function () {
	// If current token is invalid, get a new one
	if (!expires || expires - new Date().getTime() < 1) {
    console.log('new call');
    console.log(getOAuth())
		getOAuth().then(function () {
      getPets();
    });
    return;
  }
  //Otherwise, get pets
	console.log('from cache');
	getPets();

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
