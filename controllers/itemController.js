import Item from "../models/items.js";
import Error from "../utils/ErrorHandler.js";
const getItem = async (req, res, next) => {
    const items = await Item.find();
    if (!items) {
        return next(new ErrorHandler("No items found", 404));
    }
    res.status(200).json(
        {
            success: true,
            itemId: items.length,
            data: items
        }
    )
}

const createItem = async (req, res) => {
    const { name, price, description } = req.body;
    const newItem = await Item.create({
        name, price, description
    })
    res.status(200).json({
        success: true,
        message: "Item succesfully push",
        data: newItem,
    })
}

const removeItem = async (req, res, next) => {
    const itemId = req.params.id
    const deletedItems = await Item.findByIdAndDelete(itemId);

    if (!deletedItems) {
        return next(Error("item id not match", 400));
    }
    return res.status(200).json({
        success: true,
        message: "data succesfull deleted",
        data: deletedItems,
    })
}



export { getItem, createItem, removeItem };