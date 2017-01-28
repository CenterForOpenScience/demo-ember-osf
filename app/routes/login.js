import Ember from 'ember';

import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import OsfTokenLoginRouteMixin from 'ember-osf/mixins/osf-token-login-route';

// Sample login page. After successful login, user will be taken to the site homepage
export default Ember.Route.extend(UnauthenticatedRouteMixin, OsfTokenLoginRouteMixin, {
    beforeModel() {
        // TODO: Possible bug situation: since error isn't reraised in mixin, this may send user to homepage even if log fails
        const res = this._super();
        if (res) {
            // Slightly inelegant hack: If yanking to another page, there will be no return value from super. If auth succeeded, transition to home.
            res.then(() => this.transitionTo('index'));
        }
    }
});
