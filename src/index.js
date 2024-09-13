const consola = require('consola');
const express = require('express');
const { Nuxt } = require('nuxt');
const http = require('serverless-http');

const app = express();
const config = require('../nuxt.config');

const nuxt = new Nuxt(config);

// Set up and apply middleware
app.use('/robots.txt', require('./routes/robots'));
app.use('/health', require('./routes/health'));
app.use((req, res, next) => {
	nuxt.ready().then(() => nuxt.render(req, res, next));
})

// App Lambda
module.exports.handler = http(app, { binary: ['font/*, image/*'] });

