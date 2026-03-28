const validateItem = (req, res, next) => {
    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Item name is required" });
    }

    next();
}

export { validateItem };