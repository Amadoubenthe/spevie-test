import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  infisoftwareLogo: string = "http://www.infisoftware.net/fr/img/logo/logo.png"
  spvieLogo: string = "https://www.spvie.com/sites/default/files/logo_SPVIE_blanccartouchenoir_0.png"
  title: string = "logo"
  constructor() { }

  ngOnInit(): void {
  }

}
