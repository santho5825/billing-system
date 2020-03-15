import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {  
  submitted = false;
  billingForm: FormGroup;
  EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.billingForm = this.fb.group({
      
      items:this.fb.group ([   
        /*             
        itemName: ['']                 
        itemQuantity:['', Validators.required],
        itemPrice: ['', Validators.required],
        itemTotal:['', Validators.required]*/
      ]),     
      customerName:[''],     
      address:[''],     
      billAmount: [''],            
      designation: [''],
      phoneNumber: ['']
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.billingForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.billingForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.billingForm.valid) {
      return false;
    } else {
      let temp = {id:101, billAmount:250,​ date: "10-22-2000", name: "arun",
        ​phoneNumber: 1234567890, items:[{ itemName:"Ice Cream", itemQuantity:2, itemPrice:200, itemTotal:1000 }]};
      console.log(temp);
      this.apiService.createEmployee(temp).subscribe(
        (res) => {
          console.log('Bill successfully added!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
