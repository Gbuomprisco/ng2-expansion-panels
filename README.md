# Ng2 Expansion Panels [![Build Status](https://travis-ci.org/Gbuomprisco/ng2-expansion-panels.svg?branch=master)](https://travis-ci.org/Gbuomprisco/ng2-expansion-panels)

This is a component for Angular 2. Design is inspired by Material Design's component Expansion Panels.

**Development is in very early stage**

## Demo

TODO

## Installing
Sorry, not on NPM yet

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
TODO

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
