import  React , { useState } from 'react';
import { Container , Button ,OverlayTrigger , Tooltip  } from 'react-bootstrap';
import ExitCircle from './eCircle'
import { useScrollPosition } from './scrollpos'
function Laptop(props){
  const [fusestate, setFusestate] = useState(false);
  const [scrollstate, setScrollState] = useState(0);	  
  const [triggerstate, settriggerstate] = useState(false);	  
  const [animeState, setAnimeState] = useState(0);	
  const [ExitAnime, setExitAnime] = useState(false);

	useScrollPosition(({ prevPos, currPos }) => {
	  setScrollState(currPos.y * -1)
	  if (scrollstate < 150){settriggerstate(true)}
	  	else {settriggerstate(false)}
	})	  
  function reset(){
  	setFusestate(false);setExitAnime(false);setAnimeState(0)}
  return (
	<Container className="my-lab" style={{backgroundImage : props.theme === "blue" ? 'url("/img/laptop-1.png")' : 'url("/img/laptop-2.png")'}}>
		<div className="d-flex justify-content-center">
			<div className={fusestate ? "magic-work" : ""}>	
				<Button className="dbutton" onClick={() => {setFusestate(true)}}>
					 <OverlayTrigger show={triggerstate} placement="top-start" delay={{ show: 1, hide: 200 }} overlay={<Tooltip id="logo-tooltip">Click on me!</Tooltip>}>
						<img className="yaito-logo" alt="mylogo" onAnimationEnd={() =>{setFusestate(true)}} src={props.theme === "blue" ? "img/logo-1.png" : "img/logo-2.png"} width="60"/>		
					 </OverlayTrigger>				
				</Button>		
			</div>
				<div className="svg-container" style={{ display: fusestate ? "inline-block" : "none"}} >
					<svg className="fusion" viewBox="0 0 500 270" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
						<g className={animeState >= 22 ? "anime-scroll" : ""}>
							<g id="svg-brower">
								<path className={animeState >= 1 ? "anime-2" : "hidden"} onAnimationEnd={() =>{setExitAnime(true);setAnimeState(2)}}  stroke={props.themeColor[4]} d="M0 15 l491 0" />	
								<ExitCircle animerest={reset} anime={ExitAnime}/>
								<circle className={animeState >= 2 ? "anime-1" : "hidden"} cx="470" cy="7" r="5" stroke={props.themeColor[4]} strokeWidth="1" fill={props.themeColor[4]} />	  																		
								<circle className={animeState >= 2 ? "anime-1" : "hidden"} cx="455" cy="7" r="5" stroke={props.themeColor[4]} strokeWidth="1" fill="none" />	  		
								<polyline className={animeState >= 2 ? "anime-2" : "hidden"} onAnimationEnd={() =>{setAnimeState(3)}} points="80,0 80,14 , 0,14" stroke={props.themeColor[4]} strokeWidth="1" fill="none" />
								<rect className={animeState >= 10 ? "anime-4" : "hidden"}   x="490" y="15" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="10" height="320"/>
								<polygon className={animeState >= 20 ? "anime-33" : "hidden"}  onAnimationEnd={() =>{setAnimeState(21)}} points="495,20 492,25 498,25" fill={props.themeColor[4]} stroke={props.themeColor[4]}/>
								<polygon className={animeState >= 20 ? "anime-33" : "hidden"}  onAnimationEnd={() =>{setAnimeState(21)}} points="495,265 492,260 498,260" fill={props.themeColor[4]} stroke={props.themeColor[4]}/>											
								<rect className={animeState >= 21 ? "scroll-anime" : "hidden"}  onAnimationEnd={() =>{setAnimeState(22)}}  x="492" y="28" rx="1" ry="1" fill={props.themeColor[4]} stroke="" width="6" height="80"/>
								</g>
							<g id={animeState >= 22 ? "brower-playground" : ""}>		
								<g id="svg-navbar" className="">
									<rect className={animeState >= 4 ? "rect-1" : "hidden"} onAnimationEnd={() =>{setAnimeState(5)}}   x="10" y="25" rx="5" ry="5" fill="none" stroke={props.themeColor[4]} width="20" height="20"/>
									<rect className={animeState >= 5 ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeState(6)}}   x="40" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="35" height="10"/>
									<rect className={animeState >= 6 ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeState(7)}}  x="300" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<rect className={animeState >= 7 ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeState(8)}}   x="350" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<rect className={animeState >= 8 ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeState(9)}}    x="400" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<rect className={animeState >= 9 ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeState(10)}}   x="450" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<path className={animeState >= 3 ? "anime-22" : "hidden"} onAnimationEnd={() =>{setAnimeState(4)}} stroke={props.themeColor[4]} d="M0 50 l489 0" />	
								</g> 
								<g id="svg-body" className="" >
									<rect className={animeState >= 10 ? "anime-4" : "hidden"} onAnimationEnd={() =>{setAnimeState(11)}} x="10" y="60" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="100" height="200"/>
									<rect className={animeState >= 11 ? "anime-5" : "hidden"}  onAnimationEnd={() =>{setAnimeState(12)}} x="175" y="60" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="300" height="75"/>
								</g>
								<g id="svg-under-body" className="">
									<rect className={animeState >= 12 ? "anime-61" : "hidden"}  onAnimationEnd={() =>{setAnimeState(13)}}   x="175" y="145" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="280" height="7"/>
									<rect className={animeState >= 13 ? "anime-62" : "hidden"}  onAnimationEnd={() =>{setAnimeState(14)}}  x="175" y="160" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="300" height="7"/>
									<rect className={animeState >= 14 ? "anime-63" : "hidden"}  onAnimationEnd={() =>{setAnimeState(15)}}  x="175" y="175" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="260" height="7"/>
									<rect className={animeState >= 15 ? "anime-64" : "hidden"}  onAnimationEnd={() =>{setAnimeState(16)}}  x="175" y="190" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="250" height="7"/>
									<rect className={animeState >= 16 ? "anime-65" : "hidden"}  onAnimationEnd={() =>{setAnimeState(17)}}  x="175" y="205" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="290" height="7"/>
									<rect className={animeState >= 17 ? "anime-66" : "hidden"}  onAnimationEnd={() =>{setAnimeState(18)}}  x="175" y="220" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="270" height="7"/>
									<rect className={animeState >= 18 ? "anime-67" : "hidden"}  onAnimationEnd={() =>{setAnimeState(19)}}  x="175" y="235" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="250" height="7"/>
									<rect className={animeState >= 19 ? "anime-68" : "hidden"}  onAnimationEnd={() =>{setAnimeState(20)}} x="175" y="250" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="220" height="7"/>
								</g>
								<g id="svg-under-page">
									<rect className={animeState >= 22 ? "display-screen" : ""} x="45" y="300" rx="1" ry="1" fill={props.themeColor[4]} stroke={props.themeColor[4]} width="400" height="130"/>													
									<path className={animeState >= 22 ? "path-1" : ""}  stroke={props.themeColor[4]} d="M185 440 l120 0" />	
									<rect className={animeState >= 22 ? "box-holder" : ""}  x="70" y="450" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="350" height="60"/>													
									<rect className={animeState >= 22 ? "box" : ""}  x="85" y="460" rx="1" ry="1" fill={props.themeColor[4]}stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeState >= 22 ? "box" : ""}  x="150" y="460" rx="1" ry="1" fill={props.themeColor[1]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeState >= 22 ? "box" : ""}  x="215" y="460" rx="1" ry="1" fill={props.themeColor[0]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeState >= 22 ? "box" : ""}  x="280" y="460" rx="1" ry="1" fill={props.themeColor[2]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeState >= 22 ? "box" : ""}  x="345" y="460" rx="1" ry="1" fill={props.themeColor[3]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeState >= 22 ? "box-selector" : ""}  x="230" y="505" rx="1" ry="1" fill="rgba(255,255,0,1)" stroke={props.themeColor[4]} width="30" height="0.5"/>													
								</g>
							</g>											
						</g>
						<polyline className={"svg-border"} onAnimationEnd={() =>{setAnimeState(1)}} points="0,0 0,270 500,270 500,0 0,0 " fill="none" stroke={props.themeColor[4]} strokeWidth = "3">
						</polyline>
					</svg>													
				</div>
		</div>
	</Container>
)
}

export default Laptop;