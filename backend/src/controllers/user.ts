import { Request, Response } from "express";

const UserController = () => {
	const helloUser = (_req: Request, res: Response) => {
		res.send({ message: "Hello new User!" });
	};
	return { helloUser };
};
export default UserController();
