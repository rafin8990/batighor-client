import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
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
          <p className=" my-2 text-white">Name:</p>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter Name"
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-black">{errors.name?.message}</p>}
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
