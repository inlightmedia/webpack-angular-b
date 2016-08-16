import angular from 'angular';

// Allows tests to be run only in test mode `npm run test`
if (ON_TEST) {
    require('angular-mocks/angular-mocks');        
}

// Load directives.
import registerDirectives from './directives';

const ngModule = angular.module('app', []);

registerDirectives(ngModule);
