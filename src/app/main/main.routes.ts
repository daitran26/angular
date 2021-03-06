import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductComponent } from '../main/product/product.component';
import { AuthGuard } from '../guards/auth.guard';
import { OrderComponent } from './order/order/order.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { TintucComponent } from './tintuc/tintuc/tintuc.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryComponent } from './category/category/category.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { TintucAddComponent } from './tintuc/tintuc-add/tintuc-add.component';
import { TintucEditComponent } from './tintuc/tintuc-edit/tintuc-edit.component';
import { UserComponent } from './user/user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { TonkhoComponent } from './thongke/tonkho/tonkho.component';
import { BanchayComponent } from './thongke/banchay/banchay.component';
export const mainRoutes:Routes = [
    {
        path: '', component:MainComponent,
        children:[
            {path: '',redirectTo:'home',pathMatch:'full'},
            {path: 'home',component:HomeComponent,canActivate:[AuthGuard]},
            {path: 'product',component:ProductComponent},
            {path: 'product/product-add',component:ProductAddComponent},
            {path: 'product-edit/:id',component:ProductEditComponent},
            {path: 'order',component:OrderComponent},
            {path: 'order-detail/:id',component:OrderDetailComponent},
            {path: 'tintuc',component:TintucComponent},
            {path: 'tintuc-add',component:TintucAddComponent},
            {path: 'tintuc-edit/:id',component:TintucEditComponent},
            {path: 'category',component:CategoryComponent},
            {path: 'category-add',component:CategoryAddComponent},
            {path: 'category/:id',component:CategoryEditComponent},
            {path: 'user',component:UserComponent},
            {path: 'user-add',component:UserAddComponent},
            {path: 'user/:id',component:UserEditComponent},
            {path: 'banchay',component:BanchayComponent},
            {path: 'tonkho',component:TonkhoComponent},
        ]
    },
]
