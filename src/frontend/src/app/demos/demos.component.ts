import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-blah',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>Demos Go Here</p>
    `,
    styles: ``
})
export class DemosComponent {

}