module.exports = {
	// auto import vue components
	components: true,
	// set to dev when environment setting is not production
	dev: process.env.NODE_ENV !== 'production',
	// add modules
	buildModules: [
		'@nuxtjs/axios'
	],
	// add plugins (client and server)
	plugins: [
		{ src: '~/plugins/backend.js' }
	],
	// specify environment variables to make available on the client
	publicRuntimeConfig: {
		'DOMAIN_NAME': process.env.DOMAIN_NAME,
		'NODE_ENV': process.env.NODE_ENV
	},
	// customize router settingssss
	router: {
		base: '/',
		routeNameSplitter: '/'
	},
	// set the source directory
	srcDir: 'src/client',
	// enable server-side rendering
	ssr: true,
	// customize static assets handling
	static: {
		// disable prefixing the router base
		prefix: false
	},
	// disable data gathering (questionairre)
	telemetry: false
};