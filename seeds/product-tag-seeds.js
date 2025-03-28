const { ProductTag } = require('../models'); // Import the ProductTag model

const productTagData = [
  {
    product_id: 1,
    tag_id: 3,
  },
  {
    product_id: 1,
    tag_id: 4,
  },
  {
    product_id: 2,
    tag_id: 5,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 7,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
  {
    product_id: 5,
    tag_id: 4,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData); // Use the imported ProductTag model

module.exports = seedProductTags;

