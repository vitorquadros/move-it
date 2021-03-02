/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
