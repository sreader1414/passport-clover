passport-clover
==============

[Passport](https://github.com/jaredhanson/passport) Authentication Strategy for [Clover's API](https://docs.clover.com/build/oauth-2-0/) using OAuth2

## Installation

    $ npm install passport-clover

## Usage

#### Authorization (the much more likely usecase)


#### Authentication Configuration Strategy
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


#### Authenticate Requests


## Credits
  - [Andrew Bliss](https://github.com/andrewgbliss)

## Thanks
  - [Jared Hanson](https://github.com/jaredhanson)