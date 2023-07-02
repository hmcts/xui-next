import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'xui-next-common-lib',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './exui-next-common-lib.component.html',
  styleUrls: ['./exui-next-common-lib.component.scss'],
})
export class ExuiNextCommonLibComponent {}
