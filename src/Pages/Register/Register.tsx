/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hook";

import { createUser } from "../../Redux/Features/userSlice";
interface SignupFormInputs {
  email: string;
  password: string;
}

const Register = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const handleRegister = async (data: SignupFormInputs) => {
    console.log(data);
    try {
      await dispatch(
        createUser({ email: data.email, password: data.password })
      );
      setRegistrationSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (registrationSuccess) {
      navigate(from, { replace: true }); // Redirect to the desired path
    }
  }, [registrationSuccess, navigate, from]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        className=" lg:w-1/3 border p-5 shadow-lg"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div>
          <h2 className="text-4xl text-center font-bold">Sign Up</h2>
        </div>
        <div>
          <p className=" my-2 "> Email: </p>
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
          <p className=" my-2 "> Password: </p>
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
            Register
          </button>
        </div>
        <div>
          <p>
            Already Have an Account? Please{" "}
            <Link className="hover:underline text-primary" to="/login">
              login{" "}
            </Link>
          </p>
        </div>
        <div className="divider text-white">Or</div>

        <button className="btn btn-success w-full">SignIn With Google</button>
      </form>
    </div>
  );
};

export default Register;
