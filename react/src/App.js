import  React , { Component } from 'react';
import './App.scss';
import Navigation from './containers/Navigation'
import Intro from './containers/Intro'
import About from './containers/About'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import { projectlist } from './projectdata'
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			theme : "blue",
			colors:["#00072D","#001C55","#0A2472","#0E6BA8","#A6E1FA"]
		}
	}
	onThemeChange= () =>{
		let current = this.state.theme
		let nexttheme= current === "blue" ? "green" : "blue"
		let colors = current === "blue" ? ["#AAFCB8","#D7FFF1","#8CD790","#77AF9C","#285943"] : ["#00072D","#001C55","#0A2472","#0E6BA8","#A6E1FA"]
		this.setState({theme : nexttheme,colors: colors})
	}
  	render(){
	  return (
	      <section class={this.state.theme}>
	        <Navigation themeChange={this.onThemeChange} theme={this.state.theme}/>
	        <Intro theme={this.state.theme} colors={this.state.colors}/>
	        <About theme={this.state.theme}/>
	        <Projects theme={this.state.theme} pjlist={projectlist}/>
	        <Contact theme={this.state.theme}/>
	      </section>
	  );
}}

export default App;
