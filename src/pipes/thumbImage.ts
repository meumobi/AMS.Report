import { AppConfig } from './../app/config/app.config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thumbImage',
})
export class ThumbImagePipe implements PipeTransform {

    constructor(public config: AppConfig) {
        console.log('thumbImage pipe');
        console.log(config.get('api.screenshots'));
    }
    /**
     * Convert URL to PNG URI.
     * use images.weserv.nl to cache image
     * ...
     * <img [src]="site.url | thumbImage" *ngIf="site.url">
     */
    transform(url: any): any {
        let cachedImageUrl = null;
        
        if (url && url != '') {
            let thumbUrl = this.url2png(url);
            cachedImageUrl = this.cacheImage(thumbUrl);
        }

        return cachedImageUrl;
    }

    cacheImage(url) {
        let proxyUrl = this.config.get('api.screenshots.proxyCache');

        /*
          Remove protocol form url param to images.weserv.nl
        */
        return proxyUrl + '?url=' + encodeURIComponent(url.replace(/(^\w+:|^)\/\//, ''));
    }

    url2png(url) {
        let screenshotProviderUrl: string = this.config.get('api.screenshots.url');
        let accessKey: string = this.config.get('api.screenshots.accessKey');

        let screenshotUrl: string = screenshotProviderUrl + '?access_key=' + accessKey;
        screenshotUrl += '&viewport=1440x900';
        screenshotUrl += '&width=400';
        screenshotUrl += ('&url=' + url);

        return screenshotUrl;
    }
}