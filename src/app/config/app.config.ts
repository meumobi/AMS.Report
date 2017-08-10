import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

class EnvData {
    env: string;
}

@Injectable()
export class AppConfig {

    private config: Object = null;
    private env: Object = null;

    public configPath = "./app/config/";

    constructor(private http: Http) {

    }

    public get(key: any) {
        let res: any = this.config || [];
        key.split('.').forEach(
          k => {
            if (res && res[k]) {
              res = res[k]
            } else {
              res = null;
            }
          }
        );

        return res;
    }

    /**
     * Use to get the data found in the first file (env file)
     */
    public getEnv(key: any) {
        return this.env[key];
    }

    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load() {
        return new Promise((resolve, reject) => {
            this.http.get(this.configPath + 'env.json')
                .map(res => res.json())
                .catch((error: any): any => {
                    console.log('Configuration file "env.json" could not be read');
                    resolve(error);
                    //return Observable.throw(error.json().error || 'Server error');
                })
                .subscribe((envResponse: EnvData) => {
                    this.env = envResponse;

                    this.http.get(this.configPath + 'config.' + envResponse.env + '.json')
                      .map(res => res.json())
                      .catch((error: any) => {
                          console.error('Error reading ' + envResponse.env + ' configuration file');
                          resolve(error);
                          console.log(error);
                          return Observable.throw(error || 'Server error');
                      })
                      .subscribe((responseData) => {
                          this.config = responseData;
                          resolve(true);
                      });
                });
        });
    }
}