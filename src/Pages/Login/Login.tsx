/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const handleLogin = (data: LoginFormInputs) => {
    console.log(data);
  };
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
            <p className=" my-2 text-white">Email:</p>
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
            <p className=" my-2 text-white">Password:</p>
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
