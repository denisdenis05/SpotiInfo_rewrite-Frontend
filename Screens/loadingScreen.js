import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity} from 'react-native';

function LoadingScreen(setLoggedIn) {

    return (

        <View className="bg-slate-950">
            <View className="justify-center items-center">
                <Text className="text-blue-200 text-xl">Loading...</Text>
            </View>
        </View>
    );
}

export default LoadingScreen;
