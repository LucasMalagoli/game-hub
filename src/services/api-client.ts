import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5d475346bcbc45709f0ce77ad52ce96f",
  },
});
