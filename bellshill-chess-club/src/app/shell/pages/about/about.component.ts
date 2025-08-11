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
    
    public openFile(index: number) {
        switch(index) {
            case 0:
                window.open("../../../../assets/files/Constitution.pdf", '_blank');
                break;
            case 1:
                window.open("../../../../assets/files/Privacy Policy.pdf", '_blank');
                break;
            case 2:
                window.open("../../../../assets/files/Chess Scotland Article.pdf", '_blank');
                break;
        }
    }

    ngOnInit() {
        if (window.screen.width <= 450) { // 768px portrait
            this.mobile = true;
        }
    }
}