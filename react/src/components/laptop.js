import  React , { useState } from 'react';
import { Container , Button ,OverlayTrigger , Tooltip  } from 'react-bootstrap';
import ExitCircle from './eCircle'
import { useScrollPosition } from './scrollpos'
function Laptop(props){
  const [fusestate, setFusestate] = useState(false);
  const [scrollstate, setScrollState] = useState(0);	  
  const [triggerstate, settriggerstate] = useState(false);	  
  const [animeOne, setAnimeOne] = useState(false);
  const [animeTwo, setAnimeTwo] = useState(false);
  const [animeThree, setAnimeThree] = useState(false);
  const [animeFour, setAnimeFour] = useState(false);
  const [animeFive, setAnimeFive] = useState(false);
  const [animeSix, setAnimeSix] = useState(false);
  const [animeSeven, setAnimeSeven] = useState(false);
  const [animeEight, setAnimeEight] = useState(false);
  const [animeNine, setAnimeNine] = useState(false);
  const [animeTen, setAnimeTen] = useState(false);
  const [animeA, setAnimeA] = useState(false);
  const [animeB, setAnimeB] = useState(false);
  const [animeC, setAnimeC] = useState(false);
  const [animeD, setAnimeD] = useState(false);
  const [animeE, setAnimeE] = useState(false);
  const [animeF, setAnimeF] = useState(false);
  const [animeG, setAnimeG] = useState(false);
  const [animeH, setAnimeH] = useState(false);
  const [animeJ, setAnimeJ] = useState(false);
  const [animeK, setAnimeK] = useState(false);
  const [animeL, setAnimeL] = useState(false);
  const [animeZ, setAnimeZ] = useState(false);
	useScrollPosition(({ prevPos, currPos }) => {
	  setScrollState(currPos.y * -1)
	  if (scrollstate < 150){settriggerstate(true)}
	  	else {settriggerstate(false)}
	})	  
  function reset(){
  	setFusestate(false);setAnimeOne(false);setAnimeTwo(false);setAnimeThree(false);setAnimeFour(false)
  	setAnimeFive(false); setAnimeSix(false);setAnimeSeven(false);setAnimeEight(false)
  	setAnimeNine(false);setAnimeTen(false);setAnimeA(false);setAnimeB(false)
  	setAnimeC(false);setAnimeD(false);setAnimeE(false);setAnimeF(false)
  	setAnimeG(false);setAnimeH(false);setAnimeJ(false);setAnimeK(false)
  	setAnimeL(false);setAnimeZ(false);}
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
						<g className={animeZ ? "anime-scroll" : ""}>
							<g id="svg-brower">
								<path className={animeL ? "anime-2" : "hidden"} onAnimationEnd={() =>{setAnimeOne(true)}}  stroke={props.themeColor[4]} d="M0 15 l491 0" />	
								<ExitCircle animerest={reset} anime={animeOne}/>
								<circle className={animeOne ? "anime-1" : "hidden"} cx="470" cy="7" r="5" stroke={props.themeColor[4]} strokeWidth="1" fill={props.themeColor[4]} />	  																		
								<circle className={animeOne ? "anime-1" : "hidden"} cx="455" cy="7" r="5" stroke={props.themeColor[4]} strokeWidth="1" fill="none" />	  		
								<polyline className={animeOne ? "anime-2" : "hidden"} onAnimationEnd={() =>{setAnimeTwo(true)}} points="80,0 80,14 , 0,14" stroke={props.themeColor[4]} strokeWidth="1" fill="none" />
								<rect className={animeNine ? "anime-4" : "hidden"}   x="490" y="15" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="10" height="320"/>
								<polygon className={animeJ ? "anime-33" : "hidden"}  onAnimationEnd={() =>{setAnimeK(true)}} points="495,20 492,25 498,25" fill={props.themeColor[4]} stroke={props.themeColor[4]}/>
								<polygon className={animeJ ? "anime-33" : "hidden"}  onAnimationEnd={() =>{setAnimeK(true)}} points="495,265 492,260 498,260" fill={props.themeColor[4]} stroke={props.themeColor[4]}/>											
								<rect className={animeK ? "scroll-anime" : "hidden"}  onAnimationEnd={() =>{setAnimeZ(true)}}  x="492" y="28" rx="1" ry="1" fill={props.themeColor[4]} stroke="" width="6" height="80"/>
								</g>
							<g id={animeZ ? "brower-playground" : ""}>		
								<g id="svg-navbar" className="">
									<rect className={animeThree ? "rect-1" : "hidden"} onAnimationEnd={() =>{setAnimeFour(true)}}   x="10" y="25" rx="5" ry="5" fill="none" stroke={props.themeColor[4]} width="20" height="20"/>
									<rect className={animeFour ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeFive(true)}}   x="40" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="35" height="10"/>
									<rect className={animeFive ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeSix(true)}}  x="300" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<rect className={animeSix ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeSeven(true)}}   x="350" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<rect className={animeSeven ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeEight(true)}}    x="400" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<rect className={animeEight ? "anime-33" : "hidden"} onAnimationEnd={() =>{setAnimeNine(true)}}   x="450" y="30" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="30" height="10"/>
									<path className={animeTwo ? "anime-22" : "hidden"} onAnimationEnd={() =>{setAnimeThree(true)}} stroke={props.themeColor[4]} d="M0 50 l489 0" />	
								</g> 
								<g id="svg-body" className="" >
									<rect className={animeNine ? "anime-4" : "hidden"} onAnimationEnd={() =>{setAnimeTen(true)}} x="10" y="60" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="100" height="200"/>
									<rect className={animeTen ? "anime-5" : "hidden"}  onAnimationEnd={() =>{setAnimeA(true)}} x="175" y="60" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="300" height="75"/>
								</g>
								<g id="svg-under-body" className="">
									<rect className={animeA ? "anime-61" : "hidden"}  onAnimationEnd={() =>{setAnimeB(true)}}   x="175" y="145" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="280" height="7"/>
									<rect className={animeB ? "anime-62" : "hidden"}  onAnimationEnd={() =>{setAnimeC(true)}}  x="175" y="160" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="300" height="7"/>
									<rect className={animeC ? "anime-63" : "hidden"}  onAnimationEnd={() =>{setAnimeD(true)}}  x="175" y="175" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="260" height="7"/>
									<rect className={animeD ? "anime-64" : "hidden"}  onAnimationEnd={() =>{setAnimeE(true)}}  x="175" y="190" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="250" height="7"/>
									<rect className={animeE ? "anime-65" : "hidden"}  onAnimationEnd={() =>{setAnimeF(true)}}  x="175" y="205" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="290" height="7"/>
									<rect className={animeF ? "anime-66" : "hidden"}  onAnimationEnd={() =>{setAnimeG(true)}}  x="175" y="220" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="270" height="7"/>
									<rect className={animeG ? "anime-67" : "hidden"}  onAnimationEnd={() =>{setAnimeH(true)}}  x="175" y="235" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="250" height="7"/>
									<rect className={animeH ? "anime-68" : "hidden"}  onAnimationEnd={() =>{setAnimeJ(true)}} x="175" y="250" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="220" height="7"/>
								</g>
								<g id="svg-under-page">
									<rect className={animeZ ? "display-screen" : ""} x="45" y="300" rx="1" ry="1" fill={props.themeColor[4]} stroke={props.themeColor[4]} width="400" height="130"/>													
									<path className={animeZ ? "path-1" : ""}  stroke={props.themeColor[4]} d="M185 440 l120 0" />	
									<rect className={animeZ ? "box-holder" : ""}  x="70" y="450" rx="1" ry="1" fill="none" stroke={props.themeColor[4]} width="350" height="60"/>													
									<rect className={animeZ ? "box" : ""}  x="85" y="460" rx="1" ry="1" fill={props.themeColor[4]}stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeZ ? "box" : ""}  x="150" y="460" rx="1" ry="1" fill={props.themeColor[1]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeZ ? "box" : ""}  x="215" y="460" rx="1" ry="1" fill={props.themeColor[0]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeZ ? "box" : ""}  x="280" y="460" rx="1" ry="1" fill={props.themeColor[2]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeZ ? "box" : ""}  x="345" y="460" rx="1" ry="1" fill={props.themeColor[3]} stroke={props.themeColor[4]} width="60" height="40"/>													
									<rect className={animeZ ? "box-selector" : ""}  x="230" y="505" rx="1" ry="1" fill="rgba(255,255,0,1)" stroke={props.themeColor[4]} width="30" height="0.5"/>													
								</g>
							</g>											
						</g>
						<polyline className={"svg-border"} onAnimationEnd={() =>{setAnimeL(true)}} points="0,0 0,270 500,270 500,0 0,0 " fill="none" stroke={props.themeColor[4]} strokeWidth = "3">
						</polyline>
					</svg>													
				</div>
		</div>
	</Container>
)
}

export default Laptop;