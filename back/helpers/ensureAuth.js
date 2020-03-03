function ensureAuth(request, response, next) {
  if (request.isAuthenticated()) next();
  else response.sendStatus(401);
}

module.exports = ensureAuth;
