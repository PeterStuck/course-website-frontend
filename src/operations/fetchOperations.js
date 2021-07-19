import axios from "axios";

export const fetchItems = async (resourceUrl, errorMessage) => {
    const response = await axios.get(resourceUrl)
        .then(response => {
            if (response.status === 204) {
                return Promise.reject(errorMessage);
            }
            return response;
        })
        .catch(error => console.log(error));
    return await (response) ? response.data : [];
}