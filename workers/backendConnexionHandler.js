import {sendGetRequest, sendPostRequest} from "./requests";


const backendIp = "http://192.168.1.128:5151";
export const redirectUrl = "exp://192.168.1.128:8081/";

export async function checkIfUserIsLoggedIn(setLoggedIn, setUsername) {

    let linkToRequest = backendIp + "/api/checkIfLoggedIn";
    const response = await sendGetRequest(linkToRequest);
    if (response && response.isLoggedIn == true){
        setLoggedIn(true);
                    setLoggedIn(true);
                    const username = response.username;
                    setUsername(username);
                    console.log(username);
    }
    return response;
}

export async function getAuthorizationURI() {
    console.log("getAuthURI");
    let linkToRequest = backendIp + "/api/getAuthorizationURI";
    const response = await sendGetRequest(linkToRequest);
    return response;
}

export async function getNonSensitiveInformation() {
    console.log("getNonSens");
    let linkToRequest = backendIp + "/api/getNonSensitiveInformation";
    const response = await sendGetRequest(linkToRequest);
    return response;
}

export async function sendAuthorizationCode(authorizationCode){
    console.log("getAuthKey");
    let linkToRequest = backendIp + "/api/setAuthorizationKey";
    console.log("hi");
    let content = {"isLoggedIn": false, "identificator": authorizationCode};
    console.log("hi2");
    const response = await sendPostRequest(content, linkToRequest);
    console.log("hi3");
    return response;
}
