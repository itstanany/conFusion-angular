import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// building form to submit new commant
import { Comment } from '../shared/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// using rxJs
import { switchMap } from 'rxjs/operators';
// importing the Dish class as interface
import { Dish } from '../shared/dish';
import { from } from 'rxjs';
import { visibility } from '../animations/app.animation';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  errMess: string;
  dishIds: string [];
  prev: string;
  next: string;
  dishcopy: Dish;
  comform: FormGroup; // the actual form
  @ViewChild('cform') comformDirective;
  comment: Comment;
  scomform: Comment; // the final form to submit
  visibility = 'shown';

  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages = {
    'author': {
      'required': 'Author is required.',
      'minlength': 'Author must be at least 2 characters long.',
    },
    'comment': {
      'required': 'Comment is required.',
    },
  };
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private cf: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }
  createForm(): void {
    this.comform = this.cf.group({
      rating: [5, [Validators.required]],
      comment: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      date: new Date(),
    });
    this.comform.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)-set form validation
  }
  ngOnInit() {
    // i don't know why ther is a plus + sign at the begging of the assignment expression
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(params['id']); }))
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
    errmess => this.errMess = <any>errmess);
  }
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  gotBack(): void {
    this.location.back();
  }
  onValueChanged(data?: any) {
    if (!this.comform) { return; }
    const form = this.comform;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous msg(if any)
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
    this.scomform = this.comform.value;
    this.comment = this.comform.value as Comment;
    this.comment.date = new Date().toISOString();
    this.dishcopy.comments.push(this.comment);
    this.dishservice.putDish(this.dishcopy)
    .subscribe(dish => {
      this.dish = dish; this.dishcopy = dish;
    },
    errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; });
    console.log(this.comment);
    console.log(this.scomform);
    this.comformDirective.resetForm();
    this.comform.reset({
      rating: '5',
      comment: '',
      author: '',
      date: new Date()
    });
  }
}
