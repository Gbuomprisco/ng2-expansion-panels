import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { ExpansionPanelsModule } from '../../ng2-expansion-panels.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'test',
    template: require('./template.html')
})
export class TestComponent {
    onOpen() {

    }
    onClose() {

    }
}

const COMPONENTS = [
    TestComponent
];

@NgModule({
    imports: [CommonModule, FormsModule, ExpansionPanelsModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class TestModule {}
