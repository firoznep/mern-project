const notFound = (req, res, next) => {
  const errr = new Error(`NOT FOUND... ${req.originalUrl}`);
  res.status(404);
  next(errr);
};

const errorHandle = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? "500" : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandle };
