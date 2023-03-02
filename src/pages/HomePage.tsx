import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

type User = {
  id?: Number;
  username: string;
  name: string;
  password: string;
  email: string;
};

const HomePage = () => {
  /* ===================== states ===================== */
  const [form, setForm] = useState({
    username: "",
    name: "",
    password: "",
    email: "",
  } as unknown as User);
  /* ========================================== */
  const { setUserData, userData } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userData.user?.username?.length && userData.token?.length > 20) {
      navigate("u");
    }
  }, []);
  /* ===================== handlers ===================== */
  const submitHandler = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post(config.apiHost + "/users/signup", {
        user: form,
      });
      setUserData({ user: data.user, token: data.authToken });
      navigate("u");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left min-w-max">
          <h1 className="text-5xl font-bold">CHAT APP</h1>
          <p className="py-6 max-w-3xl">Connect with the world</p>
        </div>
        <form
          onSubmit={submitHandler}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="name"
                className="input input-bordered"
                value={form.name}
                onChange={(ev) => {
                  setForm((oldForm) => ({
                    ...oldForm,
                    name: ev.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                required
                placeholder="@username"
                className="input input-bordered"
                value={form.username}
                onChange={(ev) => {
                  setForm((oldForm) => ({
                    ...oldForm,
                    username: ev.target.value.toLocaleLowerCase(),
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                placeholder="user@example.com"
                className="input input-bordered"
                value={form.email}
                onChange={(ev) => {
                  setForm((oldForm) => ({
                    ...oldForm,
                    email: ev.target.value.toLocaleLowerCase(),
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                minLength={8}
                placeholder="password"
                className="input input-bordered"
                value={form.password}
                onChange={(ev) => {
                  setForm((oldForm) => ({
                    ...oldForm,
                    password: ev.target.value,
                  }));
                }}
              />
              <label className="label pb-0">
                <Link
                  to="signin"
                  className="label-text-alt link link-hover text-secondary"
                >
                  Already Registered? Signin
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
