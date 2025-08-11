import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class AboutComponent {

    public mobile = false;
    
    public test() {
        window.open("bellshill-cc\\src\\assets\\files\\Constitution.pdf", '_blank');
    }

    ngOnInit() {
        if (window.screen.width <= 450) { // 768px portrait
            this.mobile = true;
        }
    }
}