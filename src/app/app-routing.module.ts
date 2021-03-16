import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DescriptionsComponent } from './text2image/descriptions/descriptions.component';
import { MatchedImagesListComponent } from './text2image/images/matched-images-list/matched-images-list.component';
import { ResImageComponent } from './text2image/images/res-image/res-image.component';
import { SearchLabelsComponent } from './text2image/search-labels/search-labels.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: 'intro',component: IntroComponent},
  {path: 'description',component: DescriptionsComponent},
  {path: 'search-labels', component: SearchLabelsComponent},
  {path: 'res-images', component: ResImageComponent},
  {path: 'matched-images', component: MatchedImagesListComponent},
  {path: 'about',component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
