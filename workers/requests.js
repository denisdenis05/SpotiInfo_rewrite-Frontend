

export async function sendPostRequest(content, link) {
    try {
        const requestOptions = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(content)
        }

        const response = await fetch(link, requestOptions);
        const retrievedData = await response.json();

        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export async function sendGetRequest(link) {
    try {
        const requestOptions = {
            method: "GET",
            headers: {'Content-type': 'application/json'}
        };
        console.log(link)
        const response = await fetch(link, requestOptions);
        const retrievedData = await response.json();
        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
