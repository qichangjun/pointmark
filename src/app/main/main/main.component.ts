import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {  
  point : number = 71.45

  constructor(
    private router: Router
  ) {}
  
  ngOnInit() {
  }

  changeNode(node){    
    if (node.data.type!= 'item'){
      this.router.navigate(['main/homePage'], { queryParams: {id:node.data.id} });
      return 
    }
    
    this.router.navigate([], { queryParams: {id:node.data.id} });
  }
}
