import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    userName!: string;
    password!: string;
    formData!: FormGroup;
    someData: string = String(this.authService.isUserLoggedIn);

    constructor(private authService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.formData = new FormGroup({
            userName: new FormControl("TESTUSER"),
            password: new FormControl("TESTPASSWORD"),
        });
        console.log(this.authService.isUserLoggedIn);
    }

    onClickSubmit(data: any) {
        this.userName = data.userName;
        this.password = data.password;

        console.log("Login page: " + this.userName);
        console.log("Login page: " + this.password);

        this.authService.login(this.userName, this.password)
            .subscribe(data => {
                console.log("Is Login Success: " + data);

                if (data) this.router.navigate(['/dashboard']);
            });
    }
}