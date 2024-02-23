import {Text, View, Image, TouchableOpacity} from 'react-native';
function LoginScreen() {
    return (
        <View className="h-full w-full flex-1 items-center bg-black">
            <Text className="text-white font-bold text-3xl mt-32 mb-32">SpotiInfo</Text>
            <View className="h-80 w-full justify-center items-center">
                <TouchableOpacity className="bg-green-600 h-16 w-64 rounded-3xl items-center justify-center flex-row">
                    <Image source={require('../images/spotify.png')} style={{ width: 40, height: 40}} className="mr-5"/>
                    <Text className="text-white font-bold text-lg">Login with Spotify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;
