function isAdmin(request, response, next) {
  if (request.user.type == "admin") next();
  else response.status(401);
}

module.exports = isAdmin;
