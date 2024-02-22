import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

function MainScreen() {
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
                    <StatusBar/>
                </View>
            </View>
        </View>
    );
}

export default MainScreen;
