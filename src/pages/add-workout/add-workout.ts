import { Component } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { WorkoutService } from '../../app/services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
  
  public title: String;
  public note: String;
  public type: String;
  public result: any;
  public othersInput: String;
  public orderForm: any;

  constructor(public navCtrl: NavController, private workoutService: WorkoutService, private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      "title":["",Validators.required],
      "note": ["", Validators.required],
      "type": ["", Validators.required],
      "othersInput": [""]
      //"address": ["",Validators.required]
    });
  }

  onSubmit() {
    var workout = {
        title: this.orderForm.value.title,
        note: this.orderForm.value.note,
        type: this.orderForm.value.type
    }

    if(this.orderForm.value.othersInput) {
      workout.type = this.orderForm.value.othersInput;
    }
    // Add workout
    this.workoutService.addWorkout(workout).subscribe(data => {
        this.result = data;
        console.log('result:' + this.result);
        this.navCtrl.push(WorkoutsPage);
        this.orderForm.reset();

    });
    // this.workoutService.addWorkout(workout)
    //   .then(data => {
    //     this.result = data;
    //     this.navCtrl.push(WorkoutsPage);
    //   });
    
  }


}
