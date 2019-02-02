import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../models/user.model';
import { Repos } from '../models/repos.model';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { GithubService } from '../service/github.service';
import { EMPTY } from 'rxjs';

/**
 * Clase en la cual de desarrollaron todas las funcionalidades
 * para consultar tanto un usuario como los repositorios
 * asociados a ese usuario. Además desarrolla el filtro
 * En el componente html se realiza la maquetación de la tabla
 * y la paginación de la misma.
 */

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
  pageActual = 1;

  ngOnInit() {
    this.searchUser();
    this.searchRepos();
  }
  /**
   * Este metodo permite filtrar un usuario a partir del ingreso de 3 caracteres o más,
   * con un tiempo de 1 milisegundo, en caso de que se genere un error es capturado para
   * mostrar el componente not found en el html, de lo contratio mediante el método getUser()
   * trae la información del usuario desde la Api de github
   */
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

/**
 * Mediante este método, una vez se ingrese el nombre de un usuario, por medio del método getRepos()
 * se obtienen desde la Api de Github los repositorios que dicho usuario tiene asociados a su cuenta
 * y se puede extraer todo la información que sea necesaria de ellos.
 */

  searchRepos() {
    this.findControl.valueChanges
      .pipe(filter(value => value.length > 3),
        debounceTime(1000),
        switchMap(value =>
          this.githubService.getRepos(value).pipe(
            catchError(err => {
              this.user = null;
              this.error = true;
              return EMPTY;
            })))
      ).subscribe(repos => {
        this.user.repositories = repos;
        this.error = false;
        console.log('este es el nombre de un repo' + this.user.repositories.name);
      });
  }

  /**
   * Método que permite filtrar los repositorios de un usuario contenidos en una tabla
   * y trae las coincidencias una vez se hayan escrito más de 3 caracteres
   *
   */

  applyFilter() {
    this.findControl.valueChanges
    .pipe(filter(value => value.length > 3),
      debounceTime(1000));
  }

  /**
   * Método incompleto.
   * Se pretende hacer el ordenamiento de la tabla por cada uno de los atributos de su cabecera
   */
  trackById(index, repos: Repos) {
    return repos.name;

  }
}
