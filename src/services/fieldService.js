const { Fields } = require('../../database/models');

const getAllFieldsByContentTypeServices = async (id) => {
    try{
    const data = await Fields.findAll({
        where: {
            content_id: id
        }
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}

const createFieldByContentTypeServices = async (id,field_title) => {
    try{
    const data = await Fields.create({
        content_id: id,
        field_title: field_title
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}

const updateFieldByContentTypeServices = async (id,field_title) => {
    try{
    const data = await Fields.update({
        field_title: field_title
    }, {
        where: {
            id: id
        }
    });
    return data;
}
    catch (err) {
        throw new Error(err);
    }
}



module.exports = {
    getAllFieldsByContentTypeServices,
    createFieldByContentTypeServices,
    updateFieldByContentTypeServices
}