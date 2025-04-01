import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'admin123',
    },
  });

  const [login, { data, error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo); // send data to useLoginMutation

    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" {...register('id')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" {...register('password')} />
        </div>
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
