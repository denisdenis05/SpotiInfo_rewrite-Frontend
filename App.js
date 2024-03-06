import MainScreen from "./Screens/mainScreen";
import LoginScreen from "./Screens/loginScreen";
import {useEffect, useState} from "react";
import {
  checkIfUserIsLoggedIn,
  redirectUrl,
  sendAuthorizationCode
} from "./workers/backendConnexionHandler";
import {Linking} from "react-native";
import {useAuthRequest} from "expo-auth-session";

export default function App() {
  let [isLoggedIn, setLoggedIn] = useState(false)
  let [username, setUsername] = useState("placeholder")
  let eventListener = null;
  let [credentials, setCredentials] = useState({clientId: "placeholder", scopes: ["placeholder"], redirectUri: "placeholder://callback"})
  let [dummyForReRender, reRender] = useState(false);


  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      if (url.startsWith(redirectUrl)) {
        console.log(url);
        let parameters = new URLSearchParams(url.split('?')[1]);

        let authorizationCode = parameters.get('code');
        console.log(authorizationCode);
        let state = parameters.get('state');
        console.log(state);

        sendAuthorizationCode(authorizationCode)
            .then(()=>{reRender(true)})
            .catch();
      }
    };

    Linking.addEventListener('url', handleDeepLink);
    return () => {
      eventListener.remove();
    };
  }, []);

  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };
  const [request, response, promptAsync] = useAuthRequest(
      {
        clientId: credentials.clientId,
        scopes: credentials.scopes,
        redirectUri: credentials.redirectUri,
      },
      discovery
  );

  checkIfUserIsLoggedIn(setLoggedIn, setUsername);


  if(isLoggedIn == true) {
      return MainScreen(setLoggedIn)
  }
  else{
        return LoginScreen(setLoggedIn, credentials, setCredentials, promptAsync);
  }
}
