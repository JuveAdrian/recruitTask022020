import React, { Component } from 'react';



export class Cities extends Component {

  constructor(props){
    super(props);
    this.state = {
      cities: []
    }
  }

  
  componentDidMount() {
    fetch('https://api.openaq.org/v1/cities')
      .then(response => response.json())
      .then(cities => {
        
        this.setState({cities: cities.results})
      })
      .then( console.log(this.state.cities))
      .catch(err => console.log('Error:', err));
  }

  render() {
    const items = this.state.cities.map((item, key) =>
        <li>{item.name}</li>
    );

    return {
      
    }
    
};
};

/*const CitiesArr = [];
 <ul>
                {names.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
            </ul>






const getCities = async () => {
  const api_call = await fetch('https://api.openaq.org/v1/cities');
  const response = await api_call.json();

  for(let i=0; i< response.results.length; i++)
  CitiesArr.push(response.results[i]);

  
};

getCities();

console.log(CitiesArr);
   https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2 


export const Cities = () => {



  
    
};
*/