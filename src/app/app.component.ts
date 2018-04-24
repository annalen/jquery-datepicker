import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

declare var jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('datepicker') datepickerElement;

    beginn;

    ngAfterViewInit() {
        const datePicker = jQuery(this.datepickerElement.nativeElement)
            .datepicker({
                'dateFormat': 'dd.mm.yy',
                'changeMonth': true,
                'changeYear': true,
                'hideIfNoPrevNext': true,
                'showOtherMonths': true,
                'selectOtherMonths': true
            });
        jQuery(this.datepickerElement.nativeElement).datepicker('option', "{'minDate': '+0D','maxDate': '+1Y'}");
    }

    public updateDatepicker() {
        const minDate: Date = new Date();
        minDate.setMonth(this.beginn);

        jQuery(this.datepickerElement.nativeElement).datepicker('option', {
            'minDate': minDate,
        });
    }

    openDatepicker() {
        jQuery(this.datepickerElement.nativeElement).datepicker('show');
    }
}
