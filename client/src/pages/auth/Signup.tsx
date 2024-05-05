import { useState } from "react";
import { useSignupMutation } from "../../service/user";

const SignUp = () => {
  const [signup, { isLoading }] = useSignupMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    address: "",
  });

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const onSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    try {
      await signup(form);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-full h-svh px-0">
      <div className="h-full p-0 w-1/2 overflow-hidden">
        <img src="https://picsum.photos/600/800/?blur=2" />
      </div>
      <div className="divider divider-horizontal mx-0"></div>
      <div className="flex justify-center items-center h-full p-0 w-1/2">
        <div className="flex flex-col w-1/2">
          <p className="subpixel-antialiased text-sky-400 text-2xl font-extrabold mb-4">
            Sign Up
          </p>
          <form action="" className="flex flex-col">
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Name
              <input
                type="text"
                className="grow"
                placeholder="John Doe"
                onChange={onChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Email
              <input
                type="email"
                className="grow"
                placeholder="email@domain.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Password
              <input
                type="password"
                className="grow"
                placeholder="*******"
                onChange={onChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Confirm
              <input
                type="text"
                className="grow"
                placeholder="Re enter"
                onChange={onChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Phone
              <input
                type="text"
                className="grow"
                placeholder="Phone Number"
                name="phone"
                onChange={onChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Dob
              <input
                type="date"
                className="grow"
                placeholder="Enter DOB"
                name="dob"
                onChange={onChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Address
              <input
                type="text"
                className="grow"
                placeholder="Address"
                name="address"
                onChange={onChange}
              />
            </label>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
              onClick={onSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
