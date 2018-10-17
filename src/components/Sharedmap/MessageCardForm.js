import React from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

const MessageCardForm = (props) => {
  return (
    <Card body className="message-form">
      <CardTitle>el mapa de robos</CardTitle>
      <CardText>Agregar delito</CardText>
      {
        !props.sendingMessage && !props.sentMessage && props.haveUsersLocation ?
          <Form onSubmit={props.formSubmitted}>
            <FormGroup>
              <Label for="name">Tipo de delito</Label>
              <Input
                onChange={props.valueChanged}
                type="text"
                name="name"
                id="name"
                placeholder="Ingresa el tipo de delito" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Descripción</Label>
              <Input
                onChange={props.valueChanged}
                type="textarea"
                name="message"
                id="message"
                placeholder="" />
            </FormGroup>
            <Button type="cancel" color="danger" onClick={props.cancelMessage}>Cancel</Button> {' '}
            <Button type="submit" color="info" disabled={!props.formIsValid()}>Send</Button>
          </Form> :
          props.sendingMessage || !props.haveUsersLocation ?
            <video
              autoPlay
              loop
              src="https://i.giphy.com/media/BCIRKxED2Y2JO/giphy.mp4"></video> :
            <CardText>Thanks for submitting a message!</CardText>
      }
    </Card>
  );
};

export default MessageCardForm;