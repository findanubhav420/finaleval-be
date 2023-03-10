const { getAllEntriesServices, getEntryByContentTypeServices, createEntryByContentTypeServices,
deleteEntryByContentTypeServices, updateEntryByContentTypeServices
} = require('../services/entriesService');

const getAllEntriesControllers = async (req, res) => {
    try{
    const data = await getAllEntriesServices();
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getEntryByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const data = await getEntryByContentTypeServices(id);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const createEntryByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { entry } = req.body;
    const data = await createEntryByContentTypeServices(id, entry);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const deleteEntryByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const data = await deleteEntryByContentTypeServices(id);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: "e.message"
        });

    }
}

const updateEntryByContentTypeControllers = async (req, res) => {
    try{
    const { id } = req.params;
    const { entry } = req.body;
    const data = await updateEntryByContentTypeServices(id, entry);
    return res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}


module.exports = {
    getAllEntriesControllers,
    getEntryByContentTypeControllers,
    createEntryByContentTypeControllers,
    deleteEntryByContentTypeControllers,
    updateEntryByContentTypeControllers
}