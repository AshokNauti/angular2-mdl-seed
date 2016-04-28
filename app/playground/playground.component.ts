import {Component, ViewEncapsulation, Inject, ElementRef, OnInit, AfterViewInit, OnDestroy} from  'angular2/core';

declare var componentHandler: any;

@Component({
    selector: 'playground',
    templateUrl: './app/playground/playground.component.html',
    styleUrls: ['./app/playground/playground.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class PlaygroundComponent implements OnInit, AfterViewInit, OnDestroy {
    
    constructor( @Inject(ElementRef) private _elementRef: ElementRef) {
        
    }
    
    ngOnInit() {
        console.log('PlaygroundComponent - ngOnInit');
    }
    
    ngAfterViewInit() {
        console.log('PlaygroundComponent - ngAfterViewInit');
		componentHandler.upgradeElement(this._elementRef.nativeElement);
    }
    
    ngOnDestroy() {
        console.log('PlaygroundComponent - ngOnDestroy');
    }
}