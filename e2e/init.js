require('@babel/register');
require('@babel/polyfill');

const detox = require('detox');
const device = require('detox').device;
const config = require('../package.json').detox;
const adapter = require('detox/runners/mocha/adapter');

const isEnvSet = process.env.HOMEPASS_X_ENV !== undefined;
before(async () => {
  await detox.init(config, { launchApp: isEnvSet });
  return device.launchApp({
    permissions: { notifications: 'YES', location: 'always' },
  });
});

beforeEach(async function beforeEach() {
  await adapter.beforeEach(this);
});

afterEach(async function afterEach() {
  await adapter.afterEach(this);
});

after(async () => {
  await detox.cleanup();
});

require('@babel/register')({
  extensions: ['.js'],
  cache: true,
});
