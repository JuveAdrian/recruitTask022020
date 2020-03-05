import React from 'react';





export class Form extends React.Component {
    state = { 
        countryName: '', 
        cities: [] 
    };

    


    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.countryName);
        const resp = await fetch(`https://api.openaq.org/v1/cities?country=PL`);
        const data = await resp.json();

        let cities = await data.results.map((city) => {
            return(
                <div>
                    <p>{city.name}</p>
                </div>
            )
        });
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