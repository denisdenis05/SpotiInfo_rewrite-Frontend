import {sendGetRequest, sendPostRequest} from "./requests";


const backendIp = "http://192.168.217.50:8080";
export const redirectUrl = "exp://192.168.217.50:8081/--/";

export function checkIfUserIsLoggedIn(setLoggedIn, setUsername) {
    let linkToRequest =  backendIp + "/checkIfLoggedIn";
    const response = sendGetRequest(linkToRequest)
        .then(response => {
            if (response.isLoggedIn == true) {
                setLoggedIn(true);
                const username = response.username;
                setUsername(username);
                console.log(username)
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

export async function sendAuthorizationCode(authorizationCode){
    let linkToRequest = backendIp + "/setAuthorizationKey";
    console.log("hi");
    let content = {"isLoggedIn": false, "identificator": authorizationCode};
    console.log("hi2");
    const response = await sendPostRequest(content, linkToRequest);
    console.log("hi3");
    return response;
}
