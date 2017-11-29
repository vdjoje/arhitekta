import React from 'react'
import { Button, Form, Icon, Message, Divider } from 'semantic-ui-react'

const Login = () => (
  <div style={{marginTop:"15%"}} >
    <Message
      attached
      header='Welcome to our site!'
      content='Please log in'
    />
    <Form className='attached fluid segment'>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Button style={{backgroundColor:"#420040", color:"#00cd57"}}>Log In</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      You dont have an account?&nbsp;<a href='/register'>Register here</a>&nbsp;.
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

export default Login
