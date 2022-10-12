import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { delay, Observable, of } from "rxjs";
import { IGenerateQrCodeParam } from "./params/generateQrCode.param";
import { UrlTree } from "@angular/router";

@Injectable()
export class AppService {

    constructor(
        private _http: HttpClient
    ){}

    generateQrCode(data: IGenerateQrCodeParam): Observable<string> {
        let { url_content } = data
        return of(`https://api.qrserver.com/v1/create-qr-code?size=300x300&data=${url_content}&qzone=1`).pipe(delay(1000))
    } 
}