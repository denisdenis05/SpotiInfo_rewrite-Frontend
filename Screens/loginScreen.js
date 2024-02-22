import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, Button} from 'react-native';

function LoginScreen() {
    return (
        <View className="h-full w-full flex-1 items-center justify-center bg-slate-700">
                <Text className="text-blue-200">Open up App.js to start working on your app!</Text>
            <Button title="Login" className="rounded-2xl"></Button>
        </View>
    );
}

export default LoginScreen;
