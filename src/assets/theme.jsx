import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    // primary: { main: '#2196f3' },
    primary: { main: '#fff' },
    secondary: { main: '#2979ff' },
  },
  white: '#fff',
  typography: {
    useNextVariants: true,
  },
});

export default Theme;
