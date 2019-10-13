const router = require('express').Router();
let Dynasty = require('../models/dynasty.model');

router.route('/').get((req, res) => {
  Dynasty.find()
    .then(dynasty => res.json(dynasty))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newDynasty = new Dynasty({
    name
  });

  newDynasty.save()
    .then(() => res.json('Dynasty added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Dynasty.findById(req.params.id)
    .then(dynasty => res.json(dynasty))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Dynasty.findByIdAndDelete(req.params.id)
    .then(() => res.json('Dynasty deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Dynasty.findById(req.params.id)
    .then(dynasty => {
      dynasty.name = req.body.name;

      dynasty.save()
        .then(() => res.json('Dynasty updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;