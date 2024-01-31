import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CardComponent]
})
export class MainComponent {



 /*  filter(): void {
    let queryObject: any = {};
    queryObject[this.filterForm.getRawValue().model.reference] = this.filterForm.getRawValue().query;
    this.router.navigate(
        [this.filterForm.getRawValue().model.route],
        { queryParams: queryObject }
    ).then(()=> {
       this.dialog.closeAll();
    });
} */


}
