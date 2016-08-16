module.exports = function (ngModule) {
    ngModule.directive('hello', function () {
        if (ON_TEST) {
            require('./hello.test')(ngModule);
        }
        // ADD CSS TO THE TEMPLATE
        require('./hello.css');
        return {
            restrict: 'E',
            scope: {},
            template: require('./hello.tpl.html'),
            controllerAs: 'vm',
            controller: function () {
                var vm = this;

                vm.greeting = 'Hello Webpack!'
            } 
        };
    });
}