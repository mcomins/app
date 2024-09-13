const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
const router = require('express').Router();
const expressAsync = require('../../middleware/express-async');

const getParameter = async ({ name, withDecryption }) => {
  const client = new SSMClient();
  const input = {
    Name: name,
    WithDecryption: withDecryption,
  };
  const command = new GetParameterCommand(input);

  return client.send(command);
};

router.get('/', expressAsync(async (req, res) => {
  const isHealthy = await getParameter({
    name: 'health-check-enabled',
    withDecryption: false
  });

  res.json({ status: isHealthy ? 'Healthy' : 'Unhealthy' });
}));

module.exports = router;