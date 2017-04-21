import { Route, inject } from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

/*
  Demonstration route that requires user to be logged in, and makes an authenticated request for
  private data
 */
// TODO: In future we may wish to switch to CasAuthenticatedRouteMixin, though this one might not
// yet work as intended
export default Route.extend(AuthenticatedRouteMixin, {
    currentUser: inject.service(),

    model() {
        return this.get('currentUser').load();
    },
});
