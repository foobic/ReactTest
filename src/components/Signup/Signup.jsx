import React, { Component } from 'react';
import Button from '@material-ui/core/Button/index';
import { withStyles } from '@material-ui/core/styles/index';
import classNames from 'classnames';
import In from '@material-ui/icons/Input';
import TextField from '@material-ui/core/TextField/index';
import mainTheme from '../../assets/theme';
import Loader from '../common/Loader';
import styles from './styles';

class Signup extends Component {
  componentDidMount() {
    document.title = 'Sign up';
    const { auth, redirectToAccount } = this.props;
    if (auth.user) redirectToAccount();
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
      ui,
    } = this.props;
    const { email, pass, passRepeat } = auth;

    const signupForm = () => {
      return (
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
      );
    };

    const controlButtons = () => {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    };

    if (ui.isLoading) return <Loader active />;
    return (
      <div className={classes.fullHeight}>
        <div className={classes.options}>
          {signupForm()}
          {controlButtons()}
        </div>
      </div>
    );
  }
}

export default withStyles(styles(mainTheme))(Signup);
