import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier, ContactPerson, ContactDetail } from '../../entities/supplier';

@Component({
    selector: 'app-supplier-registration-page',
    templateUrl: './supplier-registration-page.component.html',
    styleUrls: ['./supplier-registration-page.component.css']
})
export class SupplierRegistrationPageComponent implements OnInit {

    supplierForm = new FormGroup({
        name: new FormControl('', Validators.required),
        contactPersons: new FormArray([this.contactPersonForm]),

        // firstName: new FormControl(''),
        // lastName: new FormControl(''),
        // address: new FormGroup({
        //     street: new FormControl(''),
        //     city: new FormControl(''),
        //     state: new FormControl(''),
        //     zip: new FormControl('')
        // }),
        // aliases: new FormArray([
        //     new FormGroup({
        //         contactType: new FormControl(''),
        //         contactDescription: new FormControl(''),
        //     })
        // ])
    });

    get contactPersonForm() {
        return new FormGroup({
            jobTitle: new FormControl(''),
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            contactDetails: new FormArray([this.contactDetailForm])
        });
    }

    get contactDetailForm() {
        return new FormGroup({
            contactType: new FormControl(''),
            contactDescription: new FormControl(''),
        });
    }

    get contactPersons() {
        return this.supplierForm.get('contactPersons') as FormArray;
    }

    contactDetails(i: number) {
        return this.supplierForm.controls.contactPersons.at(i).controls.contactDetails as FormArray;
    }

    addContactDetail(i: number) {
        //this.contactPersons.push(this.contactPersonForm);
        this.contactDetails(i).push(this.contactDetailForm);
    }

    deleteContactDetail(i: number, contactDetailIndex: number) {
        this.contactDetails(i).removeAt(contactDetailIndex);
    }

    addContactPerson() {
        this.contactPersons.push(this.contactPersonForm);
    }

    deleteContactPerson(contactPersonIndex: number) {
        this.contactPersons.removeAt(contactPersonIndex);
    }

    registerSupplier() {

        let contactPersons = this.supplierForm.controls.contactPersons.value.map(contactPerson => <ContactPerson>{
            jobTitle: contactPerson.jobTitle,
            firstName: contactPerson.firstName,
            lastName: contactPerson.lastName,
            contactDetails: contactPerson.contactDetails?.map(contactDetail => <ContactDetail> {
                contactType: contactDetail.contactType,
                description: contactDetail.contactDescription
            })
        });

        var supplier: Supplier = {
            name: this.supplierForm.controls.name.value || "",
            contacts: contactPersons
        }

        console.log(supplier);

        this.supplierService
            .registerSupplier(supplier)
            .subscribe(supplier => {
                console.log("Register {supplier}", supplier);
            });
    }

    // addAlias() {
    //     const lessonForm = new FormGroup({
    //         contactType: new FormControl(''),
    //     });
    //     this.aliases.push(lessonForm);

    //     // this.aliases.push(
    //     //     new FormGroup({
    //     //         contactType: new FormControl(''),
    //     //         //contactDescription: new FormControl(''),
    //     //     })
    //     // );
    // }

    testForm() {
        console.warn(this.supplierForm.value);
    }

    ngOnInit(): void {
    }

    constructor(private supplierService: SupplierService) { }
}