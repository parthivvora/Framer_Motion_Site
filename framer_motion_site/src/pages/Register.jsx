import "../styles/home.css";
import Form from "react-bootstrap/Form";
import apiRoutes from "../constants/apiRoutes";
import signUpImage from "../assets/auth/signup.svg";

function Register() {
  return (
    <div className="auth-form sm:h-screen flex items-center justify-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row gap-4">
              <div className="col-sm-12">
                <div className="title-part flex flex-col gap-2">
                  <h1 className="text-4xl sm:text-5xl font-semibold capitalize leading-normal">
                    sign up
                  </h1>
                  <p className="text-base">
                    <span>
                      Have An Account Already,{" "}
                      <a
                        href={apiRoutes.LOGIN}
                        className="capitalize text-green-600"
                      >
                        login
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="User Name"
                      className="p-3.5 w-full sm:w-3/4"
                    />
                  </Form.Group>
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
                  <Form.Group className="mb-3" controlId="conPassword">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="p-3.5 w-full sm:w-3/4"
                    />
                  </Form.Group>
                  <button className="bg-green-600 text-white capitalize font-bold w-full sm:w-3/4 rounded-full py-2 text-xl">
                    sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={signUpImage}
              alt="sign_up_image"
              className="img-fluid mt-[2rem] sm:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
