import { Linking } from 'react-native';


let urlListener = null;

const handleUrlCallback = async (event) => {
    if (event.url === 'exp://192.168.196.50:8081') {
        Linking.removeEventListener('url', handleUrlCallback);
        console.log("hei")
    }
};

const registerUrlHandler = () => {
    urlListener = Linking.addEventListener('url', handleUrlCallback);
    console.log("started listening?")
    console.log(urlListener)
};

const unregisterUrlHandler = () => {
    urlListener.remove();
};

export { registerUrlHandler, unregisterUrlHandler };
