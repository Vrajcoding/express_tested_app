let items = [];
let itemId = 1;

const getItem = (req, res) => {
    res.status(200).json(
        {
            success: true,
            itemId: items.length,
            data: items
        }
    )
}

const createItem = (req, res) => {
    const newItem = {
        id: itemId++,
        name: req.body.name.trim(),
    }

    items.push(newItem);
    res.status(200).json({
        success: true,
        message: "Item succesfully push",
        data: newItem,
    })
}

const removeItem = (req, res) => {
    const { itemId } = parseInt(req.params.id, 10);
    const itemIndex = items.find(items => items.id === itemId);

    if (itemIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Item not found",
        })
    }

    const deletedItem = items.splice(itemIndex, 1)[0];
        return res.status(200).json({
        success: true,
        message: "data succesfull deleted",
        data: deletedItem,
    })
} 



export { getItem, createItem, removeItem };