import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

const Login = () => {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-dark-1 border-0 shadow-none">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="mb-4">
              <h1 className="m-0 text-white font-bold">Sign in</h1>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="bg-dark-2 border-0 rounded-md overflow-hidden">
                  <InputGroupAddon addonType="prepend" className="bg-dark-2">
                    <InputGroupText className="bg-dark-2  border-0">
                      <i className="ni text-white ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="bg-dark-2 text-white border-0 rounded-0"
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="bg-dark-2 border-0 rounded-md overflow-hidden">
                  <InputGroupAddon addonType="prepend" className="bg-dark-2">
                    <InputGroupText className="bg-dark-2 border-0">
                      <i className="ni text-white ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    className="bg-dark-2 text-white border-0 rounded-0"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-white">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4 font-bold text-uppercase text-xs btn-block"
                  color="primary"
                  type="button"
                  tag={Link}
                  to="/admin/dashboard"
                >
                  Sign in
                </Button>
              </div>
            </Form>

            <Row className="mt-5">
              <Col xs="6">
                <a
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <small>Forgot password?</small>
                </a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
