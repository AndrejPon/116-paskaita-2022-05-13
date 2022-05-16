import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Content from '../components/Content/Content';
import Spacing from '../components/Spacing/Spacing';
import Input from '../components/Input/Input';
import Notification from '../components/Notification/Notification';

const Register = () => {
  const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <Content title='Register'>
        {error && (
          <Notification handleClose={() => setError(false)}>
            {error}
          </Notification>
        )}
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const res = await fetch(
              `${process.env.REACT_APP_SERVER_URL}/v1/auth/register`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
              }
            );
            const data = await res.json();
            setError(data.msg || data.err);
            // console.log(data);
          }}
        >
          <Spacing padding='1rem 0'>
            <Input
              label='Email'
              type='email'
              name='email'
              placeholder='email'
              handleChange={(email) =>
                setUserDetails({ ...userDetails, email })
              }
            />
          </Spacing>
          <Spacing padding='1rem 0'>
            <Input
              label='Password'
              type='password'
              name='password'
              placeholder='password'
              handleChange={(password) =>
                setUserDetails({ ...userDetails, password })
              }
            />
          </Spacing>
          <Spacing padding='1rem 0'>
            <Button type='submit'>Register</Button>
          </Spacing>
        </form>
      </Content>
    </>
  );
};

export default Register;
