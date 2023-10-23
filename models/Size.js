const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema({

    size: {type: String},
},{timestamps: true});
mongoose.models= {}
export default mongoose.model('Size', SizeSchema);
// export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);