import  React , {useState} from 'react';
import { Container , Row , Col ,OverlayTrigger ,Tooltip } from 'react-bootstrap';
import Bar from '../components/bar'
import { useScrollPosition } from '../components/scrollpos'
function About(props) {
	const [scrollstate, setScrollState] = useState(0);	
	const [animestateA, setAnimeStateA] = useState(false);	
	useScrollPosition(({ prevPos, currPos }) => {
	  setScrollState(currPos.y * -1)
	  if (scrollstate >= 400){setAnimeStateA(true)}
	})	
  return (
	<section id="about-section">
		<Container>
			<Row>
				<Col className="aboutme">
					<h3>Hi There , I'm Yahya</h3>
					<h4>Welcome to my humble portofolio</h4>
					<p>When I was young and know nothing about programming ,I have always dreamt to be a game desginer
					but I never asked myself how to achive that , When I was first introduced to programming at the age of 15 
					,I found myself good at it so i just decided to be a Programmer.
					</p>
				</Col>
			</Row>
			<Row className={animestateA ? 'skillset skillset-anime': "hidden"}>
				<Col lg={5}>
					 <OverlayTrigger popperConfig={{modifiers: [{name: 'offset',options: {offset: [0, -30],},},],}} placement="right-start" delay={{ show: 1, hide: 200 }} overlay={<Tooltip id="avatar-tooltip"><h4>Hi There!</h4></Tooltip>}>
						<img className="avatar" alt="yaito-avatar" src={props.theme === "blue" ? "img/avatar2.png" : "img/avatar.png"}/>
					 </OverlayTrigger>						
						<h5>Yahya</h5>
				</Col>
				<Col lg={1}>
				</Col>
				<Col>
					<Bar barname="HTML" barpercent="90%" />
					<Bar barname="CSS" barpercent="80%"/>
					<Bar barname="JavaScript" barpercent="70%"/>
					<Bar barname="React" barpercent="60%"/>
					<Bar barname="Sass" barpercent="80%"/>
					<Bar barname="Bootstrap" barpercent="70%"/>
				</Col>
			</Row>
		</Container>
	</section>
  );
}



export default About;
