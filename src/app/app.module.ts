import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './shared/item-component/item.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './posts-list/post/post.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, PostsListComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
