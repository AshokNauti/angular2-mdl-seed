import {Component} from  'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PlaygroundComponent} from './playground/playground.component';

@Component({
    selector: 'main-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Playground', component: PlaygroundComponent, useAsDefault: true }
])
export class App{}