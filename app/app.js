import Ember, { Application } from 'ember';
import loadInitializers from 'ember-load-initializers';
import { modulePrefix, podModulePrefix } from 'ember-get-config';
import Resolver from './resolver';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Application.extend({
    modulePrefix,
    podModulePrefix,
    Resolver,
});

loadInitializers(App, modulePrefix);

export default App;
