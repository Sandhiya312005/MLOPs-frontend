import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    prediction: null,
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value1, value2, value3, value4, value5, value6, value7 } = this.state;

    axios.post("http://127.0.0.1:8000", {
        v1: value1,
        v2: value2,
        v3: value3,
        v4: value4,
        v5: value5,
        v6: value6,
        v7: value7
      })
      .then((response) => {
        this.setState({ prediction: response.data.prediction, error: null });
      })
      
  };

  render() {
    const { value1, value2, value3, value4, value5, value6, value7, prediction, error } = this.state;

    return (

      <div>
        <h1 style={{ paddingLeft: '10px', color:'black' }}>Stroke Prediction </h1>
        <form onSubmit={this.handleSubmit}>
          <div id="demo">
           
              <ol>Gender
              <p></p>
                <ul>Male - 1 , Female -0</ul>
                
              </ol>
              
              <ol>Hypertension
              <p></p>
                <ul>Formerly Smoked -1 , Never Smoked -2 , Smokes -3</ul>
          
              </ol>

              <ol>Output
              <p></p>
                <ul>1- Has Stroke , 0- Has No Stroke</ul>
               
              </ol>
            
          </div>

          <div style={{ marginBottom: '10px'}}>
            <p></p>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>Gender :</label>
            <input type="text" name="value1" value={value1} onChange={this.handleChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>Age :</label>
            <input type="text" name="value2" value={value2} onChange={this.handleChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>Hypertension:</label>
            <input type="text" name="value3" value={value3} onChange={this.handleChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>Heart_Disease :</label>
            <input type="text" name="value4" value={value4} onChange={this.handleChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>Avg_Glucose_Level :</label>
            <input type="text" name="value5" value={value5} onChange={this.handleChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>BMI :</label>
            <input type="text" name="value6" value={value6} onChange={this.handleChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'Red' }}>Smoking_Status :</label>
            <input type="text" name="value7" value={value7} onChange={this.handleChange} />
          </div>

          <div style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>
          <button type="submit">Submit</button>
          </div>
        </form>

        {prediction !== null && (
          <div>
            <h2 style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>Prediction:</h2>
            <p style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>{prediction}</p>
          </div>
        )}
        {error && <div>Error: {error}</div>}
      </div>
    );
  }
}

export default App;