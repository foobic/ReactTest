import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import In from '@material-ui/icons/Input';
import { SocialIcon } from 'react-social-icons';
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
});

const Signup = props => {
  const { classes, redirectToSignup } = props;
  const iconSize = { height: 25, width: 25 };

  return (
    <div className={classes.fullHeight}>
      <div className={classes.options}>
        <Button variant="contained" color="primary" className={classes.button}>
          <SocialIcon
            network="google"
            className={classNames(classes.icon, classes.leftIcon)}
            style={iconSize}
          />
          Sign up with Google
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
