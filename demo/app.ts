import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TagInputModule } from 'ng2-tag-input';
import { Home } from './home/home';
import { ExpansionPanelsModule } from '../modules/ng2-expansion-panels.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        TagInputModule,
        ExpansionPanelsModule
    ],
    bootstrap: [ Home ],
    declarations: [ Home ]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);

