import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

import { ExpansionPanelsContainerComponent } from '../expansion-panels-container';

@Component({
    selector: 'expansion-panel',
    styleUrls: [ './expansion-panel.style.scss' ],
    templateUrl: './expansion-panel.template.html'
})
export class ExpansionPanelComponent {
    // outputs
    @Output() private onOpen: EventEmitter<ExpansionPanelComponent> = new EventEmitter();
    @Output() private onClose: EventEmitter<ExpansionPanelComponent> = new EventEmitter();
    @Output() private onCancel: EventEmitter<any> = new EventEmitter();
    @Output() private onSubmit: EventEmitter<any> = new EventEmitter();

    constructor(private container: ExpansionPanelsContainerComponent) {}

    /**
     * @name toggle
     */
    public toggle(): void {
        (this.isToggled) ? this.unselect() : this.select();
    }

    /**
     * @name isToggled
     * @returns {boolean}
     */
    public get isToggled(): boolean {
        return this.container.selectedPanel === this;
    }

    /**
     * @name submit
     */
    public submit(): void {
        this.unselect();
        this.onSubmit.emit();
    }

    /**
     * @name cancel
     */
    public cancel(): void {
        this.unselect();
        this.onCancel.emit();
    }

    /**
     * @name select
     */
    private select(): void {
        this.container.selectedPanel = this;
        this.onOpen.emit(this);
    }

    /**
     * @name unselect
     */
    private unselect(): void {
        this.container.selectedPanel = undefined;
        this.onClose.emit(this);
    }
}
