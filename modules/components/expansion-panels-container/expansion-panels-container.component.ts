import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';

@Component({
    selector: 'expansion-panels-container',
    styleUrls: [ './expansion-panels-container.style.scss' ] ,
    templateUrl: './expansion-panels-container.template.html'
})
export class ExpansionPanelsContainerComponent {
    public selectedPanel: ExpansionPanelComponent;
}

