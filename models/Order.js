const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: {type: String, required: true},
    orderId: {type: String, required: true},
    paymentInfo: {type: String, default: ''},
    products: {type:Object, required:true},
    address: {type: String, required: true},
    // city: {type: String, default: ''},
    // state: {type: String, default: ''},
    pincode: {type: String, required: true},
    phone: {type: String, required: true},
    name: {type: String, required: true},
    img: {type: String},
    transactionId: {type: String, default:""},
    amount: {type: Number, required: true},
    status: {type: String, default:'Pending',required: true},
    deliveryStatus: {type: String, default:'UnShipped',required: true},
},{timestamps: true});
// mongoose.models= {}
export default mongoose.models.Order || mongoose.model('Order', OrderSchema);