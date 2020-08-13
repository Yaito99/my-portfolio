import  React , {useState} from 'react';
import { Col } from 'react-bootstrap';



function Bar(props){
	const [animestateA, setAnimeStateA] = useState(false);		
	let perc = "0%"
	if (animestateA){
		let num =parseInt(props.barpercent[0] + props.barpercent[1])
		let percy 
		for (percy = 0; percy <= num ; percy++){
		perc = percy + "%"
		}
	}
	return(
			<div className="skill-bar row" onAnimationEnd={() =>{setAnimeStateA(true)}}>
				<Col className={animestateA ? "bar-percent bar-animation" : "bar-percent"} style={{maxWidth: perc }}><div className="bar-name">{props.barname}</div></Col>
			</div>)
}



export default Bar;
