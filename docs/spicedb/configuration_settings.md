# Configuration Flags

All configuration data in this reference can also be represented as environment variables. For example, the `--dashboard-addr` flag can be represented as `SPICEDB_DASHBOARD_ADDR`

For the best experience, it is recommended to leave the defaults in place.

## `spicedb serve` Flags

| Flag | Description | Default |
| --- | --- | --- |
| --dashboard-addr | address to listen on to serve dashboard | ":8080" |
| --dashboard-enabled | enable http dashboard server | true |
| --dashboard-tls-cert-path | local path to the TLS certificate used to serve dashboard |  |
| --dashboard-tls-key-path | local path to the TLS key used to serve dashboard |  |
| --datastore-bootstrap-files | bootstrap data yaml files to load |  |
| --datastore-bootstrap-overwrite | overwrite any existing data with bootstrap data |  |
| --datastore-bootstrap-timeout | maximum duration before timeout for the bootstrap data to be written | 10s |
| --datastore-conn-max-lifetime-jitter | waits rand(0, jitter) after a connection is open for max lifetime to actually close the connection (default: 20% of max lifetime) |  |
| --datastore-conn-pool-read-healthcheck-interval | amount of time between connection health checks in a remote datastore's connection pool | 30s |
| --datastore-conn-pool-read-max-idletime | maximum amount of time a connection can idle in a remote datastore's connection pool | 30m0s |
| --datastore-conn-pool-read-max-lifetime | maximum amount of time a connection can live in a remote datastore's connection pool | 30m0s |
| --datastore-conn-pool-read-max-lifetime-jitter | waits rand(0, jitter) after a connection is open for max lifetime to actually close the connection (default: 20% of max lifetime) |  |
| --datastore-conn-pool-read-max-open | number of concurrent connections open in a remote datastore's connection pool | 20 |
| --datastore-conn-pool-read-min-open | number of minimum concurrent connections open in a remote datastore's connection pool | 20 |
| --datastore-conn-pool-write-healthcheck-interval | amount of time between connection health checks in a remote datastore's connection pool | 30s |
| --datastore-conn-pool-write-max-idletime | maximum amount of time a connection can idle in a remote datastore's connection pool | 30m0s |
| --datastore-conn-pool-write-max-lifetime | maximum amount of time a connection can live in a remote datastore's connection pool | 30m0s |
| --datastore-conn-pool-write-max-lifetime-jitter | waits rand(0, jitter) after a connection is open for max lifetime to actually close the connection (default: 20% of max lifetime) |  |
| --datastore-conn-pool-write-max-open | number of concurrent connections open in a remote datastore's connection pool | 10 |
| --datastore-conn-pool-write-min-open | number of minimum concurrent connections open in a remote datastore's connection pool | 10 |
| --datastore-conn-uri | connection string used by remote datastores (e.g. "postgres://postgres:password@localhost:5432/spicedb") |  |
| --datastore-connect-rate | rate at which new connections are allowed to the datastore (at a rate of 1/duration) (cockroach driver only) | 100ms |
| --datastore-connection-balancing | enable connection balancing between database nodes (cockroach driver only) | true |
| --datastore-engine | type of datastore to initialize ("cockroachdb", "mysql", "postgres", "spanner") | "memory" |
| --datastore-follower-read-delay-duration | amount of time to subtract from non-sync revision timestamps to ensure they are sufficiently in the past to enable follower reads (cockroach driver only) | 4.8s |
| --datastore-gc-interval | amount of time between passes of garbage collection (postgres driver only) | 3m0s |
| --datastore-gc-max-operation-time | maximum amount of time a garbage collection pass can operate before timing out (postgres driver only) | 1m0s |
| --datastore-gc-window | amount of time before revisions are garbage collected | 24h0m0s |
| --datastore-max-tx-retries | number of times a retriable transaction should be retried | 10 |
| --datastore-migration-phase | datastore-specific flag that should be used to signal to a datastore which phase of a multi-step migration it is in |  |
| --datastore-mysql-table-prefix | prefix to add to the name of all SpiceDB database tables |  |
| --datastore-prometheus-metrics | set to false to disabled prometheus metrics from the datastore | true |
| --datastore-query-userset-batch-size | number of usersets after which a relationship query will be split into multiple queries | 1024 |
| --datastore-readonly | set the service to read-only mode |  |
| --datastore-request-hedging | enable request hedging | true |
| --datastore-request-hedging-initial-slow-value | initial value to use for slow datastore requests, before statistics have been collected (default 10ms) |  |
| --datastore-request-hedging-max-requests | maximum number of historical requests to consider | 1000000 |
| --datastore-request-hedging-quantile | quantile of historical datastore request time over which a request will be considered slow (default 0.95) |  |
| --datastore-revision-quantization-interval | boundary interval to which to round the quantized revision | 5s |
| --datastore-revision-quantization-max-staleness-percent | percentage of the revision quantization interval where we may opt to select a stale revision for performance reasons (default 0.1) |  |
| --datastore-spanner-credentials | path to service account key credentials file with access to the cloud spanner instance (omit to use application default credentials) |  |
| --datastore-spanner-emulator-host | URI of spanner emulator instance used for development and testing (e.g. localhost:9010) |  |
| --datastore-tx-overlap-key | static key to touch when writing to ensure transactions overlap (only used if --datastore-tx-overlap-strategy=static is set; cockroach driver only) (default "key") |  |
| --datastore-tx-overlap-strategy | strategy to generate transaction overlap keys ("request", "prefix", "static", "insecure") (cockroach driver only - see [https://spicedb.dev/d/crdb-overlap](https://spicedb.dev/d/crdb-overlap) for details)" | "static" |
| --datastore-watch-buffer-length | how many events the watch buffer should queue before forcefully disconnecting reader | 1024 |
| --disable-v1-schema-api | disables the V1 schema API |  |
| --disable-version-response | disables version response support in the API |  |
| --dispatch-cache-enabled | enable caching | true |
| --dispatch-cache-max-cost | upper bound cache size in bytes or percent of available memory | "30%" |
| --dispatch-cache-metrics | enable cache metrics | true |
| --dispatch-cache-num-counters | number of TinyLFU samples to track | 10000 |
| --dispatch-check-permission-concurrency-limit | maximum number of parallel goroutines to create for each check request or subrequest. defaults to --dispatch-concurrency-limit |  |
| --dispatch-cluster-addr | address to listen on to serve dispatch | ":50053" |
| --dispatch-cluster-cache-enabled | enable caching | true |
| --dispatch-cluster-cache-max-cost | upper bound cache size in bytes or percent of available memory | "70%" |
| --dispatch-cluster-cache-metrics | enable cache metrics | true |
| --dispatch-cluster-cache-num-counters | number of TinyLFU samples to track | 100000 |
| --dispatch-cluster-enabled | enable dispatch gRPC server |  |
| --dispatch-cluster-max-conn-age | how long a connection serving dispatch should be able to live | 30s |
| --dispatch-cluster-max-workers | set the number of workers for this server (0 value means 1 worker per request) |  |
| --dispatch-cluster-network | network type to serve dispatch ("tcp", "tcp4", "tcp6", "unix", "unixpacket") | "tcp" |
| --dispatch-cluster-tls-cert-path | local path to the TLS certificate used to serve dispatch |  |
| --dispatch-cluster-tls-key-path | local path to the TLS key used to serve dispatch |  |
| --dispatch-concurrency-limit | maximum number of parallel goroutines to create for each request or subrequest | 50 |
| --dispatch-hashring-replication-factor | set the replication factor of the consistent hasher used for the dispatcher | 100 |
| --dispatch-hashring-spread | set the spread of the consistent hasher used for the dispatcher | 1 |
| --dispatch-lookup-resources-concurrency-limit | maximum number of parallel goroutines to create for each lookup resources request or subrequest. defaults to --dispatch-concurrency-limit |  |
| --dispatch-lookup-subjects-concurrency-limit | maximum number of parallel goroutines to create for each lookup subjects request or subrequest. defaults to --dispatch-concurrency-limit |  |
| --dispatch-max-depth | maximum recursion depth for nested calls | 50 |
| --dispatch-reachable-resources-concurrency-limit | maximum number of parallel goroutines to create for each reachable resources request or subrequest. defaults to --dispatch-concurrency-limit |  |
| --dispatch-upstream-addr | upstream grpc address to dispatch to |  |
| --dispatch-upstream-ca-path | local path to the TLS CA used when connecting to the dispatch cluster |  |
| --dispatch-upstream-timeout | maximum duration of a dispatch call an upstream cluster before it times out | 1m0s |
| --grpc-addr | address to listen on to serve gRPC | ":50051" |
| --grpc-enabled | enable gRPC gRPC server | true |
| --grpc-max-conn-age | how long a connection serving gRPC should be able to live | 30s |
| --grpc-max-workers | set the number of workers for this server (0 value means 1 worker per request) |  |
| --grpc-network | network type to serve gRPC ("tcp", "tcp4", "tcp6", "unix", "unixpacket") | "tcp" |
| --grpc-preshared-key | preshared key(s) to require for authenticated requests |  |
| --grpc-shutdown-grace-period | amount of time after receiving sigint to continue serving |  |
| --grpc-tls-cert-path | local path to the TLS certificate used to serve gRPC |  |
| --grpc-tls-key-path | local path to the TLS key used to serve gRPC |  |
| -h, --help | help for serve |  |
| --http-addr | address to listen on to serve gateway | ":8443" |
| --http-enabled | enable http gateway server |  |
| --http-tls-cert-path | local path to the TLS certificate used to serve gateway |  |
| --http-tls-key-path | local path to the TLS key used to serve gateway |  |
| --max-caveat-context-size | maximum allowed size of request caveat context in bytes. A value of zero or less means no limit | 4096 |
| --max-datastore-read-page-size | limit on the maximum page size that we will load into memory from the datastore at one time | 1000 |
| --max-relationship-context-size | maximum allowed size of the context to be stored in a relationship | 25000 |
| --metrics-addr | address to listen on to serve metrics | ":9090" |
| --metrics-enabled | enable http metrics server | true |
| --metrics-tls-cert-path | local path to the TLS certificate used to serve metrics |  |
| --metrics-tls-key-path | local path to the TLS key used to serve metrics |  |
| --ns-cache-enabled | enable caching | true |
| --ns-cache-max-cost | upper bound cache size in bytes or percent of available memory | "16MiB" |
| --ns-cache-metrics | enable cache metrics | true |
| --ns-cache-num-counters | number of TinyLFU samples to track | 1000 |
| --schema-prefixes-required | require prefixes on all object definitions in schemas |  |
| --streaming-api-response-delay-timeout | max duration time elapsed between messages sent by the server-side to the client (responses) before the stream times out | 30s |
| --telemetry-ca-override-path |  |  |
| --telemetry-endpoint | endpoint to which telemetry is reported, empty string to disable | [https://telemetry.authzed.com/](https://telemetry.authzed.com) |
| --telemetry-interval | approximate period between telemetry reports, minimum |  |
| --update-relationships-max-preconditions-per-call | maximum number of preconditions allowed for WriteRelationships and DeleteRelationships calls | 1000 |
| --write-relationships-max-updates-per-call | maximum number of updates allowed for WriteRelationships calls | 1000 |

## `spiceDB serve-testing` Flags

| Flag | Description | Default |
| --- | --- | --- |
| --grpc-addr | address to listen on to serve gRPC | ":50051" |
| --grpc-enabled | enable gRPC gRPC server | true |
| --grpc-max-conn-age | how long a connection serving gRPC should be able to live | 30s |
| --grpc-max-workers | set the number of workers for this server (0 value means 1 worker per request) |  |
| --grpc-network | network type to serve gRPC ("tcp", "tcp4", "tcp6", "unix", "unixpacket") | "tcp" |
| --grpc-tls-cert-path | local path to the TLS certificate used to serve gRPC |  |
| --grpc-tls-key-path | local path to the TLS key used to serve gRPC |  |
| -h, --help | help for serve |  |
| --http-addr | address to listen on to serve gateway | ":8443" |
| --http-enabled | enable http gateway server |  |
| --http-tls-cert-path | local path to the TLS certificate used to serve gateway |  |
| --http-tls-key-path | local path to the TLS key used to serve gateway |  |
| --readonly-grpc-addr | address to listen on to serve read-only gRPC | ":50052" |
| --readonly-grpc-enabled | enable read-only gRPC gRPC server | true |
| --readonly-grpc-max-conn-age | how long a connection serving read-only gRPC should be able to live | 30s |
| --readonly-grpc-max-workers | set the number of workers for this server (0 value means 1 worker per request) |  |
| --readonly-grpc-network | network type to serve read-only gRPC ("tcp", "tcp4", "tcp6", "unix", "unixpacket") | "tcp" |
| --readonly-grpc-tls-cert-path | local path to the TLS certificate used to serve read-only gRPC |  |
| --readonly-grpc-tls-key-path | local path to the TLS key used to serve read-only gRPC |  |
| --readonly-http-addr | address to listen on to serve read-only HTTP | ":8082" |
| --readonly-http-enabled | enable http read-only HTTP server |  |
| --readonly-http-tls-cert-path | local path to the TLS certificate used to serve read-only HTTP |  |
| --readonly-http-tls-key-path | local path to the TLS key used to serve read-only HTTP |  |
| --update-relationships-max-preconditions-per-call | maximum number of preconditions allowed for WriteRelationships and DeleteRelationships calls | 1000 |
| --write-relationships-max-updates-per-call | maximum number of updates allowed for WriteRelationships calls | 1000 |

## `spicedb migrate` Flags

| Flag | Description | Default |
| --- | --- | --- |
| --datastore-conn-uri | connection string used by remote datastores (e.g. "postgres://postgres:password@localhost:5432/spicedb") |  |
| --datastore-engine | type of datastore to initialize ("cockroachdb", "mysql", "postgres", "spanner") | "memory" |
| --datastore-mysql-table-prefix | prefix to add to the name of all SpiceDB database tables |  |
| --datastore-spanner-credentials | path to service account key credentials file with access to the cloud spanner instance (omit to use application default credentials) |  |
| --datastore-spanner-emulator-host | URI of spanner emulator instance used for development and testing (e.g. localhost:9010) |  |
| -h, --help | help for serve |  |
| --migration-backfill-batch-size | number of items to migrate per iteration of a datastore backfill (default 1000) |  |
| --migration-timeout | defines a timeout for the execution of the migration, set to 1 hour by default (default 1h0m0s) |  |

## Global Flags

| Flag | Description | Default |
| --- | --- | --- |
| --log-format | format of logs ("auto", "console", "json") | "auto" |
| --log-level | verbosity of logging ("trace", "debug", "info", "warn", "error") | "info" |
| --otel-endpoint | OpenTelemetry collector endpoint - the endpoint can also be set by using environment variables |  |
| --otel-insecure | connect to the OpenTelemetry collector in plaintext |  |
| --otel-provider | OpenTelemetry provider for tracing ("none", "otlphttp", "otlpgrpc") | "none" |
| --otel-sample-ratio | ratio of traces that are sampled | 0.01 |
| --otel-service-name | service name for trace data | "spicedb" |
| --otel-trace-propagator | OpenTelemetry trace propagation format ("b3", "w3c", "ottrace") | "w3c" |
| --skip-release-check | if true, skips checking for new SpiceDB releases |  |
| --termination-log-path | define the path to the termination log file, which contains a JSON payload to surface as reason for termination - disabled by default |  |
