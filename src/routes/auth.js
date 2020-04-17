var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

function isCurator(req) {
  if (req.payload && req.payload.roles) {
    var roles = req.payload.roles
    return roles && (roles.includes('curator') || roles.includes('admin'))
  }
  return false
}

function isUser(req) {
  if (req.payload && req.payload.roles) {
    var roles = req.payload.roles
    return roles && (roles.includes('user'))
  }
  return false
}


function authenticatedCurator(req, res, next) {
  if (isCurator(req)) {
    next()
  } else {
    return res.status(403).json({
      status: 403,
      message: 'A permissão de gestor, elo ou administrador é necessária para acessar este recurso.'
    })
  }
}

function authenticatedUser(req, res, next) {
  if (isUser(req)) {
    next()
  } else {
    return res.status(403).json({
      status: 403,
      message: 'A permissão de usuário é necessária para acessar este recurso.'
    })
  }
}

var auth = {
  authenticated: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  curator: [jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }), authenticatedCurator],
  user: [jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }), authenticatedUser],
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  }),
  isCurator: isCurator,
  isUser: isUser
};

module.exports = auth;
