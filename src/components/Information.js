import React from 'react'
import { Container, Form , Row , Col,InputGroup ,FormControl} from 'react-bootstrap'
const Information = () => {
  var clientBiat = false;
    return (
        <div >
            <br>
            </br>
            <br>
            </br>
            <h1 >
            Informations générales : 
  </h1>
  <br></br>
  <Container style={{marginBottom:'200px'}}>
      <Row className="justify-content-md-center">
  <Col sm={9}>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
<InputGroup size="lg" className="mb-3"  >
  <InputGroup.Text>Nom et prénom</InputGroup.Text>
  <FormControl aria-label="Nom" placeholder="Nom" />
  <FormControl aria-label="Prénom " placeholder="Prénom"/>
</InputGroup>
  </Form.Group>
  </Col>

  <Col sm={9}>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
<InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">E-mail</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="E-mail"/>
  </InputGroup>
  <br>
  </br>
  <InputGroup size="lg" placeholder="Jane Doe">
    <InputGroup.Text id="inputGroup-sizing-lg">confirmation E-mail </InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"  placeholder="Confirmation de l'E-mail"/>
  </InputGroup>
  </Form.Group>
  </Col >
  <Col sm={9}>
  <Form.Select  size="lg" aria-label="Default select example">
  <option>Choisir votre civilité</option>
  <option value="1">Madame</option>
  <option value="2">Monsieur</option>
</Form.Select>
</Col>
<br></br>
<Col sm={9}>
<Form.Select size="lg" aria-label="Default select example">
  <option>Etes vous un client BIAT ?</option>
  <option value="1">Oui</option>
  <option value="2">Non</option>

</Form.Select>
<Form hidden={!clientBiat}>
  <div class="form-group">
    <label name="test">test</label>
  </div>
</Form>
</Col>


</Row>

</Container>
        </div>
      
    )
}

export default Information
