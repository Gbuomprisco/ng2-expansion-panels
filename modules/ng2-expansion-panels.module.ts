import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ExpansionPanelComponent,
    ExpansionPanelTitle,
    ExpansionPanelContent,
    ExpansionPanelDescriptionToggled,
    ExpansionPanelDescriptionHidden,
    ExpansionPanelButtons
} from './components/expansion-panel';

import {
    ExpansionPanelsContainerComponent
} from './components/expansion-panels-container';

const components = [
    ExpansionPanelsContainerComponent,
    ExpansionPanelComponent,
    ExpansionPanelTitle,
    ExpansionPanelContent,
    ExpansionPanelDescriptionToggled,
    ExpansionPanelDescriptionHidden,
    ExpansionPanelButtons
];

@NgModule({
    imports: [ CommonModule ],
    declarations: components,
    exports: components,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExpansionPanelsModule {}
