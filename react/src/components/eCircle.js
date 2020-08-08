import  React from 'react';



class ExitCircle extends React.Component {
		componentDidMount() {
	    this.ec.addEventListener('click',this.testtt);
	    }
	 	componentWillUnmount() {
	    this.ec.removeEventListener('click',this.testtt);
	 	}
	 	testtt =(event)=>{
	  	  	this.props.animerest()
	  	}
	render(){
		return(
			<svg>
				<circle  ref={elem => this.ec = elem} className={this.props.anime ? "circle-1" : "hidden"} cx="485" cy="7" r="5" stroke="rgba(255,255,255,1)" strokeWidth="1" fill="rgba(255,100,100,1)" />
			</svg>
			)
	}
	}

export default ExitCircle;