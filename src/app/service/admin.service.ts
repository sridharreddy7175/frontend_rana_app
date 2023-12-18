import API from "../utility/axios";
export class AdminService {
    static addUser(data: any): Promise<any> {
        return API.post(`/createUser`, data);
    }
    static getAllUserDetails(): Promise<any> {
        return API.get(`/allUserDetails`);
    }

}