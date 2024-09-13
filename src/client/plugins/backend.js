const { startsWith } = require('lodash');

const createClient = ({ context, baseUrl = '/api/v2' }) => {
	const { $axios } = context.app;

	const toUrl = ({ dataEndpoint, path }) => {
		if (startsWith(path, '/api/')) {
			return `${path}/${dataEndpoint}`;
		}

		if (startsWith(path, '/')) {
			return `${baseUrl}${path}/${dataEndpoint}`;
		}

		return `${baseUrl}/${path}/${dataEndpoint}`;
	}

	return {
		async getData({ dataEndpoint, options, path }) {
			const url = toUrl({ dataEndpoint, path });
			return $axios.$get(url, options);
		}
	}
};

export default (context, inject) => {
	const client = createClient({ context });
	inject('backend', client);
};