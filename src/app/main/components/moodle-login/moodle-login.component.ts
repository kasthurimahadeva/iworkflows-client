import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/authentication.service';
import {FuseConfigService} from '../../../../@fuse/services/config.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'moodle-login',
    templateUrl: './moodle-login.component.html',
    styleUrls: ['./moodle-login.component.scss'],
})
export class MoodleLoginComponent implements OnInit {
    moodleLoginForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthenticationService,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private http: HttpClient,
        private toastr: ToastrService
    ) {
        this.hideComponents();
    }

    ngOnInit(): void {
        this.hideComponents();
        this.moodleLoginForm = this._formBuilder.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    private hideComponents(): void {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    login(): void {
        const moodleCredentials = this.moodleLoginForm.value;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        this.http.post(environment.server + 'api/v1/moodle/token', moodleCredentials, {headers: headers, observe: 'response'}).subscribe(
            response => {
                if (response.status === 200) {
                    this.toastr.success('Loggedin successfully', 'Success', {progressBar: true, progressAnimation: 'increasing'});
                }
            },
            error => {
                console.error(error);
                this.toastr.error('Could not login', 'Failed');
            }
        );

        this.router.navigate(['connect']);
    }
}
