import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
    selector: 'app-dump-page',
    templateUrl: './dump-page.component.html',
    styleUrls: ['./dump-page.component.css']
})
export class DumpPageComponent implements OnInit {

    warelogixUrl : string;

    constructor(private config: ConfigurationService) { 

        this.warelogixUrl = config.getWarelogixBaseApiUrl();
    }

    ngOnInit(): void {
    }

}
