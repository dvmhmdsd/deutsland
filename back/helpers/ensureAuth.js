function ensureAuth(request, response, next) {
  if (request.user) next();
  else response.sendStatus(401);
}

module.exports = ensureAuth;
