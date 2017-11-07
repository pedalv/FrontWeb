import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit() {
  }

  getHeroes() {
      this.logger.log(`this.logger.log`);
  }

}
