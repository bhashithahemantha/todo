import HttpService from './HttpService';

const baseUrl = 'http://localhost:3000/todo/';

const saveTodoAsync = async (data: any, config?: any) => {
    return HttpService.postAsync(baseUrl, data, config);
};

const getAllTodoAsync = async () => {
    return await HttpService.getAsync(baseUrl);
};

const deleteTodoAsync = async (id: string) => {
    const url = baseUrl + `${id}`;
    return await HttpService.deleteAsync(url);
};

const editTodoAsync = async (id: string, todo: any) => {
    const url = baseUrl + `${id}`;
    return await HttpService.putAsync(url, todo);
};

export default {
    saveTodoAsync,
    getAllTodoAsync,
    deleteTodoAsync,
    editTodoAsync
}