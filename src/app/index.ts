import {helloWorldServiceFactory} from "./services/hello-world/hello-world.service";

let appName = "my-angular-test-app";

angular
    .module(appName)
    .service("HelloWorldService", helloWorldServiceFactory);
