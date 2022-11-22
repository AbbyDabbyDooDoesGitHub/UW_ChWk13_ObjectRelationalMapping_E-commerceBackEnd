const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



// The `/api/tags` endpoint

// Find all tags and include their associated Product data
router.get('/', async (req, res) => {

  try {

    const tags = await Tag.findAll(
      {
        include: { 
          model: Product, 
          through: ProductTag, 
          as: "products" 
        }
      }
    );

    res.status(200).json(tags);

  } catch (err) {

    res.status(500).json(err);

  };

});



// Find a single tag by its `id` 
// include it's associated Product data
router.get('/:id', async (req, res) => {

  try {

    const tag = await Tag.findByPk(
      req.params.id, {
        include: { 
          model: Product, 
          through: ProductTag, 
          as: "products" 
        }
      }
    );

    if (!tag) {

      res.status(404).json(
        {message: "This id number has no tag"}
      );

      return;

    }

    res.status(200).json(tag);

  } catch (err) {

    res.status(500).json(err);

  };

});



// Create a new tag
router.post('/', async (req, res) => {

  try {

    const newTag = await Tag.create(req.body);

    res.status(200).json(newTag);

  } catch (err) {

    res.status(400).json(err);

  };

});



// Update a tag's name by its `id` value
router.put('/:id', async (req, res) => {

  try {

    const tag = await Tag.update( req.body, 
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!tag) {

      res.status(404).json({ message: "This id number has no tag" });

      return;

    }

    res.status(200).json(tag);

  } catch (err) {

    res.status(500).json(err);

  };
  
});



// Delete on tag by its `id` value
router.delete('/:id', async (req, res) => {

  try {

    const tag = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!tag) {

      res.status(404).json({ message: "This id number has no tag" });

      return;

    }

    res.status(200).json(tag);

  } catch (err) {

    res.status(500).json(err);

  };

});



module.exports = router;
