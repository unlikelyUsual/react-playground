import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user?.name}</h2>
          <p>{user?.phone}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
