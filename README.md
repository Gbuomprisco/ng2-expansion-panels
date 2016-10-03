# Ng2 Expansion Panels [![Build Status](https://travis-ci.org/Gbuomprisco/ng2-expansion-panels.svg?branch=master)](https://travis-ci.org/Gbuomprisco/ng2-expansion-panels)

This is a component for Angular 2. Design is inspired by Material Design's component Expansion Panels.

**Development is in very early stage**

## Demo
Check out the live demo (with source code) here [http://www.webpackbin.com/EJOlX3j6Z](http://www.webpackbin.com/EJOlX3j6Z).

## Installing

    npm install ng2-expansion-panels --save

## Configuration

Ensure you import the module:

```javascript
import { ExpansionPanelsModule } from 'ng2-expansion-panels';

// please notice this is the new way of telling a Component
// to import another component...no more directives[]
@NgModule({
   imports: [ExpansionPanelsModule]
})
export class MyModule {}
```

## API
- **`onOpen`** - [**`?onOpen(panel: ExpansionPanelComponent)`**] - event fired when a panel is opened
- **`onClose`** - [**`?onClose(panel: ExpansionPanelComponent)`**] - event fired when a panel is closed
- **`onSubmit`** - [**`?onSubmit()`**] - event fired when `submit` is called
- **`onCancel`** - [**`?onCancel()`**] - event fired when `cancel` is called

## Examples
### Basic Example

```html
<expansion-panels-container>
    <expansion-panel>
        <expansion-panel-title>
            Title
        </expansion-panel-title>
    
        <expansion-panel-description-hidden>
            Description when hidden
        </expansion-panel-description-hidden>
    
        <expansion-panel-description-toggled>
            Description when toggled
        </expansion-panel-description-toggled>
    
        <expansion-panel-content>
            Content
        </expansion-panel-content>
    </expansion-panel>
    
    </expansion-panel>...</expansion-panel>
    </expansion-panel>...</expansion-panel>
    </expansion-panel>...</expansion-panel>
</expansion-panels-container>
```

### Add Buttons to a panel

Every panel has already defined two methods, `cancel` and `submit`. In order to bind those
to the buttons we define, we need to create a reference to the panel. In this example, I called it `#panel`
and them I'm calling panel.cancel() and panel.submit(). 

It is possible to listen to these events with the outputs `onCancel` and `onSubmit`.

```html
<expansion-panels-container>
    <expansion-panel (onCancel)='resetForm()' (onSubmit)='saveForm()'>
        <expansion-panel-title>
            Title
        </expansion-panel-title>
    
        <expansion-panel-description-hidden>
            Description when hidden
        </expansion-panel-description-hidden>
    
        <expansion-panel-description-toggled>
            Description when toggled
        </expansion-panel-description-toggled>
    
        <expansion-panel-content>
            Content
        </expansion-panel-content>
        
        <expansion-panel-buttons>
            <button (click)='pancel.cancel()'>Cancel</button>
            <button (click)='pancel.submit()'>Submit</button>
        </expansion-panel-buttons>
    </expansion-panel>

</expansion-panels-container>
```
