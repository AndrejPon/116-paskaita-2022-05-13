import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Content from '../components/Content/Content';
import Notification from '../components/Notification/Notification';
import Spacing from '../components/Spacing/Spacing';
import Input from '../components/Input/Input';

const Login = () => {
  const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigate();

  return (
    <Content title='Login'>
      {error && (
        <Notification handleClose={() => setError(false)}>{error}</Notification>
      )}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const res = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/v1/auth/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userDetails),
            }
          );
          const data = await res.json();

          if (data.token) {
            localStorage.setItem('token', data.token);

            return navigation('/home');
          }

          setError(data.err || 'Unexpected error');
        }}
      >
        <Spacing padding='1rem 0'>
          <Input
            label='Email'
            type='email'
            name='email'
            placeholder='email'
            handleChange={(email) => setUserDetails({ ...userDetails, email })}
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
          <Button type='submit'>Login</Button>
        </Spacing>
      </form>
    </Content>
  );
};

export default Login;
