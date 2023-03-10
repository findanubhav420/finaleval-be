const express = require('express');
const fieldsRouter = express.Router();
const { getAllFieldsByContentTypeControllers, createFieldByContentTypeControllers, updateFieldByContentTypeControllers } = require('../controllers/fieldController');

fieldsRouter.get('/:id', getAllFieldsByContentTypeControllers);
fieldsRouter.post('/:id', createFieldByContentTypeControllers);
fieldsRouter.put('/:id', updateFieldByContentTypeControllers);

module.exports = fieldsRouter;