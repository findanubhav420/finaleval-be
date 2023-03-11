const EntriesRouter = require('express').Router();
const EntriesController = require('../controllers/entriesController');
// const { validate } = require('../middlewares/authValidation');

EntriesRouter.route('/')
  .get( EntriesController.getAllCollections);

EntriesRouter.route('/:id')
  .get( EntriesController.getCollection);

EntriesRouter.route('/:collectionId/entries')
  .get( EntriesController.getAllEntriesByCollectionId)
  .post( EntriesController.createEntry);

EntriesRouter.route('/:collectionId/entries/:entryId')
  .put( EntriesController.updateEntry)
  .delete( EntriesController.deleteEntry);

module.exports = EntriesRouter;