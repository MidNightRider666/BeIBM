const express = require('express');
const { GetAccIndex, SendInsertSerach } = require('../Controller/SearchController');
const { validateToken} = require('../Utilities/middleware');

const SearchRoutes = express();

SearchRoutes.get('/accounts/:user_id', validateToken, GetAccIndex);
SearchRoutes.post('/accounts/post', validateToken, SendInsertSerach)


module.exports = SearchRoutes;
