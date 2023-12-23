import API from "../utility/axios";
export class AdminService {
    static addUser(data: any): Promise<any> {
        return API.post(`/createUser`, data);
    }
    // static getAllUserDetails(): Promise<any> {
    //     return API.get(`/allUserDetails`);
    // }
    static getAllUserDetails(data: any): Promise<any> {
        return API.get(`/allUserDetails`, { params: data });
    }
    static activeUser(data: any): Promise<any> {
        return API.put(`/activeuser`, data);
    }

    static addPosts(data: any): Promise<any> {
        return API.post(`/create/post`, data);
    }
    static getAllPosts(data: any): Promise<any> {
        return API.get(`/allmyposts`, { params: data });
    }

    static addMovies(data: any): Promise<any> {
        return API.post(`/create/movie`, data);
    }

   

}