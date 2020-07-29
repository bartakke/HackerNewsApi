import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material'
import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatInputModule } from '@angular/material';
import { Metrial } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedsComponent,
    LoaderComponent,
    FeedItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Metrial,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


