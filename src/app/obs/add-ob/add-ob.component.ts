import { Component, OnInit } from '@angular/core';
import { Ob } from '../../shared/models/ob.model';
import { ObsService } from '../../shared/services/obs.service'
@Component({
  selector: 'app-add-ob',
  templateUrl: 'add-ob.component.html',
  styleUrls: ['add-ob.component.css'],
  providers : [ ObsService ]
})
export class AddObComponent implements OnInit {

  constructor(
    private obs:ObsService
  ) { }

  ngOnInit() {
  }

  create(){
    let ob:Ob = { 
      name: 'Carmel'
    };

    this.obs.add(ob);
  }

}
