import  React ,{ useState } from 'react';
import { Container , Row , Col , Form , Button , OverlayTrigger  , Alert} from 'react-bootstrap';

function Contact(props) {
	const [ConName, setConName] = useState("");
	const [ConEmail, setConEmail] = useState("");
	const [ConMessage, setConMessage] = useState("");	
	const [ConNameError, setConNameError] = useState(false);
	const [ConEmailError, setConEmailError] = useState(false);
	const [ConMessageError, setConMessageError] = useState(false);		
	const [FormState, setFormState] = useState(true);
	const [FormPromise, setFormPromise] = useState(0);	
	function handleSubmit(e) {
		let VaildState = 0
		e.preventDefault();
		if (ConName===""){setConNameError(true)} else{VaildState+=1}
		if (ConEmail===""){setConEmailError(true)} else{VaildState+=1}
		if (ConMessage===""){setConMessageError(true)} else{VaildState+=1}
		console.log (FormState, VaildState)
		if (FormState && VaildState === 3){sendForm();setFormState(false)}
		  }
  function sendForm(){
  			fetch('./send',{
		        method: "POST",
		        body: JSON.stringify({name:ConName,email:ConEmail,message:ConMessage}),
		        headers: {
		          'Accept': 'application/json',
		          'Content-Type': 'application/json'
		        },
		      }).then(
		    	(response) => (response.json())
		       ).then((response)=>{
		      if (response.status === 'success'){
		        setFormPromise(1) 
		        resetForm()
		      }else if(response.status === 'fail'){
				setFormPromise(3)
		      }
	    })
  }
  function resetForm(){
  	setConName("")
  	setConEmail("")
  	setConMessage("")
	setFormState(true)  	
  }
	return(
	<section id="contact-section">
		<Container>
			<Row className>
				<Col className="centered">
					<h3>Want to contact me?</h3>					
				</Col>
			</Row>
			<Row className="">
				<Col lg={2}/>
				<Col>
					<Form onSubmit={handleSubmit} method="POST">
						<Row>
							<Col>
					 <OverlayTrigger show={ConNameError}  placement="bottom-start" delay={{ hide: 2000 }} overlay={({ placement, arrowProps, show: _show, popper, ...props }) => (<div className="error-tooltip" {...props}><span>!</span>Please write your Name</div>)}>
								<Form.Group controlId="formGroupName">
									<Form.Label>Name</Form.Label>
									<Form.Control onChange={(event)=>{setConNameError(false);setConName(event.target.value)}} value={ConName} type="text" placeholder="" />
								</Form.Group>
					 </OverlayTrigger>		
					   		</Col>
					   		<Col>
					 <OverlayTrigger show={ConEmailError} placement="bottom-start" delay={{ hide: 2000 }} overlay={({ placement, arrowProps, show: _show, popper, ...props }) => (<div className="error-tooltip" {...props}><span>!</span>Please write your Email</div>)}>
								<Form.Group controlId="formGroupEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control onChange={(event)=>{setConEmailError(false);setConEmail(event.target.value)}} value={ConEmail}  type="email" placeholder="" />
								</Form.Group>				   		
					 </OverlayTrigger>		
					   		</Col>
					   	</Row>
					 <OverlayTrigger show={ConMessageError} placement="bottom-start" delay={{ hide: 2000 }} overlay={({ placement, arrowProps: _arrowProps, show: _show, popper, ...props }) => (<div className="error-tooltip" {...props}><span>!</span>Please write your Message</div>)}>
						<Form.Group controlId="formGroupMessage">
							<Form.Label>Message</Form.Label>
							<Form.Control onChange={(event)=>{setConMessageError(false);setConMessage(event.target.value)}} value={ConMessage}  as="textarea" rows={8} placeholder="....." />
						</Form.Group>
					 </OverlayTrigger>		
						<div className="centered">
						  <Button className="contact-submit" variant="primary" type="submit">
						    Submit
						  </Button>
						  <Alert className={FormPromise===1 ? "" : "hidden"} key={1} variant={props.theme === "blue" ? "primary" : "success"}>
						    Your message has been sent successfully
						  </Alert>						  
						  <Alert className={FormPromise===3 ? "" : "hidden"} key={3} variant={"danger"}>
						    Ops! your message has been not sent , try again later
						  </Alert>							  						  
						</div>		
					</Form>
				</Col>
				<Col lg={2}/>				
			</Row>
		</Container>
	</section>
		)
}

export default Contact