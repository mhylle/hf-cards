import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateCardComponent} from './cards/create-card/create-card.component';
import {ViewCardComponent} from './cards/view-card/view-card.component';
import {ListCardComponent} from './cards/list-card/list-card.component';
import {EditCardComponent} from './cards/edit-card/edit-card.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatCardModule, MatGridListModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {path: 'create-card', component: CreateCardComponent},
  {path: 'edit-card/:id', component: EditCardComponent},
  {path: 'add-detail/:id', component: EditCardComponent},
  {path: 'view-card', component: ViewCardComponent},
  {path: 'list-card', component: ListCardComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ListCardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    ViewCardComponent,
    ListCardComponent,
    EditCardComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
