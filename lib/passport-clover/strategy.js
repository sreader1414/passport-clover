/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy;


/**
 * `Strategy` constructor.
 *
 * The Infusionsoft authentication strategy authenticates requests by delegating to
 * Infusionsoft using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `client_id`      your Clover application's client_id
 *   - `redirect_uri`   URI to which Clover will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new CloverStrategy({
 *         client_id: '1234567890123',
 *         redirect_uri: 'https://www.example.com/auth/Clover/callback'
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://sandbox.dev.clover.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://sandbox.dev.clover.com/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'Clover';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;