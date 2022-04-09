import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatInputModule} from '@angular/material/input';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatDividerModule} from '@angular/material/divider';

import {MatDialogModule} from '@angular/material/dialog';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';


// Non material repos
// import { MaterialFileInputModule } from 'ngx-material-file-input';
// import { NgxAudioPlayerModule } from 'ngx-audio-player';
// import { HorizontalSliderModule } from "angular2-horizontal-slider";
// import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu/horizontal-scroll-menu.component';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatTooltipModule,
  MatChipsModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatDialogModule,
  MatSliderModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatListModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatRippleModule,

// Non material repos
//   MaterialFileInputModule,
//   NgxAudioPlayerModule,
//   HorizontalSliderModule,
]

@NgModule({
  declarations: [
//   HorizontalScrollMenuComponent
  ],
  imports: [
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ],
})
export class MaterialModule { }
