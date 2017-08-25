import { BadInput } from './../common/bad-input';
import { NotFundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//really specific module from reactive extensions 
import { Observable } from 'rxjs/Rx';  //reactive extension
import 'rxjs/add/operator/catch'; //reactive extension
import 'rxjs/add/operator/throw'; //reactive extension
import 'rxjs/add/operator/map'; //reactive extension

@Injectable()
export class DataService {
  
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handlerError);
  }

  create(resource) {    
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handlerError);
  }

  update(resource) {    
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handlerError);
  }

  delete(id) {   
    return this.http.delete(this.url+ '/' + id)
    .map(response => response.json())
    .catch(this.handlerError);
  }

  private handlerError(error: Response) {

    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)    
      return Observable.throw(new NotFundError(error));
    
    return Observable.throw(new AppError(error));    
  }
}
