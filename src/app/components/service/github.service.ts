import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repos } from '../models/repos.model';
import { CandidateInterface } from '../models/candidato.model';

/**
 * Servicio mediante el cual se accede a la Api de Github,para obtener la información
 * de un usuario y de sus repositorios mediante los métodos getUser() y getRepos().
 * Adicionalmente permite guardar la información de un candidato en una cookie y en localStorege
 * para luego mostrarle en la cabecera de la pagina Web mediante un alert.
 */

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  candidate: CandidateInterface;

  constructor(private http: HttpClient) { }
  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get<User>(url);
    }

  getRepos(userName: string): Observable<Repos> {
    const url = `https://api.github.com/users/${userName}/repos`;
    return this.http.get<Repos>(url);
    }

    saveInfo(candidate: CandidateInterface) {
      // Save in Cookies
      document.cookie = candidate.name + candidate.lastName + candidate.id + candidate.birthDate + candidate.email + candidate.userGithub;
      // Save in localStorage
      localStorage.setItem('Name', candidate.name);
      localStorage.setItem('Lastname', candidate.lastName);
      localStorage.setItem('Id', candidate.id);
      localStorage.setItem('BirtDate', candidate.birthDate);
      localStorage.setItem('Email', candidate.email);
      localStorage.setItem('GithubUser', candidate.userGithub);
    }

    getInfo() {
      const name = localStorage.getItem('Name');
      const lastName = localStorage.getItem('Lastname');
      const id = localStorage.getItem('Id');
      const birtDate = localStorage.getItem('BirtDate');
      const githubUser = localStorage.getItem('GithubUser');
      console.log('Este es el nombre guardado en la cookie' + name);
      alert('Name:' + name + '\nLastname:' + lastName + '\nIdentification:' + id + '\nBirt Date:'
       + birtDate + '\nGithub User:' + githubUser);
    }
  }
