import React from 'react'
import { Button, Form, Icon, Message, Divider } from 'semantic-ui-react'

const Register = () => (
  <div style={{marginTop:"15%"}} >
    <Message
      attached
      header='Welcome to our site!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Input label='Repeat Password' type='password' />
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button style={{backgroundColor:"#420040", color:"#00cd57"}}>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='Login'>Login here</a>&nbsp;instead.
    </Message>
    <Divider horizontal>Or</Divider>
    <Message attached='bottom' warning>
      <Icon name='facebook square' color="blue" />
      <a href='#'>Login with Facebook</a>&nbsp;.
    </Message>
    <Message attached='bottom' warning>
      <Icon name='google' color="green" />
      <a href='#'>Login with Google</a>&nbsp;.
    </Message>
  </div>
)

export default Register
