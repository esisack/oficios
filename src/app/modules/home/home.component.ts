import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessTask } from 'src/app/model/business-task';
import { BusinessTaskService } from 'src/app/services/business-task.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businessTask: BusinessTask
  businessTasks: BusinessTask[] = []
  total: number;

  currentTask: string
  key: string
  object: object

  constructor(
    private service: BusinessTaskService,
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title = "Home"
    this.getTasks()
  }

  getTasks() {
    this.service.getTasks().subscribe(data => {
      this.businessTasks = data
      console.log(data)
    })
  }

  onSelect(bt: BusinessTask) {
    this.service.currentTask = bt
    this.service.getProcessVariables(bt.processInstanceId).subscribe(data => {
      let id = data.idwu
      this.router.navigate(['/detail', id])
    })
  }

}
