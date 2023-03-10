const { v4: uuidv4 } = require('uuid');
const { Content } = require('../../database/models');

const getAllContentTypesServices = async () => {
    try{
    const data = await Content.findAll();
    return data;
    } catch (err) {
        throw new Error(err);
    }
}

const createContentTypeServices = async (name) => {
    const contentTypeId = uuidv4();
    try{
    const data = await Content.create({
        content_title: name,
        content_id: contentTypeId
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getAllContentTypesServices,
    createContentTypeServices
}