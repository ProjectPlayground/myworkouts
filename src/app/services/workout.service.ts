import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkoutService {
  http: any;
  apiKey: String;
  workoutsUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.apiKey = 'e5QgxrJivW8IKVGrFwSZoi2MTFFNRzuM';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts_yzhe554/collections/workouts';
  }

//   private handleError(error: any): Promise < any > {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }

  getWorkouts() {
    return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), {
        headers: headers
      })
      .map(res => res.json());
    // .toPromise()
    // .then(res => res.json())
    // .catch(this.handleError);
  }

  deleteWorkout(workoutId) {
    return this.http.delete(this.workoutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
      .map(res => res.json());
    //   .toPromise()
    //   .then(res => res.json())
    //   .catch(this.handleError);
  }
}
