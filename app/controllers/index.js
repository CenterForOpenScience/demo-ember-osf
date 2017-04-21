import { Controller, inject } from 'ember';

export default Controller.extend({
    session: inject.service(),
});
