import  React , { Component } from 'react';
import './App.scss';
import Navigation from './containers/Navigation'
import Intro from './containers/Intro'
import About from './containers/About'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import { projectlist } from './projectdata'
class App extends Component {
  render(){
  return (
      <section>
        <Navigation/>
 //       <Intro/>
   //     <About/>
 //       <Projects pjlist={projectlist}/>
        <Contact/>
      </section>
  );
}}

export default App;
