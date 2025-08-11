import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'lcl',
    templateUrl: './lanarkshire.component.html',
    styleUrls: ['./lanarkshire.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class LanarkshireComponent {

    public selectedIndex = 1;

    public captain(): string {
        switch(this.selectedIndex) {
            case 1:
                return "Hamish Glen";
            case 2:
                return "Kevin Campbell";
            default:
                return ""
        }
    }

    public email(): string {
        switch(this.selectedIndex) {
            case 1:
                return "";
            case 2:
                return ""
            default:
                return ""
        }
    }
}