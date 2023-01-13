import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-unit-form",
  template: `
    <form>
      <mat-form-field appearance="outline">
        <mat-label>Nazwa koła*</mat-label>
        <input matInput placeholder="Nazwa koła*" />
        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
        <mat-hint>Hint</mat-hint>
      </mat-form-field>
    </form>
  `,
  styles: [
    `
      form {
        margin-top: 4rem;
      }
      :host {
        display: block;
        padding-top: 4rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitFormComponent {}
