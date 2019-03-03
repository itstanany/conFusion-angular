import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import {FeedbackService } from '../services/feedback.service';
import { flyInOut } from '../animations/app.animation';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  errMess: string;
  contactType = ContactType;
  formDisplay: boolean;
  feedbackSpinner: boolean;
  submittedFlag: boolean;
  feedbackcopy: Feedback;
  sfeedback: Feedback;
  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'Firstname is REQUIRED.',
      'minlength': 'Firstname can be at least two (2) charachters',
      'maxlength': 'Lastnamee can\'t be more than wenty five(25)'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
  };
  constructor(private fb: FormBuilder,
    private feedbackService: FeedbackService,
    @Inject('BaseURL') private BaseURL) {
    this.createForm();
    this.formDisplay = true;
    this.feedbackSpinner = false;
    this.submittedFlag = false;
  }

  ngOnInit() {
  }
  createForm(): void {
    // ".group()" method construct new FormGroup instance
    // "this.feedbackForm" is an instance to the method ".group()" and considered the "FORM MODEL".
    this.feedbackForm = this.fb.group(
      // the object that contains a collection of children of form controls,
      // the key for each child is the name under which it is registered.
      {
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re) set validation messages
  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error msg if any
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.BaseURL.formDisplay = false;
    this.feedbackSpinner = true;
    this.BaseURL.feedbackService.submitFeedback(this.feedback)
    .subscribe(feedback => {
      this.feedback = feedback;
      this.feedbackSpinner = false;
      this.submittedFlag = true;
    },
    errmess => {
      this.BaseURL.feedback = null;
      this.errMess = <any>errmess;
    }
    );
    console.log(this.feedback);
    setTimeout(() => {
      this.BaseURL.submittedFlag = false;
      this.BaseURL.formDisplay = true;
      this.feedbackForm.reset({
        firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
      });
    }, 5000 );
  }
}
/*
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
}
*/

/*
    this.feedbackService. submitFeedback(this.sfeedback)
   .subscribe(hero => this.feedback.push(hero),
      errmess => { this.feedback = null; this.feedbackcopy = null; this.errMess = <any>errmess; });
      */