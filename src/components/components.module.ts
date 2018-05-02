import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { CardComponent } from './card/card';
@NgModule({
	declarations: [MapComponent,
    CardComponent],
	imports: [],
	exports: [MapComponent,
    CardComponent]
})
export class ComponentsModule {}
