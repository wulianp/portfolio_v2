import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
            backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(220,217,249,1) 0%, rgba(172,224,217,1) 89.8% )'//'radial-gradient( circle farthest-corner at 10% 20%,  rgba(248,219,219,1) 0%, rgba(229,248,250,1) 90% )',
        },
      }
    },
    MuiPaper:{
        root:{
            backgroundColor: '#f5f7f7'
        }
    },
   
  }
});




function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
