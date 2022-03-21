import React from "react";
import { Button, Card, CardBody } from "reactstrap";

const CreateCost = () => {
  return (
    <Card className="mt-4">
      <CardBody className="d-flex justify-content-between align-items-center">
        <h3 className="m-0">All Costs</h3>
        <Button
          color="success"
          data-bs-toggle="modal"
          data-bs-target="#homeModal"
        >
          +
        </Button>
      </CardBody>
    </Card>
  );
};

export default CreateCost;
