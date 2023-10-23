const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    color: {type: String},
},{timestamps: true});
mongoose.models= {}
export default mongoose.model('Color', ColorSchema);
// export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);