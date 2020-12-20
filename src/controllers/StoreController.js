const StoreService = require('../services/StoreService');
const MissingFieldsError = require('../constants/errors/MissingFieldsError');



const createStore = async (req, res) => {
    const {
        name,
        owner,
        address,
        rnc
    } = req.body;

    if (!name) {
        throw new MissingFieldsError('Name is required');
    }

    const store = await StoreService.createStore({
        name,
        owner,
        address,
        rnc
    });

    res.json({
        success: true,
        data: store,
    });
};

const updateStore = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        owner,
        address,
        rnc
    } = req.body;

    if (!name) {
        throw new MissingFieldsError('Name is required');
    }

    const updated = await StoreService.updateStore({
        id,
        name,
        owner,
        address,
        rnc
    });
    res.json({
        success: true,
        data: updated,
    });
};

const deleteStore = async (req, res) => {
    const { id } = req.params;

    const result = await StoreService.deleteStore(id);

    const success = result.ok > 0 && result.n > 0;
    res.json({
        success,
    });
};

const getStore = async (req, res) => {
    const { id } = req.params;
    const data = await StoreService.findStoreById(id);
    res.json({
        success: true,
        data: data,
    });
};

const getAllStores = async (req, res) => {
    const { id } = req.params;
    const data = await StoreService.getAllStores(id);
    res.json({
        success: true,
        data: data,
    });
};

const createItem = async (req, res) => {
    const {
        name,
        description,
        value,
        availability
    } = req.body;

    if (!name || value === undefined) {
        throw new MissingFieldsError('Name and Value are required');
    }

    const store = await StoreService.createItem(req.params.storeId,{
        name,
        description,
        availability,
        value
    });

    res.json({
        success: true,
        data: store,
    });
};

const updateItem = async (req, res) => {
    const { storeId, itemId } = req.params;
    const {
        name,
        description,
        value,
        availability
    }  = req.body;

    if (!name || value === undefined) {
        throw new MissingFieldsError('Name and value are required');
    }

    const updated = await StoreService.updateItem(storeId, {
        id: itemId,
        name,
        description,
        value,
        availability
    });
    res.json({
        success: true,
        data: updated,
    });
};

const deleteItem = async (req, res) => {
    const { storeId, itemId } = req.params;

    const result = await StoreService.deleteItem(storeId, itemId);

    const success = result.ok > 0 && result.n > 0;
    res.json({
        success,
    });
};

const getItem = async (req, res) => {
    const { storeId, itemId } = req.params;
    const data = await StoreService.findItemById(storeId, itemId);
    res.json({
        success: true,
        data: data,
    });
};

module.exports = {
    createStore,
    updateStore,
    deleteStore,
    getStore,
    getAllStores,
    createItem,
    updateItem,
    deleteItem,
    getItem
};