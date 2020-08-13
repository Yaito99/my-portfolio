import  React ,{ useState } from 'react';
import { Container , Row , Col , Form , Button , OverlayTrigger ,Tooltip } from 'react-bootstrap';

function Contact(props) {
	const [ConName, setConName] = useState("");
	const [ConEmail, setConEmail] = useState("");
	const [ConMessage, setConMessage] = useState("");	
	const [ConNameError, setConNameError] = useState(false);
	const [ConEmailError, setConEmailError] = useState(false);
	const [ConMessageError, setConMessageError] = useState(false);		
	const [FormState, setFormState] = useState(true);
	let a,b,c = false
	function handleSubmit(e) {
		e.preventDefault();
		if (ConName===""){setConNameError(true)}
		else if (ConEmail===""){setConNameError(false);setConEmailError(true)}
		else if (ConMessage===""){setConEmailError(false);setConMessageError(true)}
		else if (FormState){setConMessageError(false);sendForm();setFormState(false)}
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
		        alert("Message Sent."); 
		        resetForm()
		      }else if(response.status === 'fail'){
		        alert("Message failed to send.")
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
									<Form.Control onChange={(event)=>{setConName(event.target.value)}} value={ConName} type="text" placeholder="" />
								</Form.Group>
					 </OverlayTrigger>		
					   		</Col>
					   		<Col>
					 <OverlayTrigger show={ConEmailError} placement="bottom-start" delay={{ hide: 2000 }} overlay={({ placement, arrowProps, show: _show, popper, ...props }) => (<div className="error-tooltip" {...props}><span>!</span>Please write your Email</div>)}>
								<Form.Group controlId="formGroupEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control onChange={(event)=>{setConEmail(event.target.value)}} value={ConEmail}  type="email" placeholder="" />
								</Form.Group>				   		
					 </OverlayTrigger>		
					   		</Col>
					   	</Row>
					 <OverlayTrigger show={ConMessageError} placement="bottom-start" delay={{ hide: 2000 }} overlay={({ placement, arrowProps: _arrowProps, show: _show, popper, ...props }) => (<div className="error-tooltip" {...props}><span>!</span>Please write your Message</div>)}>
						<Form.Group controlId="formGroupMessage">
							<Form.Label>Message</Form.Label>
							<Form.Control onChange={(event)=>{setConMessage(event.target.value)}} value={ConMessage}  as="textarea" rows={8} placeholder="....." />
						</Form.Group>
					 </OverlayTrigger>		
						<div className="centered">
						  <Button className="contact-submit" variant="primary" type="submit">
						    Submit
						  </Button>
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