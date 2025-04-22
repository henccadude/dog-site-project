exports.getDogs = (req, res, next) => {
  res.render('dogs/dogs', {
    docTitle: 'Dogs'
  });
}
exports.getDogsReview = (req, res, next) => {
  res.render('dogs/dogs-review', {
    docTitle: 'Review'
  });
}
exports.getIndex = (req, res, next) => {
  res.render('dogs/dogs', {
    docTitle: 'Index'
  });
}