import  React ,{ useState } from 'react';
import { Container , Row , Col , Form , Button } from 'react-bootstrap';

function Contact(props) {
	const [ConName, setConName] = useState("");
	const [ConEmail, setConEmail] = useState("");
	const [ConMessage, setConMessage] = useState("");	

	function handleSubmit(e) {
	    e.preventDefault();
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
								<Form.Group controlId="formGroupName">
									<Form.Label>Name</Form.Label>
									<Form.Control onChange={(event)=>{setConName(event.target.value)}} value={ConName} type="text" placeholder="" />
								</Form.Group>
					   		</Col>
					   		<Col>
								<Form.Group controlId="formGroupEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control onChange={(event)=>{setConEmail(event.target.value)}} value={ConEmail}  type="email" placeholder="" />
								</Form.Group>				   		
					   		</Col>
					   	</Row>
						<Form.Group controlId="formGroupMessage">
							<Form.Label>Message</Form.Label>
							<Form.Control onChange={(event)=>{setConMessage(event.target.value)}} value={ConMessage}  as="textarea" rows={8} placeholder="....." />
						</Form.Group>
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