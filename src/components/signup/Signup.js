import React, { useState } from "react";
import { TextField, FormControlLabel, Button } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import "./signup.css";




const initialFormData = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  Confirm: "",
};

const Signup = (setShowSignUp) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ initialFormData });
  const [checked, setChecked] = useState(false);

  const [passwordError, setPasswordError] = useState({ state: false, msg: "" });
  const [emailError, setEmailError] = useState({ state: false, msg: "" });

  const toogleSignUp = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSignUp(false);
    }, 1500);
  };

  const createAccount = (e) => {
    e.preventDefault(e);
    setLoading(true);
    const error = formData.password === formData.confirm;
    if (!error) {
      setPasswordError({ state: true, msg: "Password is incorrect" });
      setFormData({ ...formData, confirm: "" });
      setLoading(false);
      return;
    } else {
      setPasswordError({ state: false, msg: "" });
      setEmailError({ state: false, msg: "" });
    }
  }
  return (
    <div className="signup_cont">
      <div className={'signup $ {loading && "login_fade"}'}>
        {loading && <div className="login_loading signup_loading" />}
        <div className="signup_cont">
          <div className="s_left">
            <img
              className="login_img"
              src="https://th.bing.com/th/id/R.41ff70dcefa0753d56a681e93a1ac1e8?rik=yvFoxvxvXpo04w&pid=ImgRaw&r=0"
              alt="google"
            />
            <p className="login_title">Create your Google Account</p>
            <p className="login_sub signup_sub"> Continue with Gmail</p>

            <div className="s_input">
              <div className="name_inputs">
                <TextField
                  className="name_input"
                  id="outlined-basic"
                  label="First Name"
                  type="name"
                  variant="outlined"
                  value={formData.firstname}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstname: e.target.value,
                    })
                  }
                />
                <TextField
                  className="name_input"
                  id="outlined-basic"
                  label="Last Name"
                  type="name"
                  variant="outlined"
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                helperText={
                  emailError.state
                    ? emailError.msg
                    : "You can use letters, numbers & periods"
                }
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                error={emailError.state}
              />
              <div className="s_password">
                <div className="p_wrap">
                  <TextField
                    className="namep_input"
                    id="outlined-basic"
                    label="Password"
                    type={checked ? "text" : "password"}
                    variant="outlined"
                    value={formData.password}
                    error={passwordError.state}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                  />
                  <TextField
                    className="namep_input "
                    id="outlined-basic"
                    label="Confirm"
                    type={checked ? "text" : "confirm"}
                    variant="outlined"
                    value={formData.Confirm}
                    error={passwordError.state}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        Confirm: e.target.value,
                      })
                    }
                  />
                </div>
                <p className={'s_helpertext ${passwordError.state && "signin_error"}'}>
                  {passwordError.state
                  ? passwordError.msg 
                  : "Use 8 or more characters with a mix of letters, numbers and symbols"

                  }
                </p>
                <FormControlLabel
                  control={
                    <CheckBox
                      checked={checked}
                      color="primary"
                      onClick={() => setChecked(checked)}
                    />
                  }
                  label="Show Password"
                />
              </div>
              <div className="s_button">
                <Button
                  className="s_btn"
                  variant="text"
                  color="primary"
                  onClick={toogleSignUp}
                >
                  Sign in Instead
                </Button>

                <Button
                  className="s_btn"
                  variant="contained"
                  color="primary"
                  onClick={createAccount}
                   
                >
                  NEXT
                </Button>
              </div>
            </div>
          </div>
          <figure className="s_figure">
            <img
              childrens="s_figureimg"
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt="account"
            />
            <figcaption className="s_figcaptions">
              One account. All of google working for you
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Signup;
