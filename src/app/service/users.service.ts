import API from "../utility/axios";
export class UsersService {
    static addUser(data: any): Promise<any> {
        return API.post(`/createUser`, data);
    }
    static loginUser(data:any):Promise<any>{
        return API.post(`/userLogin`, data);

    }

}