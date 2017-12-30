
export function getUserDetails(req, res, next) {
    res.send('hello ' + req.params.userId);
    next();
  }