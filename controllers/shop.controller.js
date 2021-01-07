const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}
module.exports.getAllData = async (req, res, next) => {
    try {
        const data = await shopService.getAllData();
        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'data not found'});
    }
}
module.exports.getById = async (req, res, next) => {
    try {
        const id = req.query.id;
        const data = await shopService.getById(id);
        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'data not found'});
    }
}

// module.exports.patchById = async (req, res, next) => {
//     try {
//         const data = await shopService.patchById(req.body);
//         return res.status(200).json(data);
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ message: 'data not found'});
//     }
// }
// module.exports.putById = async (req, res, next) => {
//     try {
//         const data = await shopService.putById(req.body);
//         return res.status(200).json(data);
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ message: 'data not found'});
//     }
// }
// module.exports.deleteById = async (req, res, next) => {
//     try {
//         const data = await shopService.deleteById(req.body);
//         return res.status(200).json(data);
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ message: 'data not found'});
//     }
// }
