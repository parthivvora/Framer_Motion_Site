import "../styles/home.css";
import Form from "react-bootstrap/Form";
import apiRoutes from "../constants/apiRoutes";
import loginImage from "../assets/auth/login.svg";

function Login() {
  return (
    <div className="auth-form sm:h-screen flex items-center justify-center">
      <div className="container">
        <div className="row flex-col-reverse sm:flex-row-reverse">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row gap-4">
              <div className="col-sm-12">
                <div className="title-part flex flex-col gap-2">
                  <h1 className="text-4xl sm:text-5xl font-semibold capitalize leading-normal">
                    login
                  </h1>
                  <p className="text-base capitalize">
                    <span>
                      You don&apos;t Have An Account ?{" "}
                      <a
                        href={apiRoutes.REGISTER}
                        className="capitalize text-green-600"
                      >
                        register now
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <form>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-3.5 w-full sm:w-3/4"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="p-3.5 w-full sm:w-3/4"
                    />
                  </Form.Group>
                  <button className="bg-green-600 text-white capitalize font-bold w-full sm:w-3/4 rounded-full py-2 text-xl">
                    login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={loginImage}
              alt="login_image"
              className="img-fluid mb-[2rem] sm:mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
