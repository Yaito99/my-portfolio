import  React ,{ useState } from 'react';
import { Container , Row , Col } from 'react-bootstrap';

function Projects(props) {
	const [animestateA, setAnimeStateA] = useState(false);	
	const [animestateB, setAnimeStateB] = useState(false);		
	const [animestateC, setAnimeStateC] = useState(false);
	const [curslider, setCurSlider] = useState(0);		
	const [projectstate, setProjectState] = useState([0,1,2,3]);
	const [activeprojectstate, setActiveProjectState] = useState(0);
	const [sliderproject, setSliderProject] = useState({company:"",img:"",desc:"",time:""});

	let projectlist = props.pjlist
	let projectn = projectlist.length
	const n = Math.round(projectn/4)
	let a=[]
	for (var i = 0; i < n; i++) {
	a.push(n)
		}
	function onNavarChange(event){
		let ac= event.target.value
		let rr = ac * 4
		let array = [rr+ 0 ,rr+ 1 ,rr+ 2 , rr+ 3 ]
		setProjectState(array)
		setAnimeStateA(true)
		setActiveProjectState(parseInt(ac))
	}
	function onProjectSelect(name,img,desc,time,id){
		setCurSlider(parseInt(id))
		setAnimeStateB(true)
		setSliderProject({company:name,img:img,desc:desc,time:time})
	}
  return (
	<section id="projects-section">
		<Container>
			<Row>
				<Col className="centered">
					<h3>Projects</h3>
				</Col>
			</Row>
			<Row>
				<Container className={animestateC ? "slider-show" : "hidden"}>
					<Row>
						<Col className="slider-show-col">
							<img alt={sliderproject.company} src ={sliderproject.img}/>
						</Col>
						<Col className="centered">
							<h2>{sliderproject.company}</h2>
							<p>{sliderproject.desc}</p>
							<div>{sliderproject.time}</div>
						</Col>
					</Row>
				</Container>
			</Row>
			<div className={animestateB ? "slider-under" : ""} onAnimationEnd={() => {setAnimeStateC(true)}}>
				<Row>
					<Container className={animestateA ? "slider-star slider-star-anime" : "slider-star"} onAnimationEnd={() =>{setAnimeStateA(false)}}>
						<Row className={ curslider === 0 ? "slider-row slider-row-1" : "slider-row"}>
							<Col className={ curslider === 1 ? "slider slider-color" : "slider"}>
								<ProjectLogo src={projectlist[projectstate[0]].logo} cls="project-1" proname={projectlist[projectstate[0]].company} desc={projectlist[projectstate[0]].intro}  time={projectlist[projectstate[0]].time}/>
							</Col>
							<Col className={ curslider === 2 ? "slider slider-color" : "slider"}>
								<ProjectLogo src={projectlist[projectstate[1]].logo} cls="project-2" proname={projectlist[projectstate[1]].company} desc={projectlist[projectstate[0]].intro}  time={projectlist[projectstate[0]].time}/>
							</Col>
						</Row>
						<Row className={curslider === 0 ? "slider-row slider-row-2" : "slider-row"}>
							<Col className={ curslider === 3 ? "slider slider-color" : "slider"}>
								<ProjectLogo src={projectlist[projectstate[2]].logo} cls="project-3" proname={projectlist[projectstate[2]].company} desc={projectlist[projectstate[0]].intro}  time={projectlist[projectstate[0]].time}/>
							</Col>
							<Col className={ curslider === 4 ? "slider slider-color" : "slider"}>
								<ProjectLogo src={projectlist[projectstate[3]].logo} cls="project-4" proname={projectlist[projectstate[3]].company} desc={projectlist[projectstate[0]].intro}  time={projectlist[projectstate[0]].time}/>
							</Col>
						</Row>
					</Container>	
				</Row>			
				<Row className="slider-nav">
					<Col>
						{
							a.map((user,i) => {
								return(<button id={"navar-"+i} key={i} value={i} onClick={onNavarChange} className={activeprojectstate===i ? "dbutton navar navar-active" : "dbutton navar"}></button>)
							})

						}
					</Col>
				</Row>

			</div>
		</Container>
	</section>
  );
  function ProjectLogo(props){
  	return(	<button onClick={() => {onProjectSelect(props.proname,props.src,props.desc,props.time,props.cls[8])}} className="dbutton"><img alt={props.proname} className={props.cls}  src={props.src} /></button>
)
  }
}




export default Projects;
