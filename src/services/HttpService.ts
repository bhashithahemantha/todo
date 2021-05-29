import axios from 'axios';

const sucessResponse = (response: any) => {
    if (response.status === 200 || response.status === 201) {
        return { success: true, data: response.data, error: null };
    }
};

const errorResponse = (error: any) => {
    return { success: false, data: null, error: error };
};

const postAsync = async (url: string, data: any, config?: any) => {
    return axios
        .post(url, data, config)
        .then((postResponse: any) => {
            return sucessResponse(postResponse);
        })
        .catch((error: any) => {
            return errorResponse(error);
        });
};

const getAsync = async (url: string) => {
    return axios
        .get(url)
        .then((getResponse) => {
            return sucessResponse(getResponse);
        })
        .catch((error) => {
            return errorResponse(error);
        });
};

const deleteAsync = async (url: string) => {
    return axios
        .delete(url)
        .then((deleteResponse) => {
            return sucessResponse(deleteResponse);
        })
        .catch((error) => {
            return errorResponse(error);
        });
};

const putAsync = async (url: any, data: any) => {
    return axios
        .put(url, data)
        .then((putResponse) => {
            return sucessResponse(putResponse);
        })
        .catch((error) => {
            return errorResponse(error);
        });
};

export default {
    postAsync,
    getAsync,
    deleteAsync,
    putAsync
};