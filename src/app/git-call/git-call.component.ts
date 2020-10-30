import { Component, OnInit, Input } from '@angular/core';
import { GitUserService } from '../git-users.service';

@Component({
  selector: 'app-git-call',
  templateUrl: './git-call.component.html',
  styleUrls: ['./git-call.component.scss'],
})
export class GitCallComponent implements OnInit {
  constructor(private gitUserService: GitUserService) {}
  @Input() user: string[];
  getUsers(): void {
    this.gitUserService.getData().subscribe((data) => {
      this.user = data;
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
