import {NgModule} from '@angular/core';
import {MatCardModule, MatGridListModule, MatToolbarModule,} from '@angular/material';

@NgModule({
  imports: [MatGridListModule,MatCardModule,MatToolbarModule
  ],
  exports: [MatGridListModule,MatCardModule,MatToolbarModule
  ],

})

export class MyMaterialModule {
}
