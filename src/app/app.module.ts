// @angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material 2
import {MatButtonModule, MatToolbarModule, MatGridListModule,MatIconModule,MatDialogModule} from '@angular/material';

// Firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
//App components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
//Extra modules
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { AbilityListComponent } from './ability-list/ability-list.component';
import { StackListComponent } from './stack-list/stack-list.component';



// // Routes variable
// const routes: Routes = [
// 	{
// 		path: '',
// 		component: LandingComponent
// 	},
// 	{
// 		path: 'about/:id',
// 		component: AboutComponent
// 	},
//   {
//     path: 'projects',
//     component: ProjectsComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    NavbarComponent,
    ProjectsComponent,
    FooterComponent,
    ContactModalComponent,
    AbilityListComponent,
    StackListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatButtonModule, 
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    ScrollToModule.forRoot(),
    // RouterModule.forRoot(
    // 	routes
    // )
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
