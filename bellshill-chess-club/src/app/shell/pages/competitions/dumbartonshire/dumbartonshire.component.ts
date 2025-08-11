import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'ddca',
    templateUrl: './dumbartonshire.component.html',
    styleUrls: ['./dumbartonshire.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class DumbartonshireComponent {
    
    
    public selectedIndex = 1;

    public captain(): string {
        switch(this.selectedIndex) {
            case 1:
                return "Shea McPherson";
            case 2:
                return "";
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