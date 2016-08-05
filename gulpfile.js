"use strict";

var gulp = require("gulp");
var tslint = require("gulp-tslint");
var typescript = require("gulp-typescript");
var tsProject = typescript.createProject("./tsconfig.json");
var del = require("del");
var Server = require("karma").Server;
var paths = {
    dist: "dist/"
};

/**
 * Cleans the dis repository
 */
gulp.task("clean", function () {
    del(["dist/lib/**/*"]);
});

/**
 *
 */
gulp.task("tslint", function () {
    gulp.src("src/app/**/*.ts")
        .pipe(tslint({
            configuration: "./tslint.json",
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

/**
 *
 */
gulp.task("compile", ["clean", "tslint"], function () {
    return tsProject.src()
        .pipe(typescript(tsProject))
        .js.pipe(gulp.dest("dist/lib/"));
});

/**
 * Runs test one and exits
 */
gulp.task("test", ["compile"], function (done) {
    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done).start();
});

gulp.task("build", ["test"]);

gulp.task("default", ["build"]);