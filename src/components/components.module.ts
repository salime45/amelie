import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [PopoverComponent],
	imports: [
		IonicModule,
	],
	exports: [PopoverComponent]
})
export class ComponentsModule {}
