import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IDeactivateComponent } from "../shared/services/deactivate-guard.service";

enum SatisfactionRatings {
  none_selected,
  very_dissatisfied,
  dissatisfied,
  neutral,
  satisfied,
  very_satisfied
}

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styles: []
})
export class SurveyComponent implements IDeactivateComponent {
  public title = "Keeping Track of Form Changes In Angular";
  public satisfactionRatings = SatisfactionRatings;
  public satisfactionRating = SatisfactionRatings.none_selected;
  public comments: string = '';
  @ViewChild('f') private ngFormRef!: NgForm;
  
  public onClick(value: SatisfactionRatings) {
    console.log(value);
  }

  public onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.dirty);  // false
  }

  public canExit(): boolean {
    return this.ngFormRef.dirty
      ? window.confirm('You have unsaved changes.  Are you sure you want to leave the page?')
      : true;
  };
}
