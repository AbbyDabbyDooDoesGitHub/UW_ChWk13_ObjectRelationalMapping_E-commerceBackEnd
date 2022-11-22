// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, 
  {
    foreignKey: "category_id",
    as: "category"
  } 
);



// Categories have many Products
Category.hasMany(Product,
  {
    foreignKey: "product_id",
    as: "product"
  } 
);


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, 
  {
    foreignKey: "tag_id",
    as: "tag"
  } 
);



// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,
  {
    foreignKey: "product_id",
    as: "product"
  } 
);



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
