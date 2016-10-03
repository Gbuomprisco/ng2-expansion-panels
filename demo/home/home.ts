import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: require('./home.html'),
    styles: [
        require('./home.scss').toString()
    ]
})
export class Home {
    constructor() {}

    public form = {
        name: '',
        hobbies: []
    };
}
