import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class NavigationComponent {

    public menuOpen = false;
    public mobile = false;
    
    public contact() {
        window.open('mailto:bellshillchessclub@gmail.com?cc=sheamcpherson@outlook.com,truhoover@gmail.com?');
    }

    public menuToggle() {
        this.menuOpen = !this.menuOpen;
    }

    public close() {
        this.menuOpen = false;
    }

    ngOnInit() {
        if (window.screen.width <= 450) { // 768px portrait
            this.mobile = true;
            this.menuOpen = true;
        }
    }
}