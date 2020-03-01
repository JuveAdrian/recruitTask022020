import React from 'react';

const CitiesArr = [];

const getCities = async () => {
  const api_call = await fetch('https://api.openaq.org/v1/cities');
  const response = await api_call.json();

  for(let i=0; i< response.results.length; i++)
  CitiesArr.push(response.results[i]);

  
};

getCities();

console.log(CitiesArr);

export const Cities = () => (

  
      <div>
      for(let i=0; i<CitiesArr.length)
        <li>{CitiesArr[i]}</li>
      </div>
    );
