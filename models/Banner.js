const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({

    banner1: {type: String},
    banner2: {type: String},
    banner3: {type: String},
    banner4: {type: String},
    static_banner1: {type: String},
    static_banner2: {type: String},
    static_banner3: {type: String},
    static_banner4: {type: String},
    static_banner5: {type: String},
    static_banner6: {type: String},
    static_banner7: {type: String},
    static_banner8: {type: String},
    static_banner9: {type: String},
    static_banner10: {type: String},
},{timestamps: true});
mongoose.models= {}
export default mongoose.model('Banner', BannerSchema);
// export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);