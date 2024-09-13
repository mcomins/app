const consola = require('consola');
const express = require('express');
const { Nuxt, Builder } = require('nuxt');

const app = express();
const config = require('../nuxt.config');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';
const STAGE = process.env.STAGE || 'stg';
const BFF_ORIGIN = `https://app-bff-${STAGE}.matthewcomins.com`;

const startLocalServer = async () => {
	// Initialize nuxt
	const nuxt = new Nuxt(config);
	const nuxtBuilder = new Builder(nuxt);
	await nuxtBuilder.build();

	// Set the port
	app.set('port', PORT);

	// Set up and apply middleware
	app.use('/robots.txt', require('./routes/robots'));
	app.use('/health', require('./routes/health'));

	// Render thhe application
	app.use(nuxt.render);

	// Open a connection
	app.listen(PORT, HOST);
};

consola.ready({
	message: `Server listening at http://${HOST}:${PORT}`,
	badge: true
});

// Start the local server
startLocalServer();

