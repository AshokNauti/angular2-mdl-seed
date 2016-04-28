import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {APP_BASE_HREF /*LocationStrategy, HashLocationStrategy*/} from 'angular2/platform/common';

// Adds all operators to Observables and important for Promises
import 'rxjs/Rx';

import {App} from './app.component';

bootstrap(
    App,
    [
        HTTP_PROVIDERS,
        HTTP_BINDINGS,
        ROUTER_PROVIDERS,
        //provide(LocationStrategy, { useClass: HashLocationStrategy }),
        provide(APP_BASE_HREF, { useValue: '/' })
    ]
).catch(
    err => console.error(err)
);
