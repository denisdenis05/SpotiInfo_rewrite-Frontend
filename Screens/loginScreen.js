import {Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import {getAuthorizationURI} from "../workers/backendConnexionHandler";
import {registerUrlHandler} from "../workers/handleUrlRedirects";
function LoginScreen(setLoggedIn) {

    async function logIn()
    {
        let AuthorizationURI = await getAuthorizationURI();
        console.log(AuthorizationURI)
        const openUrlInBrowser = (url) => {
            Linking.openURL(url)
                .then(()=>{
                    registerUrlHandler();
                })
                .catch((err) => console.error('An error occurred', err));
        };
        openUrlInBrowser(AuthorizationURI);
        // setLoggedIn(true);
    }


    return (
        <View className="h-lvh w-full flex-1 items-center bg-black">
            <Text className="text-white font-bold text-3xl mt-32 mb-32">SpotiInfo</Text>
            <View className="h-80 w-full justify-center items-center">
                <TouchableOpacity className="bg-green-600 h-16 w-64 rounded-3xl items-center justify-center flex-row" onPress={logIn}>
                    <Image source={require('../images/spotify.png')} style={{ width: 40, height: 40}} className="mr-5"/>
                    <Text className="text-white font-bold text-lg">Login with Spotify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;
