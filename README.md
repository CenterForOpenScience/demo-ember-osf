[![Build Status](https://travis-ci.org/abought/demo-ember-osf.svg?branch=develop)](https://travis-ci.org/abought/demo-ember-osf)
[![Coverage Status](https://coveralls.io/repos/github/abought/demo-ember-osf/badge.svg?branch=develop)](https://coveralls.io/github/abought/demo-ember-osf?branch=develop)

# Demo-ember-osf

This is a demonstration project that consumes the ember-osf Ember addon, produced by the Center for Open Science.

The focus is on basic scaffolding, incorporating opinionated best practices such as documentation tools, style guide 
checking, and CI build scripts/ code coverage metrics. 

This application is based on Ember 2.8 LTS, yarn, nvm, Sass, and YUIDoc.  It applies linters for JS and template style, 
and incorporates badges and config for health reporting services such as Travis and Coveralls.io.

In the future we may add a dependency on `ember-i18n`, depending on goals for this demonstration app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [NVM](https://github.com/creationix/nvm) or [Node.js](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/en/docs/install) (NPM replacement)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/abought/demo-ember-osf.git -o upstream` this repository
* `cd demo-ember-osf`
* `yarn install --pure-lockfile`
* `bower install`
* `ember generate ember-osf` - will generate `config/local.yml`; fill in the
 [required fields](https://github.com/CenterForOpenScience/ember-osf#configuration)

 
## Additional configuration
If you would like to log errors to Sentry, add `SENTRY_DSN` to the correct section of your `local.yml` file, and 
specify the appropriate configuration string for your server/ project. We encourage remote error logging for all COS 
projects.
 
## Running / Development

### Without Docker
* `BACKEND=stage ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### With Docker
* `docker build -t demo-ember-osf . && docker run -p 4200:4200 demo-ember-osf BACKEND=stage ./node_modules/ember-cli/bin/ember serve`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

Unit tests can be run as follows:
* `ember test`
* `ember test --server`

To run all tests required for CI, use:
* `yarn test`

Testing with docker:
* `docker build -t demo-ember-osf . && docker run demo-ember-osf`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Tips: where to go from here
There are several packages that can enhance your large-scale applications, but are not included in this scaffold:
- `ember-i18n` (may be added in the future)

## Future features to add to this app
In the future, we will add:
- Demonstrate nested route / paginated requests according to ember best practices
- Improve a11y testing (currently runs during acceptance tests, but does not cause tests to fail; 
  see [known pending issue](https://github.com/ember-a11y/ember-a11y-testing/issues/47))
