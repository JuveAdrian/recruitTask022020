import React from 'react';



 




export class Form extends React.Component {
    state = { 
        countryName: '', 
        cities: [] 
    };

    


    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await fetch(`https://api.openaq.org/v1/latest?country=PL&limit=3000&parameter=pm25`);
        const data = await resp.json();
        console.log(data);
        let cities = await data.results.map((city) => {
            
            return(
               
                    <details>
                        <summary> {city.measurements[0].value} </summary>
                        <p>Pellentesque et leo ut turpis commodo congue a in neque. Mauris euismod vulputate molestie. Donec quis nisi sollicitudin, hendrerit elit sed, bibendum mauris. Nullam convallis a eros vitae consequat. Morbi sodales diam est, pretium consectetur dui luctus quis. Nullam erat ligula, ultrices sollicitudin urna nec, posuere euismod nibh. Vestibulum hendrerit sit amet magna id elementum. Ut dui lectus, vulputate vel molestie sed, bibendum in mauris. Nunc ornare, arcu vel posuere molestie, nunc arcu cursus tortor, eu fringilla metus sem in tortor. Ut quis mollis tortor.</p>
                    </details>
            )
        });
        let sortedCities = await cities.sort((a, b) => (a.measurements.value > b.measurements.value) ? -1 : 1);
        console.log(data);
        /*  */
         /* console.log(sortedCities); */
        this.setState({cities: cities});
        console.log(this.state.cities);
      };

	render() {
  	return (
          <div>
                <form onSubmit={this.handleSubmit}>
                    <span className="formtext"></span>
                    <input 
                        type="text"
                        value={this.state.countryName} 
                        onChange={ e => this.setState({countryName: e.target.value})}
                        placeholder="  Enter Country Name" 
                        required 
                    />
                    <button>Search</button>
                </form>

                <div className="container">
                    <p key={this.state.cities}>{this.state.cities}</p>
                </div>
          </div>
    	
    );
  }
}

