import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'payal-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Payal | Web Developer | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend Development , Software Engineer, Software, Developer' },
      { name: 'description', content: 'As a software engineer with expertise in ' },
    ]);
    
    AOS.init();


  }
}
