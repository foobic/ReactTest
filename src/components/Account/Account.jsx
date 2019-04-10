import React, { Component } from 'react';
import Button from '@material-ui/core/Button/index';
import { withStyles } from '@material-ui/core/styles/index';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import QuitIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { SocialIcon } from 'react-social-icons';
import mainTheme from '../../assets/theme';
import Loader from '../common/Loader';
import styles from './styles';
import EmailDialog from './EmailDialog';
import QuitDialog from './QuitDialog';

class Account extends Component {
  componentDidMount() {
    document.title = 'Account';
  }

  render() {
    const {
      classes,
      signinWithGoogle,
      signinWithEmail,
      updateEmail,
      updatePass,
      changeDialogState,
      changeQuitDialogStatus,
      signout,
      redirectToHome,
      redirectToSignup,
      ui,
      auth,
    } = this.props;
    const iconSize = { height: 25, width: 25 };
    const { email, pass, user } = auth;
    const { isQuitDialogOpen, emailDialogIsOpen } = ui;

    if (ui.isLoading) return <Loader active />;

    return (
      <div className={classes.fullHeight}>
        <div className={classes.options}>
          {!user && (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={signinWithGoogle}>
                <SocialIcon
                  network="google"
                  className={classNames(classes.icon, classes.leftIcon)}
                  style={iconSize}
                />
                Sign in with Google
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => changeDialogState(true)}>
                <SocialIcon
                  network="email"
                  className={classNames(classes.icon, classes.leftIcon)}
                  style={iconSize}
                />
                Sign in with Email
              </Button>

              <EmailDialog
                email={email}
                pass={pass}
                emailDialogIsOpen={emailDialogIsOpen}
                changeDialogState={changeDialogState}
                updateEmail={updateEmail}
                updatePass={updatePass}
                signinWithEmail={signinWithEmail}
              />

              <hr className={classes.delimiter} />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={redirectToSignup}>
                <AddIcon
                  className={classNames(classes.extendedIcon, classes.leftIcon)}
                />
                Sign up with Email
              </Button>
            </React.Fragment>
          )}

          {user && (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => changeQuitDialogStatus(true)}>
                <QuitIcon
                  className={classNames(classes.extendedIcon, classes.leftIcon)}
                />
                Quit
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={redirectToHome}>
                <HomeIcon
                  className={classNames(classes.extendedIcon, classes.leftIcon)}
                />
                Home
              </Button>

              <QuitDialog
                isQuitDialogOpen={isQuitDialogOpen}
                changeQuitDialogStatus={changeQuitDialogStatus}
                signout={signout}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles(mainTheme))(Account);
