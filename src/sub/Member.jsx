import { Container, Row, Col, Button, 
    Form, Card } from "react-bootstrap";

const Member = () => {
return(
    <>
<div className="bg-gradient-primary">
    <Container>
        <Card className="o-hidden border-0 shadow-lg my-5">
            <Card.Body className="p-0">
                <Row>
                    <div className="col-lg-5 d-none d-lg-block bg-register-image">
                    </div>
                    <Col lg={7}>
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome</h1>
                        </div>

                        <Form className="user">
<div className="form-group row mb-2">
    <Col sm={6} className="mb-3 mb-sm-0">
        <Form.Control type="text" 
        className="form-control-user"
        placeholder="First Name"
        />
    </Col>

    <Col sm={6}>
        <Form.Control type="text" 
        className="form-control-user"
        placeholder="Last Name"
        />
    </Col>
</div>

<div className="form-group mb-2">
    <Form.Control type="email" 
    className="form-control-user"
    placeholder="email address"
    />
</div>

<div className="form-group row mb-2">
    <Col sm={6} className="mb-3 mb-sm-0">
    <Form.Control type="password" 
        className="form-control-user" placeholder="password"/>
    </Col>
    <Col sm={6}>
    <Form.Control type="password" 
        className="form-control-user" placeholder="repeat password"/>
    </Col>
</div>
<a href="/login" className="btn btn-primary btn-user btn-block mb-2">
Register Account
</a>

<a href="/" className="btn btn-google btn-user btn-block mb-2">
    <i className="fab fa-google fa-fw">
    Register with Google
    </i>
</a>

<a href="/" className="btn btn-facebook btn-user btn-block mb-2">
    <i className="fab fa-facebook-f fa-fw">
    Register with Facebook
    </i>
</a>
</Form>
<hr/>
<div className="text-center mb-2">
   <a href="" className="small">Forgot Password ?</a>
</div>
<div className="text-center">
   <a href="" className="small">Already have ab account? Login!</a>
</div>
                    </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
</div>
    </>
)
}

export default Member;
