import Config from "../config/Config";
import AxiosServices from "./AxiosServices";

const axiosService = new AxiosServices();

export default class CrudServices {
  AddUser(data) {
    console.log("AddUser : " + Config.AddUser);
    return axiosService.post(Config.AddUser, data, false);
  }

  GetAllUsers() {
    console.log("GetAllUsers : " + Config.GetAllUsers);
    return axiosService.get(Config.GetAllUsers, false);
  }

  UpdateUser(data) {
    console.log("UpdateUser : " + Config.UpdateUser);
    return axiosService.put(Config.UpdateUser, data, false);
  }

  DeleteUser(data) {
    console.log("DeleteUser : " + Config.DeleteUser);
    console.table(data);
    return axiosService.post(Config.DeleteUser, data, false);
  }
}
