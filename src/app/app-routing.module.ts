import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionsComponent } from './text2image/descriptions/descriptions.component';
import { MatchedImagesListComponent } from './text2image/images/matched-images-list/matched-images-list.component';
import { ResImageComponent } from './text2image/images/res-image/res-image.component';
import { SearchLabelsComponent } from './text2image/search-labels/search-labels.component';


const routes: Routes = [
  {path: '', redirectTo: '/description', pathMatch: 'full'},
  {path: 'description',component: DescriptionsComponent},
  {path: 'search-labels', component: SearchLabelsComponent},
  {path: 'res-images', component: ResImageComponent},
  {path: 'matched-images', component: MatchedImagesListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
