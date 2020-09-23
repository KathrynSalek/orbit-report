import { Component, OnInit, Input } from '@angular/core'; //Update the import statements in orbit-list.component.ts to access the Input class.
import { Satellite } from '../satellite'; // Update the import statements in orbit-list.component.ts to access the Satellite class.

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  constructor() { }
  @Input() satellites: Satellite[]; // The @Input() is special Angular syntax that declares that satellites is a property that will be passed into the component via <app-orbit-list [satellites]="sourceList"></app-orbit-list>.

  ngOnInit() {
  }
  sort(column: string): void { // Add a sort method to the OrbitListComponent class.
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }
}
