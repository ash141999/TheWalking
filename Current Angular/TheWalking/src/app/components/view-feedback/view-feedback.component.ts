import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/model/feedback';
import { Order } from 'src/app/model/order';
import { ManagerService } from 'src/app/services/manager.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  feedbacks: Feedback[];

  constructor(private pserv: ManagerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listOrder();
    }
    );
  }


  listOrder(){
    this.pserv.getAllFeedback().subscribe(
      data=>{
        this.feedbacks=data;
        console.log(data);
      }
    );
  }
}