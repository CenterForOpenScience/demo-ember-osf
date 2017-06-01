import { Router } from 'ember';
import config from 'ember-get-config';

const router = Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

/* eslint-disable array-callback-return */
router.map(function () {
    this.route('login');
    this.route('me');
});
/* eslint-enable */

export default router;
