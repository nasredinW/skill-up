import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SkillUpComponent} from "./components/skill-up/skill-up.component";
import {AdminDahsbordComponent} from "./admin-dahsbord/admin-dahsbord.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {UploadFileComponent} from "./components/upload-file/upload-file.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {FormationComponent} from "./formation/formation/formation.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";


const APP_ROUTING: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: SkillUpComponent},
  {path: "admin", component: AdminDahsbordComponent},
  {path: "home", component: HomePageComponent},
  {path:"upload",component:UploadFileComponent},
  {path:"404",component:NotFoundComponent},
  {path:"formation",component:FormationComponent},
  {path:"nav",component:NavBarComponent}





];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);

