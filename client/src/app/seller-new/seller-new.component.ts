import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material';

import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-new',
  templateUrl: './seller-new.component.html',
  styleUrls: ['./seller-new.component.css']
})
export class SellerNewComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  isCreated = false;
  // SnackBar config data
  message = 'Snack Bar opened.';
  actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = true;
  autoHide = 5000;
  addExtraClass = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  // end of SnackBar config data

  // sellerForm: FormGroup;
  sellerForm = new FormGroup ({
    // 'name': new FormControl(this.hero.name, [
    //   Validators.required,
    //   Validators.minLength(4),
    //   forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    // ]),
    'email': new FormControl('', [Validators.required, Validators.email])
  });
  constructor(
    private fb: FormBuilder,
    private _sellerService: SellerService,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  onSubmit(event) {
    this.createSeller(this.sellerForm.value);
  }

  createForm() {
    this.sellerForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: ''
    });
  }

  createSeller(item: any) {
    this._sellerService.createSeller(item).subscribe(data => {
      console.log(data);
      if (data['message'] === 'Success') {
        const config = this._createSnackBarConfig();
        this.snackBar.open('The seller has been created', '', config);
        this.isCreated = true;
      }
    });
  }

  private _createSnackBarConfig() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = this.addExtraClass ? ['demo-party'] : undefined;
    // config.direction = this.dir.value;
    return config;
  }
}
