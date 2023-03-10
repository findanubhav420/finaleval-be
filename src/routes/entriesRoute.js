const express = require('express')
const entriesRouter = express.Router();

const { getAllEntriesControllers, getEntryByContentTypeControllers, createEntryByContentTypeControllers,
deleteEntryByContentTypeControllers, updateEntryByContentTypeControllers
} = require('../controllers/entriesController');

entriesRouter.get('/', getAllEntriesControllers);
entriesRouter.get('/:id', getEntryByContentTypeControllers);
entriesRouter.post('/:id', createEntryByContentTypeControllers);
entriesRouter.delete('/:id', deleteEntryByContentTypeControllers);
entriesRouter.put('/:id', updateEntryByContentTypeControllers);

module.exports = entriesRouter;