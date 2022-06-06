// Insert the following code after useScript() function from Step 1.
import { api } from "./api";

export async function createWidget() {
  // Function to call your server-side to generate the access_token and retrieve the your access token
    async function getAccessToken() { 
    // Make sure to change /get-access-token to point to your server-side.
    try {
        const token = await api.get("auth/token");
        console.log(token.data.response)
        return token.data.response;
    } catch (error) {
        console.log(error);
        throw error;
    }

        // return fetch('http://localhost:3001/auth/token', {
        //         method: 'GET'
        //     }) 
        //     .then(response => response.json())
        //     .then((data) => data)
        //     .catch(error => console.error('Error:', error))
    }
    const callback = () => {}
    const successCallbackFunction = (link: any, institution: any) => {
        console.log(link, institution)
        // Do something with the link and institution,
        // such as associate it with your registered user in your database.
    }

    const onExitCallbackFunction = (data: any,) => {
        // Do something with the exit data.
    }
    const onEventCallbackFunction = (data: any) => {
        // Do something with the exit data.
    }
    const config = {

        // Add your startup configuration here.

        callback: (link: any, institution: any,) => successCallbackFunction(link, institution),
        onExit: (data: any,) => onExitCallbackFunction(data),
        onEvent: (data: any,) => onEventCallbackFunction(data)
    }
    const { access } = await getAccessToken();
    window.belvoSDK.createWidget(access, config).build()
}