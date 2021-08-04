import { AbstractControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { takeUntil } from 'rxjs/operators';

export function sameValue(getTargetControl: () => AbstractControl | null | undefined, removeSubscriptions: Observable<any>) {
    let subscription: Subscription | null = null;
    return function (control: AbstractControl) {
  
      if (subscription) { subscription.unsubscribe(); subscription = null; }
      const targetControl = getTargetControl();
      if (!targetControl) { return null; }
      subscription = targetControl.valueChanges
        .pipe(
          takeUntil(removeSubscriptions)
        )
        .subscribe({
          next: () => { control.updateValueAndValidity(); },
          complete: () => { subscription = null; }
        });
  
      return targetControl?.value === control?.value ? null : { isIncorect: true }
    };

}