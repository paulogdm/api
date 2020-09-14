import {AppPropsType} from 'next/dist/next-server/lib/utils'

import App from '~/components/App'

function NextApp({Component, pageProps}: AppPropsType) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// NextApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default NextApp
