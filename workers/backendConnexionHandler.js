import {sendGetRequest} from "./requests";


const backendIp = "http://192.168.1.130:8080";

export function checkIfUserIsLoggedIn(setLoggedIn, setUsername) {
    let linkToRequest =  backendIp + "/checkIfLoggedIn";
    const response = sendGetRequest(linkToRequest)
        .then(response => {
            if (response.isLoggedIn == true) {
                setLoggedIn(true);
                const username = response.username;
                setUsername(username);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export async function getAuthorizationURI() {
    let linkToRequest = backendIp + "/getAuthorizationURI";
    const response = await sendGetRequest(linkToRequest);
    return response;
}

export async function getNonSensitiveInformation() {
    let linkToRequest = backendIp + "/getNonSensitiveInformation";
    const response = await sendGetRequest(linkToRequest);
    return response;
}
