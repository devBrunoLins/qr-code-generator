import { Injectable } from "@angular/core"
import { delay, Observable, of } from "rxjs"
import { IGenerateQrCodeParam } from "./params/generateQrCode.param"

@Injectable()
export class AppService {

    generateQrCode(data: IGenerateQrCodeParam): Observable<string> {
        let { url_content, color } = data
        return of(`https://api.qrserver.com/v1/create-qr-code?size=300x300&data=${url_content}&qzone=1&color=${color}`).pipe(delay(1000))
    } 
}