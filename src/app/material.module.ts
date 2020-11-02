import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatTooltipModule, ],
    exports: [MatButtonModule, MatInputModule, MatTooltipModule, ]
})

export class MaterialModule {}