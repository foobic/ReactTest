import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import In from '@material-ui/icons/Input';
import TextField from '@material-ui/core/TextField';
import mainTheme from '../../assets/theme';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  icon: {
    width: 25,
    height: 25,
  },
  leftIcon: {
    color: theme.palette.secondary.dark,
    marginRight: theme.spacing.unit,
  },
  fullHeight: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 500,
    minWidth: 250,
    padding: '20px 20px',
    borderRadius: '10px',
    margin: '0 auto',
    background: 'white',
  },
  delimiter: {
    width: '100%',
    background: theme.palette.primary.main,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const Signup = props => {
  const {
    classes,
    redirectToSignup,
    onChangeEmailHandler,
    onChangePassHandler,
    onChangePassRepeatHandler,
    signupWithEmail,
    state,
  } = props;
  const { email, pass, passRepeat } = state;

  return (
    <div className={classes.fullHeight}>
      <div className={classes.options}>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={onChangeEmailHandler}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value={pass}
              onChange={onChangePassHandler}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Repeat password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value={passRepeat}
              onChange={onChangePassRepeatHandler}
            />
          </div>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={signupWithEmail}>
          Sign up
        </Button>
        <hr className={classes.delimiter} />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={redirectToSignup}>
          <In className={classNames(classes.extendedIcon, classes.leftIcon)} />
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles(mainTheme))(Signup);
