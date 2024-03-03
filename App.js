import MainScreen from "./Screens/mainScreen";
import LoginScreen from "./Screens/loginScreen";
import {useState} from "react";
import {checkIfUserIsLoggedIn, getNonSensitiveInformation} from "./workers/backendConnexionHandler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from "./Screens/loadingScreen";
import {Linking} from "react-native";

export default function App() {
  let [isLoggedIn, setLoggedIn] = useState(false)
  let [username, setUsername] = useState("placeholder")
  let [AuthorizationURI, setURILink] = useState("placeholder")

  Linking.addEventListener('url', ({ url }) => {
    // Parse the URL and extract necessary parameters
    // Handle the authorization callback here
    console.log("Received deep link:", url);
  });


  checkIfUserIsLoggedIn(setLoggedIn, setUsername);


  if(isLoggedIn == true) {
      return MainScreen(setLoggedIn)
  }
  else{
        return LoginScreen(setLoggedIn);
  }
}
