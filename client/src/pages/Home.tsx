import { Link } from "react-router-dom";
import background from "../assets/cover.jpg";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center h-lvh w-full bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex w-1/4 justify-center h-1/4">
        <Link
          to={"/login"}
          className="btn btn-square btn-active w-1/3 mr-3 text-white"
        >
          Login
        </Link>
        <Link
          to={"/signup"}
          className="btn btn-square btn-outline btn-active w-1/3 "
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
