import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import MainScreen from './Screens/mainScreen';
import LoginScreen from './Screens/loginScreen';
import {
  checkIfUserIsLoggedIn,
  redirectUrl,
  sendAuthorizationCode,
} from './workers/backendConnexionHandler';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('placeholder');
  const [dummyForReRender, reRender] = useState(false);

  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      if (url.startsWith(redirectUrl)) {
        console.log(url);
        const parameters = new URLSearchParams(url.split('?')[1]);
        const authorizationCode = parameters.get('code');
        console.log(authorizationCode);
        const state = parameters.get('state');
        console.log(state);

        sendAuthorizationCode(authorizationCode)
            .then(() => {
              reRender(true);
            })
            .catch((error) => {
              console.error('Error sending authorization code:', error);
            });
      }
    };

    const eventListener = Linking.addEventListener('url', handleDeepLink);
    checkIfUserIsLoggedIn(setLoggedIn, setUsername);

    return () => {
      eventListener.remove();
    };
  }, []);

  if (isLoggedIn) {
    return <MainScreen setLoggedIn={setLoggedIn} />;
  } else {
    return <LoginScreen setLoggedIn={setLoggedIn} />;
  }
}
