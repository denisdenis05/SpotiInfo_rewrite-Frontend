import MainScreen from "./Screens/mainScreen";
import LoginScreen from "./Screens/loginScreen";
import {useState} from "react";
import {checkIfUserIsLoggedIn} from "./workers/backendConnexionHandler";

export default function App() {
  let [isLoggedIn, setLoggedIn] = useState(false)
  let [username, setUsername] = useState("placeholder")
  let [AuthorizationURI, setURILink] = useState("placeholder")

  checkIfUserIsLoggedIn(setLoggedIn, setUsername);


  if(isLoggedIn == true) {
      return MainScreen(setLoggedIn)
  }
  else{
    return LoginScreen(setLoggedIn);

  }
}
