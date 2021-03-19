import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionsComponent } from './text2image/descriptions/descriptions.component';
import { MatchedImagesListComponent } from './text2image/images/matched-images-list/matched-images-list.component';
import { SearchLabelsComponent } from './text2image/search-labels/search-labels.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';



const routes: Routes = [
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: 'description',component: DescriptionsComponent},
  {path: 'search-labels', component: SearchLabelsComponent},
  {path: 'matched-images', component: MatchedImagesListComponent},
  {path: 'about',component: AboutComponent},
  {path: 'intro',component: IntroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
