import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'gcl',
    templateUrl: './glasgow.component.html',
    styleUrls: ['./glasgow.component.css'],
    imports: [CommonModule],
    standalone: true

})
export class GlasgowComponent {

    public selectedIndex = 1;

    public captain(): string {
        switch(this.selectedIndex) {
            case 1:
                return "Shea McPherson";
            case 2:
                return "Tom Mackie";
            default:
                return ""
        }
    }

    public email(): string {
        switch(this.selectedIndex) {
            case 1:
                return "sheamcpherson@outlook.com";
            case 2:
                return ""
            default:
                return ""
        }
    }
}