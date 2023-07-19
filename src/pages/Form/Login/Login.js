import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  return (
    <main>
      <div class="login theme-default-margin">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
              <div class="login-form">
                <div id="CustomerLoginForm">
                  <form
                    method="post"
                    action="/account/login"
                    id="customer_login"
                    data-login-with-shop-sign-in="true"
                  >
                    <input
                      type="hidden"
                      name="form_type"
                      value="customer_login"
                    />
                    <input type="hidden" name="utf8" value="✓" />

                    <div class="form-container">
                      <div class="login-text">
                        <h3 class="login-header">Login </h3>
                        <p>Please login using account detail bellow.</p>
                      </div>
                      <div class="login-form-wrapper">
                        <div class="form-group row">
                          <label for="email" class="col-sm-3 col-form-label">
                            Email
                          </label>
                          <div class="col-sm-7">
                            <input
                              type="email"
                              name="customer[email]"
                              id="CustomerEmail"
                              class="form-control "
                              placeholder="Email"
                              autocorrect="off"
                              autocapitalize="off"
                              autofocus
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="inputPassword"
                            class="col-sm-3 col-form-label"
                          >
                            Password
                          </label>
                          <div class="col-sm-7">
                            <input
                              type="password"
                              value=""
                              name="customer[password]"
                              id="CustomerPassword"
                              class="form-control "
                              placeholder="Password"
                            />
                          </div>
                        </div>

                        <div class="login-toggle-btn">
                          <div class="login-details text-center mb-25">
                            <a href="#recover" id="RecoverPassword">
                              Forgot your password?
                            </a>

                            <button type="submit" class="login-btn">
                              Sign In
                            </button>
                          </div>
                          <div class="login-footer text-center">
                            <p>
                              <Link
                                to="/account/register"
                                id="customer_register_link"
                              >
                                Create account
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="RecoverPasswordForm" style={{ display: "none" }}>
                  <form
                    method="post"
                    action="/account/recover"
                    accept-charset="UTF-8"
                  >
                    <input
                      type="hidden"
                      name="form_type"
                      value="recover_customer_password"
                    />
                    <input type="hidden" name="utf8" value="✓" />

                    <div class="form-container">
                      <div class="login-text">
                        <h2>Reset your password</h2>
                        <p>We will send you an email to reset your password.</p>
                      </div>
                      <div class="login-form-wrapper">
                        <input
                          type="email"
                          value=""
                          name="email"
                          id="RecoverEmail"
                          class="input-full"
                          placeholder="Email"
                          autocorrect="off"
                          autocapitalize="off"
                        />
                        <div class="login-toggle-btn">
                          <div class="form-action-button">
                            <button type="submit" class="login-btn">
                              Submit
                            </button>
                            <a href="#" id="HideRecoverPasswordLink">
                              Cancel
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
