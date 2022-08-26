import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    CreateComponent,
    ShowComponent,
    EditComponent,
    DeleteComponent,
    ViewComponent,
    SearchComponent
  ],
    imports: [
        CommonModule,
        TourRoutingModule,
        ReactiveFormsModule
    ]
})
export class TourModule { }
