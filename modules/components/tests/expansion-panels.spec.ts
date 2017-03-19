import {
    ComponentFixture,
    async,
    TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

import {
    TestModule,
    TestComponent
} from './testing-helpers.spec';

import { ExpansionPanelComponent } from '../expansion-panel';

describe('TagInputComponent', () => {
    let fixture: ComponentFixture<TestComponent>,
        panel,
        secondPanel;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [BrowserModule, TestModule]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    function getComponent(_fixture, nth) {
        _fixture.detectChanges();

        return _fixture.debugElement
            .queryAll(By.directive(ExpansionPanelComponent))[nth].componentInstance;
    }

    describe('Basic behaviours', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            panel = getComponent(fixture, 0);
            secondPanel = getComponent(fixture, 1);
        });

        it('should always have a container', () => {
            expect(panel).toBeDefined();
            expect(panel.container).toBeDefined();
            expect(panel.isToggled).toBe(false);
        });
    });

    describe('Toggling', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            panel = getComponent(fixture, 0);
            secondPanel = getComponent(fixture, 1);
        });

        it('should toggle the first panel', () => {
            panel.toggle();
            expect(panel.isToggled).toBe(true);
        });

        it('should toggle the second panel after the first', () => {
            panel.toggle();
            expect(panel.isToggled).toBe(true);

            secondPanel.toggle();

            expect(panel.isToggled).not.toBe(true);
            expect(secondPanel.isToggled).toBe(true);
        });

        it('should emit events when a panel is toggled', () => {
            const onOpen = spyOn(fixture.componentInstance, 'onOpen');
            const onClose = spyOn(fixture.componentInstance, 'onClose');

            // open panel
            panel.toggle();
            expect(onOpen).toHaveBeenCalled();

            // close panel
            panel.toggle();
            expect(onClose).toHaveBeenCalled();
        });
    });
});
