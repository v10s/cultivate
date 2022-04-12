import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { marked } from 'marked';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  information_name = "";
  md_url = "";
  md_data = "";
  html_data = marked.parse('');;
	app_name = "Cultivate"

  constructor(
    private route: ActivatedRoute,
    private getDataServices: GetDataService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      
      this.information_name = params['information_name'];
      this.md_url = "https://raw.githubusercontent.com/v10s/cultivate/main/md_files/" + this.information_name;

      this.getDataServices.getMDDataFromURL(this.md_url)
      .subscribe(
        response => {
          this.md_data = response;
          this.html_data = marked.parse(response);
        }
        );
  });

  }



}
