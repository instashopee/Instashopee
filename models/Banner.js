const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({

    banner1: {type: String, required: true},
    banner2: {type: String, required: true},
    banner3: {type: String, required: true},
    banner4: {type: String, required: true},

},{timestamps: true});
mongoose.models= {}
export default mongoose.model('Banner', BannerSchema);
// export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);