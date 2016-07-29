export class HelloWorldService {

    private _$http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
        this._$http = $http;
    }
}

/** @ngInject */
export function helloWorldServiceFactory($http: ng.IHttpService): HelloWorldService {
    return new HelloWorldService($http);
}