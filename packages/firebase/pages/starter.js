import { useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Button, Alert } from "reactstrap";
import DashCard from "../src/components/dashboardCards/DashCard";
import { useAuth } from "../src/components/authGurad/AuthContext";

const Starter = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading, router]);

  return (
    <>
      {loading ? (
        <Row>
          <Col>Loading....</Col>
        </Row>
      ) : (
        <DashCard
          title={
            authUser && (
              <Alert color="success">
                Congratulations {authUser?.email}! You are logged in.
              </Alert>
            )
          }
          subtitle=""
        >
          <Button onClick={signOut}>Sign out</Button>
        </DashCard>
      )}
    </>
  );
};

export default Starter;
