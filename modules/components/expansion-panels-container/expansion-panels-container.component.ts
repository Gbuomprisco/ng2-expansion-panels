import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';

@Component({
    selector: 'expansion-panels-container',
    styles: [ require('./expansion-panels-container.style.scss').toString() ] ,
    template: require('./expansion-panels-container.template.html')
})
export class ExpansionPanelsContainerComponent {
    public selectedPanel: ExpansionPanelComponent;
}

