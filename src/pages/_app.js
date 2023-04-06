import store from '@/app/store'
import Navigation from '@/Components/Navigation/Navigation'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
