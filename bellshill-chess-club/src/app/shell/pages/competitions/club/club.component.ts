import { Component } from "@angular/core";

@Component({
    selector: 'club',
    templateUrl: './club.component.html',
    styleUrls: ['./club.component.css']
})
export class ClubComponent {
    
    public selectedIndex = 1;

    public captain(): string {
        switch(this.selectedIndex) {
            case 1:
                return "David Deary";
            case 2:
                return "Tom Mackie";
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