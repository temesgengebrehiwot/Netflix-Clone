import axios from "axios";

const instance = axios.create({
	basURL: "https://api.themoviedb.org/3",
});
export {instance};
