import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('sendSelectedFeatureName') sendSelectedFeatureName = new EventEmitter();
  asdf :boolean = true;
  currentSelected : string ='recipe';
  constructor() { }
  ngOnInit(): void {
  }
  selectedFeature(feat : any){
    // console.log('asdf', feat)
    // if(feat === 'recipe'){
    //   this.asdf= true
    // }else{
    //   this.asdf = false
    // }
    this.currentSelected = feat;
    this.sendSelectedFeatureName.emit(feat);
  }

}
