import { useState } from "react";
import { useRouter } from "next/router";
import AuthLogo from "../src/layouts/logo/AuthLogo";
import Image from "next/image";
import Link from "next/link";
import LeftBg from "../src/assets/images/bg/login-bgleft.svg";
import RightBg from "../src/assets/images/bg/login-bg-right.svg";
import { useAuth } from "../src/components/authGurad/AuthContext";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in firebase");
          router.push("/starter");
        })
        .catch((error) => {
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };

  return (
    <div className="loginBox">
      <div className="position-absolute start-0 bottom-0">
        <Image src={LeftBg} alt="left" />
      </div>
      <div className="position-absolute end-0 top">
        <Image src={RightBg} alt="right" />
      </div>
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <h4 className="mb-0 fw-bold">Register</h4>
                <small className="pb-4 d-block">
                  Already have an account? <Link href="/">Login</Link>
                </small>
                <Form onSubmit={onSubmit}>
                  {error && <Alert color="danger">{error}</Alert>}
                  <FormGroup row>
                    <Label for="signUpEmail" sm={12}>
                      Email
                    </Label>
                    <Col sm={12}>
                      <Input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="email"
                        id="signUpEmail"
                        placeholder="Email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="signUpPassword" sm={12}>
                      Password
                    </Label>
                    <Col sm={12}>
                      <Input
                        type="password"
                        name="passwordOne"
                        value={passwordOne}
                        onChange={(event) => setPasswordOne(event.target.value)}
                        id="signUpPassword"
                        placeholder="Password"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="signUpPassword2" sm={12}>
                      Confirm Password
                    </Label>
                    <Col sm={12}>
                      <Input
                        type="password"
                        name="password"
                        value={passwordTwo}
                        onChange={(event) => setPasswordTwo(event.target.value)}
                        id="signUpPassword2"
                        placeholder="Password"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Button color="primary">Sign Up</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
SignUp.layout = "Blank";
export default SignUp;
