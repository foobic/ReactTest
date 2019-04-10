import React, { Component } from 'react';
import Button from '@material-ui/core/Button/index';
import { withStyles } from '@material-ui/core/styles/index';
import classNames from 'classnames';
import In from '@material-ui/icons/Input';
import TextField from '@material-ui/core/TextField/index';
import mainTheme from '../assets/theme';
import Loader from './Loader';

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

class Signup extends Component {
  componentDidMount() {
    document.title = 'Sign up';
    const { auth, redirectToAccount, loadFromLS } = this.props;
    if (auth.user) redirectToAccount();
    else {
      loadFromLS();
    }
  }

  render() {
    const {
      classes,
      signupWithEmail,
      updateEmail,
      updatePass,
      updatePassRepeat,
      redirectToAccount,
      auth,
    } = this.props;

    const { email, pass, passRepeat } = auth;
    return (
      <div className={classes.fullHeight}>
        <div className={classes.options}>
          <Loader
            type="Oval"
            color={mainTheme.palette.secondary.main}
            height={80}
            width={80}
          />
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
                onChange={e => updateEmail(e.target.value)}
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
                onChange={e => updatePass(e.target.value)}
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
                onChange={e => updatePassRepeat(e.target.value)}
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
            onClick={redirectToAccount}>
            <In
              className={classNames(classes.extendedIcon, classes.leftIcon)}
            />
            Sign in
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles(mainTheme))(Signup);
