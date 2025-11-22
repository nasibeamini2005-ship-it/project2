import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-private-template',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {

}
