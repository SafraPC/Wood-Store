import axios from "axios";

//Model for requisitions with axios:
const api = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_API}`,
});

export default api;
