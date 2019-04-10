export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '95%',
    margin: '5% auto',
    background: 'white',
    borderRadius: 20,
  },
  progressRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  btnContainer: {
    width: '100%',
    margin: '0 auto',
    paddingBottom: '20px',
    display: 'flex',
  },
  btn: {
    display: 'block',
    minWidth: '15%',
    margin: '0 auto',
  },
  circularProgress: {
    width: '25% !important',
    height: '25% !important',
    [theme.breakpoints.up('sm')]: {
      width: '10% !important',
      height: '10% !important',
    },
  },
});
