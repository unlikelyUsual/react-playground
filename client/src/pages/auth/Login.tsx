import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/userSlice";
import { useLoginMutation } from "../../service/user";

const Login = () => {
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const onSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    try {
      const data = await login(form).unwrap();

      dispatch(
        setUser({
          user: data.user,
          token: data.token,
        })
      );
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
            Login
          </p>
          <form action="" className="flex flex-col">
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Email
              <input
                type="email"
                className="grow"
                placeholder="email@domain.com"
                onChange={onChange}
                name="email"
                value={form.email}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Password
              <input
                type="password"
                className="grow"
                placeholder="*******"
                onChange={onChange}
                name="password"
                value={form.password}
              />
            </label>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={onSubmit}
              disabled={isLoading}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
