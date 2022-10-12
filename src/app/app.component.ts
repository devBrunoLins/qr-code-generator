import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false
  qrCodeGenerated = ''

  constructor(
    private appService: AppService,
    private fb: FormBuilder
  ){}

  form = this.fb.group({
    url_content: ['', Validators.required]
  })

  onSubmit(): void {
    if(!this.form.valid) return
    this.isLoading = true
    this.appService.generateQrCode({
      url_content: this.form.value.url_content || ''
    })
    .subscribe({
      next: (data) => this.qrCodeGenerated = data,
      complete: () => this.isLoading = false
    })
  }

  clean(): void {
    this.qrCodeGenerated = ''
    this.form.reset()
  }
}
