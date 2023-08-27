const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    pid: {type: String, required: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    img4: {type: String, required: true},
    // img5: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    mrp: {type: Number, required: true},
    availableQty: {type: Number, required: true},
    size: {type: String},
    size2: {type: String},
    size3: {type: String},
    size4: {type: String},
    size5: {type: String},
    size6: {type: String},
    size7: {type: String},
    size8: {type: String},
    size9: {type: String},
    size10: {type: String},
    size11: {type: String},
    size12: {type: String},
    color: {type: String},
},{timestamps: true});
// mongoose.models= {}
// export default mongoose.model('Product', ProductSchema);
export default mongoose.models.Product || mongoose.model('Product', ProductSchema);