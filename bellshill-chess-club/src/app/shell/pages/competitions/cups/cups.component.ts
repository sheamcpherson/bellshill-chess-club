import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'cups',
    templateUrl: './cups.component.html',
    styleUrls: ['./cups.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class CupsComponent {
    
    public selectedIndex = 1;
}