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
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
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

  productForm = new FormGroup ({
    'name': new FormControl('', [Validators.required])
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
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  onSubmit(event) {
    this.createProduct(this.productForm.value);
  }

  createForm() {
    this.productForm = this.fb.group({
      name: '',
      imgUrl: '',
      description: '',
      keywords: '',
    });
  }

  createProduct(item: any) {
    this._sellerService.createProduct(item).subscribe(data => {
      console.log(data);
      if (data['message'] === 'Success') {
        const config = this._createSnackBarConfig();
        this.snackBar.open('The product has been created', '', config);
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
