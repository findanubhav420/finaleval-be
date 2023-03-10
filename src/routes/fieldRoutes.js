const express = require('express');
const fieldsRouter = express.Router();
const { getAllFieldsByContentTypeControllers, createFieldByContentTypeControllers } = require('../controllers/fieldController');

fieldsRouter.get('/:id', getAllFieldsByContentTypeControllers);
fieldsRouter.post('/:id', createFieldByContentTypeControllers);

module.exports = fieldsRouter;