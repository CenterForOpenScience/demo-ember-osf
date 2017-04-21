import Ember from 'ember';
import config from 'ember-get-config';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

/* eslint array-callback-return:0 */
Router.map(function () {
    this.route('login');
    this.route('me');
});

export default Router;
