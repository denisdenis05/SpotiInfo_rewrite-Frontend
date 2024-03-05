import {Text, View, Image, TouchableOpacity, Linking, AppState} from 'react-native';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import {getAuthorizationURI, getNonSensitiveInformation} from "../workers/backendConnexionHandler";
import {registerUrlHandler} from "../workers/handleUrlRedirects";
import {useEffect, useState} from "react";
import LoadingScreen from "./loadingScreen";
function LoginScreen(setLoggedIn, credentials, setCredentials, promptAsync) {




    async function getCredentials() {
        let localCredentials = await getNonSensitiveInformation();
        console.log(localCredentials);
        setCredentials(localCredentials);
    }

    if (credentials.clientId === "placeholder"){
        getCredentials();
        return LoadingScreen();
    }

    const logIn = async () => {
        try {
            await promptAsync(); // Initiate the authorization process
        } catch (error) {
            console.error("Authorization error:", error); // Log any authorization errors
        }
    };


    console.log(credentials);
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
