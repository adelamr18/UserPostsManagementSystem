import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { CreatePostComponent } from "./posts/create-post/create-post.component";
import { LoginComponent } from './authorization/login/login.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { AuthGuard } from './authorization/auth.guard';

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId' , component : CreatePostComponent,canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
