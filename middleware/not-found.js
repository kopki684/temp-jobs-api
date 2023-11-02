const notFound = (req, res, next) => {
  return  res.status(404).send('Route does not exist')
}

module.exports = notFound