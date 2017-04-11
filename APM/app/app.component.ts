import{ Component } from '@angular/core';
@Component({
    selector:'pm-app',
    template:`
    <div><h1 class="container col">{{ pageTitle }}</h1>
    <pm-products></pm-products>
    </div>`
    
})
export class AppComponent {
    pageTitle: string = 'Acme product'
}