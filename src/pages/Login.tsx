import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
       id: "0001",
        password: "admin12345",
        },
      }
  );
  const [login] = useLoginMutation();

  // console.log("data=>", data);
  // console.log("error=>", error);

  const onSubmit = async (data:FieldValues) => {
    const loadingToastId = toast.loading("Logging in");


    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      // console.log(userInfo);

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.dismiss(loadingToastId)
      toast.success("Logged in successfully")
      // navigate(`/${user.role}/dashboard`)
      navigate('/');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.dismiss(loadingToastId)
      toast.error("Something went wrong!!");
    }


    // console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
