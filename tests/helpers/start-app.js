import { run } from 'ember';
import Application from '../../app';
import { APP } from '../../config/environment';

export default function startApp(attrs) {
    const attributes = Object.assign({}, APP, attrs);
    let application;

    run(() => {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
    });

    return application;
}
