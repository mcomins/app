const fs = require('fs');
const yaml = require('js-yaml');
const { get, keys, map } = require('lodash');

// parse out environment variables from serverless file
const serverlessData = yaml.load(fs.readFileSync('serverless.yml', 'utf8'));
const env = get(serverlessData, 'provider.environment');

// write the environment variables to a .env file
fs.writeFileSync('./.env', map(keys(env), key => `${key}=${process.env[key]}`).join('\n'));