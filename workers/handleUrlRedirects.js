import { Linking } from 'react-native';


let urlListener = null;

const handleUrlCallback = async (event) => {
    if (event.url === 'spotiinforewrite://callback') {
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
