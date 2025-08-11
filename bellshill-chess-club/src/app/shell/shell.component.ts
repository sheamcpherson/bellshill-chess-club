import { Component } from "@angular/core";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterOutlet } from "@angular/router";
import { AnnouncementsComponent } from "./announcements/announcements.component";
import { InformationComponent } from "./information/information.component";

@Component({
    selector: 'shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.css'],
    imports: [RouterOutlet, NavigationComponent, AnnouncementsComponent,
        InformationComponent
    ],
    standalone: true
})
export class ShellComponent {
    
}