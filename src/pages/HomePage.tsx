import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left min-w-max">
          <h1 className="text-5xl font-bold">CHAT APP</h1>
          <p className="py-6 max-w-3xl">Connect with the world</p>
        </div>
        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="@username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="user@example.com"
                className="input input-bordered"
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
              />
              <label className="label pb-0">
                <Link
                  to="signin"
                  className="label-text-alt link link-hover text-primary"
                >
                  Already Registered? Login
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
