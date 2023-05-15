import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AdminDahsbordComponent} from './admin-dahsbord/admin-dahsbord.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SkillUpComponent} from './components/skill-up/skill-up.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {CardFormComponent} from './components/card-form/card-form.component';
import {CreatPasswordComponent} from './components/creat-password/creat-password.component';
import {ROUTING} from "./app.routing";
import { TestPageComponent } from './test/test-page/test-page.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AddGroupComponent } from './components/add-group/add-group.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ManageGroupComponent } from './components/manage-group/manage-group.component';
import { FormationComponent } from './formation/formation/formation.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { AddEditFormationComponent } from './components/add-edit-formation/add-edit-formation.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { QuizzFormComponent } from './components/quizz-form/quizz-form.component';
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {NgOptimizedImage} from "@angular/common";
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditUserComponent,
    AdminDahsbordComponent,
    LoginComponent,
    NotFoundComponent,
    SkillUpComponent,
    HomePageComponent,
    CardFormComponent,
    CreatPasswordComponent,
    TestPageComponent,
    UploadFileComponent,
    AddGroupComponent,
    ManageGroupComponent,
    FormationComponent,
    NavBarComponent,
    AddEditFormationComponent,
    QuizzFormComponent,
    CommentComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        FontAwesomeModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        MatTabsModule,
        ROUTING,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatExpansionModule,
        MatExpansionModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatListModule,
        MatGridListModule,
        NgOptimizedImage,
        FormsModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
