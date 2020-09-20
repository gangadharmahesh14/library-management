import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetBookComponent } from './components/get-book/get-book.component';
import { ReturnBookComponent } from './components/return-book/return-book.component';
import { HistoryComponent } from './components/history/history.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';

import { TableFilterPipe } from './filters/table-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GetBookComponent,
    ReturnBookComponent,
    HistoryComponent,
    CardComponent,
    TableFilterPipe,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
