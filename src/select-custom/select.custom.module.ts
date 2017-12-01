import { NgModule } from "@angular/core";
import { SelectCustomComponent } from './select.custom.component';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    providers: [],
    declarations: [SelectCustomComponent],
    exports: [SelectCustomComponent],
    imports: [
        FormsModule,
        CommonModule,
        Ng2FilterPipeModule
    ]
})
export class SelectCustomModule {

}