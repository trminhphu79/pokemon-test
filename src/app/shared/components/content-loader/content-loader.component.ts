import { Component, Input } from '@angular/core';

@Component({
    selector: 'content-loader',
    templateUrl: './content-loader.component.html',
    styleUrls: ['./content-loader.component.scss'],
})
export class ContentLoaderComponent {
    @Input() itemsLoading: any[] = new Array(20)
}
