import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NxWelcomeComponent} from "../nx-welcome.component";

@Component({
  selector: 'xui-next-manage-cases',
  standalone: true,
    imports: [CommonModule, NxWelcomeComponent],
  templateUrl: './manage-cases.component.html',
  styleUrls: ['./manage-cases.component.scss']
})
export class ManageCasesComponent {

}
