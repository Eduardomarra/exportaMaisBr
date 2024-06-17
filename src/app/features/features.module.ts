import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerProductComponent } from './dashboard/components/per-product/per-product.component';
import { PercentSaleComponent } from './dashboard/components/percent-sale/percent-sale.component';
import { TotalSaleComponent } from './dashboard/components/total-sale/total-sale.component';
import { RankingComponent } from './dashboard/components/ranking/ranking.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PerProductComponent,
    PercentSaleComponent,
    TotalSaleComponent,
    RankingComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent],
})
export class FeaturesModule {}
