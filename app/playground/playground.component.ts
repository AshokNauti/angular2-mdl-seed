import {Component, OnInit, AfterViewInit, OnDestroy} from  'angular2/core';

@Component({
    selector: 'playground',
    templateUrl: './app/playground/playground.component.html',
    styleUrls: ['./app/playground/playground.component.css']
})
export class PlaygroundComponent implements OnInit, AfterViewInit, OnDestroy {
    
    constructor() {
        
    }
    
    ngOnInit() {
        console.log('PlaygroundComponent - ngOnInit');
    }
    
    ngAfterViewInit() {
        console.log('PlaygroundComponent - ngAfterViewInit');
    }
    
    ngOnDestroy() {
        console.log('PlaygroundComponent - ngOnDestroy');
    }
}