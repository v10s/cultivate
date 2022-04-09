import { Injectable } from '@angular/core';
// import {  } from './server-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient,
//   private cookieService: CookieService,
  ) { }
  
  getMDDataFromURL(get_url:any){
    return this.getDataFromURL(get_url);
  }

  getIndexDatFromURL(get_url:any){
    return this.getDataFromURL(get_url);
  }

  getDataFromURL(get_url:any){
        let get_data_url = get_url;
       var form_data = new FormData();

//        form_data.append('title', title);
//        form_data.append('description', description);

//         var access_token: string = this.cookieService.get('access');

        let headers = new HttpHeaders({
//           'Authorization': `Bearer ${access_token}`,
        });

       let options = {
       responseType: 'text'
       };
        console.log("REQUEST SENT");
       return this.http.get(get_data_url,{responseType: 'text'});
    }



//
//   createStoryResource(url, description, story_id){
//          var form_data = new FormData();
//
//
//          form_data.append('url', url);
//          form_data.append('description', description);
//          form_data.append('story_id', story_id);
//
//          let headers = new HttpHeaders({
//
//          });
//
//          let options = {headers: headers};
//
//          return this.http.post<any>(create_story_resource_url, form_data, options);
//
//       }
//
//
//   createStoryImage(file, description, story_id){
//          var form_data = new FormData();
//
//
//          form_data.append('file', file.files[0], file.name);
//          form_data.append('description', description);
//          form_data.append('story_id', story_id);
//
//          let headers = new HttpHeaders({
//
//          });
//
//          let options = {headers: headers};
//
//          return this.http.post<any>(create_story_image_url, form_data, options);
//
//       }
//
//
//   createStoryVideo(file, description, story_id){
//          var form_data = new FormData();
//
//
//          form_data.append('file', file.files[0], file.name);
//          form_data.append('description', description);
//          form_data.append('story_id', story_id);
//
//          let headers = new HttpHeaders({
//
//          });
//
//          let options = {headers: headers};
//
//          return this.http.post<any>(create_story_video_url, form_data, options);
//
//       }
//   createStoryInterview(file, description, story_id){
//          var form_data = new FormData();
//
//
//          form_data.append('file', file.files[0], file.name);
//          form_data.append('description', description);
//          form_data.append('story_id', story_id);
//
//          let headers = new HttpHeaders({
//
//          });
//
//          let options = {headers: headers};
//
//          return this.http.post<any>(create_story_interview_url, form_data, options);
//
//       }


}
