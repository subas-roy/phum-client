import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'admin123',
    },
  });

  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo).unwrap(); // send data to useLoginMutation

    const user = verifyToken(res.data.accessToken);
    console.log(user);

    dispatch(setUser({ user: {}, token: res.data.accessToken }));
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
