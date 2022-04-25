const Axios = require("axios").default;

export default class AxiosServices {
  post(url, data, IsRequired = false, Header) {
    return Axios.post(url, data, IsRequired && Header);
  }

  get(url, IsRequired = false, Header) {
    return Axios.get(url, Header && IsRequired);
  }

  put(url, data, IsRequired = false, Header) {
    return Axios.put(url, data, IsRequired && Header);
  }

  delete(url, data, IsRequired = false, Header) {
    return Axios.delete(url, data, IsRequired && Header);
  }
}
