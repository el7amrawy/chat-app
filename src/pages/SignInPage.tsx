import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <main className="hero min-h-screen bg-base-200">
      <form className="card shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label min-w-[210px] lg:min-w-[260px]">
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
              <a
                href="#"
                className="label-text-alt link link-hover text-primary"
              >
                Forgot Password?
              </a>
            </label>
            <label className="label pb-0">
              <Link
                to="/"
                className="label-text-alt link link-hover text-primary"
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
