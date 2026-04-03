import Error from "../utils/ErrorHandler.js";
const validateItem = (req, res, next) => {
    const { name } = req.body;

    if (!name || name.trim() === "") {
        throw new Error("Item name is required", 400);
    }

    next();
}

export { validateItem };