import { Component } from "@angular/core";

@Component({
    selector: 'announcements',
    templateUrl: './announcements.component.html',
    styleUrls: ['./announcements.component.css'],
    standalone: true
})
export class AnnouncementsComponent {
    
    public get message(): string {
        return "The club will reopen on the 1st September. AGM 15th";
    }
}