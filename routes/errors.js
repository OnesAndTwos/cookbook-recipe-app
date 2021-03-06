export function NotFound(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
}

export function Error(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message;

  res.locals.message = message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(status).json({ status, message });
}