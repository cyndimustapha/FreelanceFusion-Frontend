import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function SignIn() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="px-4 pt-10 md:pb-40 max-w-lg mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <NavLink to="/mainpage" className="btn btn-primary">
                Log in
              </NavLink>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
