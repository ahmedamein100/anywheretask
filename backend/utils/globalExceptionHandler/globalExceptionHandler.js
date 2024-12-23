const globalExcpetionHnadler = (err, req, res, next) => {
  return res
    .status(err.statusCode)
    .json({ message: err.message, details: err.details });
};

module.exports = globalExcpetionHnadler;
