import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../models/user.model';
import { Repos } from '../models/repos.model';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { GithubService } from '../service/github.service';
import { EMPTY } from 'rxjs';



@Component({
  selector: 'app-consul-repos',
  templateUrl: './consul-repos.component.html',
  styleUrls: ['./consul-repos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsulReposComponent implements OnInit {

  constructor(private githubService: GithubService) { }
  findControl = new FormControl();
  error = false;
  user: User = null;

  ngOnInit() {
    this.searchUser();
    this.searchRepos();
  }
  searchUser() {
    this.findControl.valueChanges
      .pipe(filter(value => value.length > 3),
        debounceTime(1000),
        switchMap(value =>
          this.githubService.getUser(value).pipe(
            catchError(err => {
              this.user = null;
              this.error = true;
              return EMPTY;
            })))
      ).subscribe(user => {
        this.user = user;
        this.error = false;
        console.log('este es el ussuario' + this.user.login);
      });
  }

  searchRepos() {
    this.findControl.valueChanges
      .pipe(filter(value => value.length > 3),
        debounceTime(1000),
        switchMap(value =>
          this.githubService.getRepos(value).pipe(
            catchError(err => {
              this.user = null;
              this.user.repositories = null;
              this.error = true;
              return EMPTY;
            })))
      ).subscribe(repos => {
        this.user.repositories = repos;
        this.error = false;
        console.log('este es el nombre de un repo' + this.user.repositories.name);
      });
  }

  applyFilter() {
    this.findControl.valueChanges
    .pipe(filter(value => value.length > 3),
      debounceTime(1000));
  }
}
