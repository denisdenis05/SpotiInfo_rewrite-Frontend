import MainScreen from "./Screens/mainScreen";
import LoginScreen from "./Screens/loginScreen";

export default function App() {
  let isLoggedIn = false;

  if(isLoggedIn == true) {
      return MainScreen()
  }
  else{
    return LoginScreen();

  }
}
