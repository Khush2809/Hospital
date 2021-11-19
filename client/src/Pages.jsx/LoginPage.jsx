import React from "react";
import "./LoginPage.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import LoginPage1 from "./LoginPage1";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LoginPage = () => {
  window.onload = function () {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );
  };

  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <FormControl className={classes.formControl}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Profession
                </MenuItem>
                <MenuItem value={10}>Admin</MenuItem>
                <MenuItem value={20}>Doctor</MenuItem>
                <MenuItem value={30}>Staff</MenuItem>
              </Select>
              <FormHelperText>Profession</FormHelperText>
            </FormControl>
            {/* <span>or use your email for registration</span> */}
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <FormControl className={classes.formControl}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Profession
                </MenuItem>
                <MenuItem value={10}>Admin</MenuItem>
                <MenuItem value={20}>Doctor</MenuItem>
                <MenuItem value={30}>Staff</MenuItem>
              </Select>
              <FormHelperText>Profession</FormHelperText>
            </FormControl>
            {/* <span>or use your account</span> */}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="footer">
        <b> Follow me on </b>
        <div class="icons">
          <a
            href="https://github.com/kvaibhav01"
            target="_blank"
            class="social"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/vaibhavkhulbe143/"
            target="_blank"
            class="social"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://medium.com/@vaibhavkhulbe"
            target="_blank"
            class="social"
          >
            <i class="fab fa-medium"></i>
          </a>
          <a
            href="https://twitter.com/vaibhav_khulbe"
            target="_blank"
            class="social"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://linkedin.com/in/vaibhav-khulbe/"
            target="_blank"
            class="social"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default LoginPage;
