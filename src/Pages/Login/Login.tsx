/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { loginUser } from "../../Redux/Features/userSlice";

interface LoginFormInputs {
  email: string;
  password: string;
}
const Login = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const handleLogin = (data: LoginFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
    console.log(data);
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading, from]);
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <form
          className=" lg:w-1/3 border p-5 shadow-lg"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <h2 className="text-4xl text-center font-bold">Login</h2>
          </div>
          <div>
            <p className=" my-2 ">Email:</p>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-black">{errors.email?.message}</p>
            )}
          </div>
          <div>
            <p className=" my-2 ">Password:</p>
            <input
              {...register("password", { required: "Password is required" })}
              type="Password"
              placeholder="Enter Password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-black">{errors.password?.message}</p>
            )}
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full my-2">
              Sign In
            </button>
          </div>
          <div>
            <p>
              New to Batighor? Please{" "}
              <Link className="hover:underline text-primary" to="/signup">
                Register{" "}
              </Link>
            </p>
          </div>
          <div className="divider text-white">Or</div>

          <button className="btn btn-success w-full">SignIn With Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
