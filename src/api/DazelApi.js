import axios from "axios";
import { DAZEL_API_BASE_URL, DAZEL_API_KEY } from "../utils/constants.js";

/**
 * Constructs a full API URL based on the given route.
 * @param {string} route - The route for the API that will be appended to the base URL.
 * @returns {string} The full API URL with the appended route and API key parameter.
 */
const composeApiUrl = (route) => {
    const url = new URL(DAZEL_API_BASE_URL);
    url.pathname += route;
    url.searchParams.append("api_key", DAZEL_API_KEY);
    return url.toString();
}

class DazelApi {

    static loginUser = async (username, password) => {
        try {
            const response = await axios.post(composeApiUrl("auth"),
                {
                    username: username,
                    password: password
                },
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            );
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getNotificationData = async () => {
        try {
            const response = await axios.get(composeApiUrl("notifications"), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getEnvelopeData = async () => {
        try {
            const response = await axios.get(composeApiUrl("envelope"), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getApiStatus = async () => {
        try {
            const response = await axios.get(composeApiUrl("status"), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }
}

export default DazelApi;