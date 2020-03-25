const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const id = crypto.randomBytes(4).toString('HEX');
        const { city, email, name, uf, whatsapp } = request.body;

        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });

        return response.json({ id });
    },
    async list(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
};