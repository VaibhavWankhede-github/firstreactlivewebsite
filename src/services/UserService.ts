import axios from 'axios';
import {IUser} from "../models/IUser";

export class UserService {
    private static serverUrl: string | undefined = "https://jsonplaceholder.typicode.com";

    public static getAllUsers():Promise<{data : IUser[]}> {
        return axios.get(`${this.serverUrl}/users`);
    }
}