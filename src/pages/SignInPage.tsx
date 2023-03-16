import { Link, useNavigate } from "react-router-dom";
import { useState, SyntheticEvent, useContext } from "react";
import axios from "axios";
import config from "../config";
import { UserContext } from "../context/UserProvider";
import { useAlert } from "../context/AlertProvider";

const SignInPage = () => {
  /* ===================== states ===================== */
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  /* ---------------------------------------------- */
  const { setAlert } = useAlert();
  /* ===================== handlers ===================== */
  const submitHandler = async (ev: SyntheticEvent) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post(config.apiHost + "/users/signin", {
        user: form,
      });
      setUserData({ user: data.user, token: data.authToken });
      setAlert({ status: true, msg: "Logged in Successfuly", type: "success" });
      navigate(`/u/${data.user.username}/chat`);
    } catch (err) {
      setAlert({ status: true, type: "error", msg: "Wrong Credentials" });
    }
  };
  return (
    <main className="hero min-h-screen bg-base-200">
      <form onSubmit={submitHandler} className="card shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label min-w-[210px] lg:min-w-[260px]">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="user@example.com"
              className="input input-bordered"
              value={form.email}
              onChange={(ev) => setForm({ ...form, email: ev.target.value })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              minLength={8}
              placeholder="password"
              className="input input-bordered"
              value={form.password}
              onChange={(ev) => setForm({ ...form, password: ev.target.value })}
            />
            <label className="label pb-0">
              <a
                href="#"
                className="label-text-alt link link-hover text-secondary"
              >
                Forgot Password?
              </a>
            </label>
            <label className="label pb-0">
              <Link
                to="/"
                className="label-text-alt link link-hover text-secondary"
              >
                Don't have an account yet?
              </Link>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default SignInPage;
