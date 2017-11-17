import { Observable } from 'rxjs/Rx';
import { PreloadingStrategy, Route } from '@angular/router';

export class SelectivePreloadingStrategy implements PreloadingStrategy {
    
    public preload(route: Route, fn: () => Observable<any>): Observable<any> {
        console.log(`preload route ${route.path} => ${!!route.data && !!route.data.preload}`);
        return (route.data && route.data.preload  ? fn() : Observable.of(null));
    }
}