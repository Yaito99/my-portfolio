import  React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import Laptop from '../components/laptop'
function Intro(props) {
  return (
	<section id="intro-section">
		<Container>
			<Row>
				<Col>
					<h1>Just a Front-end Developer</h1>
					<p>I design and code beautiful and simple websites.</p>		
				</Col>
			</Row>
			<Row>
				<Col>
					<Laptop theme={props.theme} themeColor={props.colors}/>
				</Col>
			</Row>
		</Container>
	</section>
  );
}



export default Intro;
