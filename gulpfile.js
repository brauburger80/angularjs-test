"use strict";

var gulp = require("gulp");
var tslint = require("gulp-tslint");
var typescript = require("gulp-typescript");
var tsProject = typescript.createProject("./tsconfig.json");
var del = require("del");
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

gulp.task("build", ["compile"]);

gulp.task("default", ["build"]);