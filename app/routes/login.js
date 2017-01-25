import Ember from 'ember';

import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import OsfTokenLoginRouteMixin from 'ember-osf/mixins/osf-token-login-route';

// Sample login page. After successful login, user will be taken to the site homepage
export default Ember.Route.extend(UnauthenticatedRouteMixin, OsfTokenLoginRouteMixin);
