const express = require('express');
const asyncHandler = require('express-async-handler');
const StoreController = require('../controllers/StoreController');


const router = express.Router();

router.get('/',  asyncHandler(StoreController.getAllStores));
router.post('/',  asyncHandler(StoreController.createStore));
router.get('/:id',  asyncHandler(StoreController.getStore));
router.put('/:id',  asyncHandler(StoreController.updateStore));
router.delete('/:id',  asyncHandler(StoreController.deleteStore));

router.post('/:storeId/item', asyncHandler(StoreController.createItem));
router.get('/:storeId/item/:itemId', asyncHandler(StoreController.getItem));
router.put('/:storeId/item/:itemId', asyncHandler(StoreController.updateItem));
router.delete('/:storeId/item/:itemId', asyncHandler(StoreController.deleteItem));

module.exports = router;