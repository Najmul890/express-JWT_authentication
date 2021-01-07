const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}
module.exports.getAllData = () => {
    return Shop.find();
}
module.exports.getById = id => {
    return Shop.findById({_id:id});
}
// module.exports.patchById = data => {
//     const id= data.id;
//     return Shop.findByIdAndUpdate(id, reqBody, {new:true} );
// }
// module.export.putById = data =>{
//     const id = data.id;
//     return Shop.findOneAndReplace({_id:id}, data, {new:true});
// }
// module.export.deleteById = data =>{
//     const id = data.id;
//     return Shop.findByIdAndDelete(id);
// }