import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor{
  constructor(private token: TokenStorageService) {}

interceptint

}
