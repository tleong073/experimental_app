import React from 'react';
import logo from './logo.svg';
import './App.css';

class Bedroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bed: "Twin",
      wallpaper: "Red",
      windows: 2
    };
    this.changeState = this.changeState.bind(this);
  }
  changeState = () => {
    if (this.state.bed == "Twin"){
      this.setState({bed:"King"});
    }
    else{
      this.setState({bed:"Twin"});
    }
    
  }
  render() {
    return (
      <div class = "App">
        <h1>The bedroom</h1>
        <p >
          The bed is a {this.state.bed}
        </p>
        <button class
        type = "button"
        onClick = {this.changeState}
        >
        Do something.
        </button>
      </div>
    )
  }
}

class MagicBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
    };
  }
  tick(){
    this.setState({date: new Date()});
  }
  componentDidMount() {
    this.timerID =setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
        <ul class = "menulist">
          <li class = "menuitem"><a  href="https://www.latlmes.com/tech/doctorshatehim-1"> Breaking news</a></li>
          <li class ="menuitem"><a> time: {this.state.date.toLocaleTimeString()}. </a></li>
        </ul>
    );
  }
}

class FlavorBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: "default"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
      <label>
        Pick your favorite Flavor:
        <select value = {this.state.value} onChange = {this.handleChange}>
          <option value = "Orange"> Orange</option>
          <option value = "Strawberry"> Strawberry</option>
          <option value = "Vanilla"> Vanilla</option>
          <option value = "Chocolate"> Chocolate</option>
        </select>
      </label>
      <input type = "Submit" value="Submit" />
      </form>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
    <body>
      <h1 class = "title">
        Just another application
      </h1>
      <div>
        <div class="menu">
          <MagicBar />
        </div>
        <div class ="widgets">
          <div class="Bar">
            <Bedroom />
          </div>
          <div class="Bar">
            <FlavorBar />
          </div>
        </div>
        <div class = "frontpageimage">
          <img class = "image" src = {require('./omega.jpg')} alt = "yes"></img>
          <img class = "image" src = {require('./stonks.jpg')} alt = "yes"></img>
        </div>
      </div>
    </body>
    );
  }
}

//Bedroom bed = new Bedroom();
export default Header;
