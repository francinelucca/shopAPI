const mongoose = require('mongoose');
const { StoreModel } = require('../models');
const NotFoundError = require('../constants/errors/NotFoundError');

const createStore = async (storeInfo) => {
    return new StoreModel(storeInfo).save();
}

const findStoreById = async (storeId) => {
    const store = await StoreModel.findById(storeId).lean().exec();
    if (store) {
        return store;
    }
    throw new NotFoundError('Store Not Found.');
};

const deleteStore = async (id) => StoreModel.deleteOne({ _id: id }).lean().exec();

const updateStore = async (storeInfo) => {
    const { id } = storeInfo;
    return StoreModel.findOneAndUpdate(
        { _id: id },
        storeInfo,
        { new: true },
    ).lean().exec();
};

const getAllStores = async () => {
    return StoreModel.find().sort({ name: -1 })
}

const createItem = async (storeId, itemInfo) => {
    const item = {
        _id: mongoose.Types.ObjectId(),
        ...itemInfo,
    };

    const store = await StoreModel.findByIdAndUpdate(storeId, {
        $push: {
            items: item,
        },
    }).lean().exec();

    if (!store) {
        throw new NotFoundError('Store not Found');
    }

    return item;
};

const findItemById = async (storeId, itemId) => {
    const store = await StoreModel.findById(storeId).exec();

    if (!store) {
        throw new NotFoundError('Store not Found');
    }

    const item = store.items.id(itemId);

    if (!item) {
        throw new NotFoundError('Item not Found');
    }

    return item;
};

const deleteItem = async (storeId, itemId) => {
    const store = await StoreModel.findById(storeId).exec();

    if (!store) {
        throw new NotFoundError('Store not Found');
    }

    const item = store.items.id(itemId);

    if (!item) {
        throw new NotFoundError('Item not Found');
    }

    return store.updateOne({
        $pull: {
            items: {
                _id: itemId,
            },
        },
    }).lean().exec();
}

const updateItem = async (storeId, item) => {
    const { id } = item;
    const store = await StoreModel.findById(storeId);
    if (!store) {
        throw new NotFoundError('Store Not Found.');
    }

    let dbItem = store.items.id(id);

    dbItem.name = item.name;
    dbItem.description = item.description;
    dbItem.value = item.value;
    dbItem.availability = item.availability;

    store.markModified('items');

    return await store.save().then(
        res => res.items.id(id)
    );
};

module.exports = {
    createStore,
    findStoreById,
    deleteStore,
    updateStore,
    getAllStores,
    createItem,
    findItemById,
    deleteItem,
    updateItem
};