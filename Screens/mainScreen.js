import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity} from 'react-native';

function MainScreen(setLoggedIn) {

    function logOut()
    {
        setLoggedIn(false);
    }


    return (
        <View className="h-full w-screen bg-slate-950">
            <View className="h-20 flex-row items-center blA">
                <View className="ml-5 flex-1 items-start">
                    <Text className="text-blue-200 font-bold text-lg">Denis Denis</Text>
                </View>
                <View className="mr-5 flex-1 items-end">
                    <Image source={require('../images/settings.png')} style={{ width: 40, height: 40}} />
                </View>
            </View>

            <View className="bg-slate-950">
                <View className="justify-center items-center">
                    <Text className="text-blue-200">Open up App.js to start working on your app!</Text>
                    <TouchableOpacity className="bg-red-700 h-16 w-64 rounded-3xl items-center justify-center flex-row" onPress={logOut}>
                        <Image source={require('../images/spotify.png')} style={{ width: 40, height: 40}} className="mr-5"/>
                        <Text className="text-white font-bold text-lg">LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default MainScreen;
