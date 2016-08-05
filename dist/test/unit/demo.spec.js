"use strict";

describe("Demo test", function () {
    var $q,
        $compile,
        $rootScope;

    beforeEach(function () {
        angular.mock.module("my-angular-test-app");

        angular.mock.inject(function (_$q_, _$compile_, _$rootScope_) {
            $q = _$q_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it("should do some shit.", function () {
        expect(true).toBe(true);
    });

    function getCompiledElement() {

    }
});