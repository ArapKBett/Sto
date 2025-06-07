const Product = require('../models/Product');
const SoldItem = require('../models/SoldItem');
const cron = require('node-cron');

// Schedule cleanup every 15 minutes
cron.schedule('*/15 * * * *', async () => {
  try {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const soldItems = await SoldItem.find({ soldAt: { $lte: fifteenMinutesAgo } });

    for (const item of soldItems) {
      await Product.findByIdAndDelete(item.productId);
      await SoldItem.findByIdAndDelete(item._id);
      console.log(`Removed sold product: ${item.productId}`);
    }
  } catch (error) {
    console.error('Cleanup error:', error);
  }
});

module.exports = () => (req, res, next) => next();
