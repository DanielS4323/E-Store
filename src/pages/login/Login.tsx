import { Form, Segment, Grid, Header, Button } from 'semantic-ui-react';
import logInFunction from './login_query';
import { useMutation } from '@tanstack/react-query';
import { type FormEvent } from 'react';
import storage from '../../utilities/storage';
import { toast } from 'react-toastify';

const Login = () => {
  const { mutateAsync: logInFn } = useMutation({
    mutationKey: ['login'],
    mutationFn: logInFunction,
  });

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData);
    const username = data.username as string;
    const password = data.password as string;
    await logInFn({ username, password }).then((response): void => {
      if (response?.message) {
        toast.error(response.message);
        return;
      }
      storage.setUser(response);
      toast.success('Successfully Loged in!');
      window.location.assign(window.location.origin);
    });
  };

  return (
    <Grid centered verticalAlign="middle" style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Segment>
          <Header as="h2" color="violet" textAlign="center">
            Welcome! Login by entering your credentials.
          </Header>
          <Form as="form" size="large" onSubmit={handleLogin}>
            <Form.Field>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </Form.Field>
            <Button color="violet" size="large" fluid>
              Login
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
