import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = false
  qrCodeGenerated = ''

  constructor(
    private appService: AppService,
    private fb: FormBuilder
  ){}

  form = this.fb.group({
    url_content: ['', Validators.required],
    color: ['']
  })

  onSubmit(): void {
    if(!this.form.valid) return
    this.isLoading = true
    this.appService.generateQrCode({
      url_content: this.form.value.url_content || '',
      color: this.form.value.color?.replace(/#/g, '') || '000000'
    }).subscribe({
      next: (data) => this.qrCodeGenerated = data,
      complete: () => this.isLoading = false
    })
  }

  clean(): void {
    this.qrCodeGenerated = ''
    this.form.reset()
  }
}
