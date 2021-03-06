import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CategoryComponent } from './category/category.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { UploadAvatarComponent } from './upload-avatar/upload-avatar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TintucComponent } from './tintuc/tintuc/tintuc.component';
import { TintucDetailComponent } from './tintuc/tintuc-detail/tintuc-detail.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
export const homeRoutes: Routes = [
  {path: '',component:HomeComponent,children: [
    {path:'',component:ProductComponent},
    {path:'product-detail/:id',component:ProductDetailComponent},
    {path:'change-avatar',component:ChangeAvatarComponent,canActivate:[AuthGuard]},
    {path:'change-password',component:ChangePasswordComponent,canActivate:[AuthGuard]},
    {path:'cart-detail',component:CartDetailComponent,canActivate:[AuthGuard]},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
    {path:'order-detail/:id',component:OrderDetailComponent,canActivate:[AuthGuard]},
    {path:'tintuc',component:TintucComponent},
    {path:'tintuc/:id',component:TintucDetailComponent},
    {path:'contact',component:ContactComponent},
    {path:'product',loadChildren:() =>import('./products/products.module').then(mod=>mod.ProductsModule)}
  ]},
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    CategoryComponent,
    ChangeAvatarComponent,
    UploadAvatarComponent,
    ProductsComponent,
    ChangePasswordComponent,
    CartDetailComponent,
    CartComponent,
    OrderComponent,
    OrderDetailComponent,
    TintucComponent,
    TintucDetailComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    NgbModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatToolbarModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    CarouselModule,
    NgxPayPalModule,
    ModalModule.forRoot(),
    RouterModule.forChild(homeRoutes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
