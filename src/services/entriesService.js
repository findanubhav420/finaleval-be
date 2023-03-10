const { v4: uuidv4 } = require('uuid');
const { Entries } = require('../../database/models');

const getAllEntriesServices = async () => {
    try {
        const data = await Entries.findAll();
        if(data.length === 0){
            return 'No entries found';
        }
        return data[0].dataValues;
    } catch (e) {
        throw new Error(e);
    }
}

const getEntryByContentTypeServices = async (id) => {
    try {
        const data = await Entries.findAll({
            where: {
                content_id: id
            }
        });
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

const createEntryByContentTypeServices = async (id, entry) => {
  const entryId = uuidv4();
    try {
        const data = await Entries.create({
            content_id: id,
            entry_id : entryId,
            entry: entry

        });
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

const deleteEntryByContentTypeServices = async (id) => {
    try {
        const data = await Entries.destroy({
            where: {
                id: id
            }
        });
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

const updateEntryByContentTypeServices = async (id, entry) => {
    try {
        const data = await Entries.update({
            entry: entry
        }, {
            where: {
                id: id
            }

        });
        return data;
    } catch (e) {
        throw new Error(e);
    }
}


module.exports = {
    getAllEntriesServices,
    getEntryByContentTypeServices,
    createEntryByContentTypeServices,
    deleteEntryByContentTypeServices,
    updateEntryByContentTypeServices
}