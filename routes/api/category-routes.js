const router = require('express').Router();
const { Category, Product } = require('../../models');



// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {

  try {

    const categories = await Category.findAll(
      {
        include: { model: Product, as: 'products' }
      }
    );

    res.status(200).json(categories);

  } catch (err) {

    res.status(500).json(err);

  };

});



// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {

  try {
    const category = await Category.findByPk(req.params.id, 

      {
        include: { model: Product, as: "products" }
      }

    );

    if (!category) {

      res.status(404).json(
        { message: 'No category found with this id!' }
      );

      return;
    }

    res.status(200).json(category);

  } catch (err) {

    res.status(500).json(err);

  };

});



// create a new category
router.post('/', (req, res) => {

  try {

    const newCategory = await Category.create(req.body);

    res.status(200).json(newCategory);

  } catch (err) {

    res.status(400).json(err);

  };

});



// update a category by its `id` value
router.put('/:id', (req, res) => {

  try {
    
    const category = await Category.update( req.body, {

      where: {
        id: req.params.id
      }

    });

    if (!category) {

      res.status(404).json({ message: "This id number has no related category" });

      return;

    }

    res.status(200).json(category);

  } catch (err) {

    res.status(500).json(err);

  };

});



// delete a category by its `id` value
router.delete('/:id', (req, res) => {

  try {

    const category = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!category) {
      res.status(404).json(
        { message: "This id number has no related category" }
      );

      return;

    }

    res.status(200).json(category);

  } catch (err) {

    res.status(500).json(err);

  };

});

module.exports = router;
