import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './app.Component';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
])
.catch((err:any) => console.log(err));
