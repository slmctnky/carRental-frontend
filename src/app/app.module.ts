import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CampaignMainComponent } from './components/campaign-main/campaign-main.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { CarImagesAddComponent } from './components/car-images-add/car-images-add.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { CarDetailFilterPipe } from './pipes/car-detail-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    NaviComponent,
    RentalComponent,
    CustomerComponent,
    CarDetailComponent,
    CarAddComponent,
    CampaignMainComponent,
    MainPageComponent,
    CarImagesAddComponent,
    VatAddedPipe,
    FilterBrandPipePipe,
    CarFilterComponent,
    FilterColorPipePipe,
    CarDetailFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
