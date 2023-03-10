const { getAllContentTypesServices, createContentTypeServices } = require('../services/contentTypeService');

const getAllContentTypesControllers = async (req, res) => {
    try{
    const data = await getAllContentTypesServices();
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const createContentTypeControllers = async (req, res) => {
    try{
    const { content_title } = req.body;
    const data = await createContentTypeServices(content_title);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    getAllContentTypesControllers,
    createContentTypeControllers
}