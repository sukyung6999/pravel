import {SessionProvider} from "next-auth/react";
import type {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import {wrapper} from "stores";
import {GlobalStyle} from "styles/GlobalStyle";
import {themes} from "styles/theme";
import {AuthenticationProvider} from "utils/authentication";
import {AuthorizationProvider} from "utils/authorization";
import "utils/firebase"; 

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthenticationProvider>
        <ThemeProvider theme={themes.dark}>
          <GlobalStyle />
          <AuthorizationProvider>
            <Component {...pageProps} />
          </AuthorizationProvider>
        </ThemeProvider>
      </AuthenticationProvider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
