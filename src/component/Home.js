import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			text:'',
			list:[]
		}
	}
	
	
	submit(event){
		let context = this;
		event.preventDefault();
	    let email = event.target.email.value;
		let pass = event.target.pass.value;
		if(email.trim().length === 0){
			alert("please fill email");
		}
		fetch('https://facebook.github.io/react-native/movies.json')
		  .then((response) => response.json())
		  .then((responseJson) => {
			context.setState({list:responseJson.movies});
			
		  })
		  .catch((error) => {
			console.error(error);
		  });
		//this.props.history.push("/Dashboard");
	}
	render() {
	
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<div className="container">
		<div className="row">
		<form onSubmit={this.submit.bind(this)}>
		<div className="form-group ">
		<div className="col-md-12">
		<div className="col-md-3">
		<label >Enter value:</label>
		</div>
		<div className="col-md-5">
			<input type="text" name="email" className="form-control"/><br/><br/>
			<input type="text" name="pass" className="form-control"/>
			</div>
			<div className="col-md-1"><br/>
			<input type="submit" name="sub" className="btn btn-success" value="Submit"/>
			</div>
			</div>
			</div>
		</form>
		<table>
		  
		  {
			  this.state.list.map(function(obj,index){
					return (
					<tr key={index}>
					<td>{obj.title}</td>
					</tr>
					)
			  })
		  }
		  
		</table>
		</div>
		</div>
		
      </div>
    );
  }
}

export default Home