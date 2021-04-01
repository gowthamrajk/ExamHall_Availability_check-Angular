import { Component } from "@angular/core";
class details {
  dept: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  details: any[] = [{ dept: "ECE" }, { dept: "CSE" }, { dept: "MECH" }];
  selectedValue: string = "select";

  name: any;
  roll_no: any;
  department: any;

  proCardStatus: Boolean = false;
  generateCard(): any {
    this.proCardStatus = !this.proCardStatus;
  }
}
