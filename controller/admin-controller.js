const Dog = require('../model/dog')

exports.getAddDogs = (req, res, next) => {
  res.render('admin/add-dog', {
    docTitle: 'Add Dog',
  })
}
exports.getEditDogs = (req, res, next) => {
  res.render('admin/edit-dog', {
    docTitle: 'Edit Dog',
  })
}

exports.postAddDog = (req, res, next) => {
  const breed = req.body.breed;
  const imgUrl = req.body.imageUrl;
  const desc = req.body.description;
  const dog = new Dog(breed, imgUrl, desc);
  dog.save();
  console.log(breed, imgUrl, desc)
  res.redirect('/');
}