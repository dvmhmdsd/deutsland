function isAdmin(request, response, next) {
  if (request.user.type == "admin") next();
  else response.status(403);
}

module.exports = isAdmin;
