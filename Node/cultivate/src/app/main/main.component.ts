import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { marked } from 'marked';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	app_name = "Cultivate"
	search_box_margin_top = "100px";
	md_block_urls : any = ['sdfsadf'];

	index : any[] = [];
  searched_index = []
  favourites_index = []

  constructor(
    private getDataService: GetDataService,
  ) { }

  ngOnInit(): void {



  this.getDataService.getIndexDatFromURL("https://raw.githubusercontent.com/v10s/cultivate/main/index/index.csv")
  .subscribe(
  response => {
    this.index = this.populate_index(response);
  }
  );

  this.search_in_index("sf1");

  }

  populate_index(response:any){

    var lines = response.split('\n').slice(1);
    console.log(lines);

    return lines;
    
  }

  get_index_of_strings(){

  }

   search_md_blocks(search_string : any){

   }

  search_in_index(search_string : any){
    var index_similarity = [];
    for (let line of this.index){
      line = line[0];
      if (line != "" || line != null || line != undefined){
        console.log(line);
        var line_similarity = [line, this.similarity(line.split(',')[0], search_string)];
        index_similarity.push(line_similarity);
      }
    }
    index_similarity = index_similarity.sort(function(a:any,b: any) {
      return a[1] - b[1];
    }).reverse();
    this.index = index_similarity;
  }

// Similiar to Levenshtein distance
  similarity(s1: any, s2 : any) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
  }
  
  editDistance(s1 : any, s2 : any) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

}
