
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Home } from './home/home';
import { ExpansionPanelsModule } from '../modules/ng2-expansion-panels.module';

@NgModule({
    imports:      [BrowserModule, FormsModule, ReactiveFormsModule, ExpansionPanelsModule],
    bootstrap:    [Home],
    declarations: [Home]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule)
