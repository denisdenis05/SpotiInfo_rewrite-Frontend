import {sendGetRequest} from "./requests";

export function checkIfUserIsLoggedIn(setLoggedIn, setUsername) {
    let linkToRequest = "http://192.168.1.135:8080/checkIfLoggedIn";
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
    let linkToRequest = "http://192.168.1.135:8080/getAuthorizationURI";
    const response = await sendGetRequest(linkToRequest);
    return response;
}
