const { getAllFieldsByContentTypeServices, createFieldByContentTypeServices, updateFieldByContentTypeServices } = require('../services/fieldService');

const getAllFieldsByContentTypeControllers = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await getAllFieldsByContentTypeServices(id);
        return res.status(200).json(data);
        } catch (e) {
            res.status(500).json({
                message: e.message
            });
        }
}

const createFieldByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { field_title } = req.body;
    const data = await createFieldByContentTypeServices(id, field_title);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const updateFieldByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { field_title } = req.body;
    const data = await updateFieldByContentTypeServices(id, field_title);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}


module.exports = {
    getAllFieldsByContentTypeControllers,
    createFieldByContentTypeControllers,
    updateFieldByContentTypeControllers
}