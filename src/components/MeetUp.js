import React from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export default () => {
  return (
    <Container className="formpadding">
      <h2>Find Fitness Friends!</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Search for Meetup Group</Label>
            <Input
              className="form-input"
              type="text"
              id="meetupsearch"
              name="meetupsearch"
              placeholder="i.e... 5K, triathalon"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Location</Label>
            <Input
              className="form-input"
              placeholder="ex: Kansas City or 64109"
              type="text"
              name="location"
            />
          </FormGroup>
        </Col>
        <Button
          className="btn btn-primary"
          onClick={this.handleSubmit}
          type="submit"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
};
