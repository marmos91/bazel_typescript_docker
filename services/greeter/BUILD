load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

ts_library(
    name = "greeter",
    srcs = glob(
        include = [
            "lib/greeter.ts",
            "index.ts"
        ]
    ),
    visibility = ["//visibility:public"],
    deps = [
        "//libraries/logger",
        "@npm//@types/node",
    ],
)

rollup_bundle(
    name = "bundle",
    config_file = "//:rollup.config.js",
    entry_point = "index.ts",
    format = "cjs",
    deps = [
        ":greeter",
    ],
)

nodejs_binary(
    name = "bin",
    entry_point = "bundle.js",
)