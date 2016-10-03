import { Directive } from '@angular/core';

@Directive({selector: 'expansion-panel-title'})
export class ExpansionPanelTitle { }

@Directive({selector: 'expansion-panel-description-toggled'})
export class ExpansionPanelDescriptionToggled { }

@Directive({selector: 'expansion-panel-description-hidden'})
export class ExpansionPanelDescriptionHidden { }

@Directive({selector: 'expansion-panel-content'})
export class ExpansionPanelContent { }

@Directive({selector: 'expansion-panel-buttons'})
export class ExpansionPanelButtons { }
