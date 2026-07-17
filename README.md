Dependency-Check is an open source tool performing a best effort analysis of 3rd party dependencies; false positives and false negatives may exist in the analysis performed by the tool. Use of the tool and the reporting provided constitutes acceptance for use in an AS IS condition, and there are NO warranties, implied or otherwise, with regard to the analysis or its use. Any use of the tool and the reporting provided is at the user's risk. In no event shall the copyright holder or OWASP be held liable for any damages whatsoever arising out of or in connection with the use of this tool, the analysis performed, or the resulting report.
   About ODC: https://jeremylong.github.io/DependencyCheck/general/internals.html
   False Positives: https://jeremylong.github.io/DependencyCheck/general/suppression.html
💖 Sponsor: https://github.com/sponsors/jeremylong
[INFO] Analysis Started
[INFO] Finished Archive Analyzer (1 seconds)
[INFO] Finished File Name Analyzer (0 seconds)
[INFO] Finished Jar Analyzer (1 seconds)
[INFO] Finished Central Analyzer (4 seconds)
Error:  ----------------------------------------------------
Error:  .NET Assembly Analyzer could not be initialized and at least one 'exe' or 'dll' was scanned. The 'dotnet' executable could not be found on the path; either disable the Assembly Analyzer or add the path to dotnet core in the configuration.
Error:  The dotnet 8.0 core runtime or SDK is required to analyze assemblies
Error:  ----------------------------------------------------
[INFO] Finished Dependency Merging Analyzer (0 seconds)
[INFO] Finished Hint Analyzer (0 seconds)
[INFO] Finished Version Filter Analyzer (0 seconds)
WARNING: A restricted method in java.lang.foreign.Linker has been called
WARNING: java.lang.foreign.Linker::downcallHandle has been called by org.apache.lucene.store.PosixNativeAccess in an unnamed module (file:/home/ubuntu/dependency-check/lib/lucene-core-9.12.0.jar)
WARNING: Use --enable-native-access=ALL-UNNAMED to avoid a warning for callers in this module
WARNING: Restricted methods will be blocked in a future release unless native access is enabled
Jul 17, 2026 1:33:42 PM org.apache.lucene.store.MemorySegmentIndexInputProvider <init>
INFO: Using MemorySegmentIndexInput and native madvise support with Java 21 or later; to disable start with -Dorg.apache.lucene.store.MMapDirectory.enableMemorySegments=false
Jul 17, 2026 1:33:43 PM org.apache.lucene.internal.vectorization.VectorizationProvider lookup
WARNING: You are running with Java 23 or later. To make full use of the Vector API, please update Apache Lucene.
[INFO] Created CPE Index (5 seconds)
[WARN] Hosted Suppressions file is empty or missing - attempting to force the update
[WARN] Empty Hosted Suppression file after update, results may contain false positives already resolved by the DependencyCheck project due to failed download of the hosted suppression file
[INFO] Finished CPE Analyzer (8 seconds)
[INFO] Finished False Positive Analyzer (0 seconds)
[INFO] Finished NVD CVE Analyzer (0 seconds)
[WARN] Retire JS repository is empty or missing - attempting to force the update
[INFO] Finished RetireJS Analyzer (0 seconds)
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/android-json-0.0.20131108.vaadin1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/annotations-26.0.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/aho-corasick-double-array-trie-1.2.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/ant-1.10.15.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/bcprov-jdk18on-1.78.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/bcpg-jdk18on-1.78.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/checker-qual-3.43.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-beanutils-1.9.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-cli-1.9.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-codec-1.18.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-collections-3.2.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-collections4-4.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-compress-1.27.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-dbcp2-2.13.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-digester-2.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-io-2.18.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-jcs3-core-3.2.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-lang3-3.17.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-logging-1.3.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-pool2-2.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-text-1.13.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/commons-validator-1.9.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/compiler-0.9.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/cpe-parser-2.1.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/dependency-check-core-12.1.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/dependency-check-cli-12.1.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/dependency-check-utils-12.1.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/error_prone_annotations-2.36.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/failureaccess-1.0.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/gson-2.9.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/guava-33.4.0-jre.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/h2-2.3.232.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/httpclient5-5.4.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/httpcore5-5.3.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/httpcore5-h2-5.3.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/j2objc-annotations-3.0.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jackson-annotations-2.18.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jackson-core-2.18.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jackson-databind-2.18.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jackson-dataformat-yaml-2.18.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jackson-datatype-jsr310-2.18.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jackson-module-blackbird-2.18.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jakarta.json-2.0.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/javax.activation-api-1.2.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jakarta.transaction-api-1.3.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/javax.inject-1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/javax.ws.rs-api-2.0.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jaxb-api-2.3.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jcs3-slf4j-1.0.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jdiagnostics-1.0.7.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jmustache-1.16.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/joda-time-2.13.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jspecify-1.0.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jsoup-1.18.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/jsr305-3.0.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/logback-classic-1.2.13.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/logback-core-1.2.13.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/lucene-analysis-common-9.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/lucene-core-9.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/lucene-queries-9.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/lucene-facet-9.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/lucene-sandbox-9.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/lucene-queryparser-9.12.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/minlog-1.3.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/open-vulnerability-clients-7.2.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/ossindex-service-api-1.8.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/ossindex-service-client-1.8.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/package-url-java-1.2.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/packager-core-0.21.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/packager-rpm-0.21.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/packageurl-java-1.5.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/retirejs-core-3.0.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/pecoff4j-0.0.2.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/slf4j-api-1.7.36.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/semver4j-5.6.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/snakeyaml-2.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/spotbugs-annotations-4.9.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/velocity-engine-core-2.4.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/toml4j-0.7.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/dependency-check/lib/xz-1.9.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp21f2e3cc-4107-43a1-9fdf-5128a1f3bf4d/check2863620405331274075tmp/32/GrokAssembly.dll' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp21f2e3cc-4107-43a1-9fdf-5128a1f3bf4d/check2863620405331274075tmp/36/org/h2/server/web/res/table.js' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp21f2e3cc-4107-43a1-9fdf-5128a1f3bf4d/check2863620405331274075tmp/36/org/h2/server/web/res/tree.js' (Sonatype OSS Index Analyzer).
[INFO] Finished Sonatype OSS Index Analyzer (2 seconds)
[INFO] Finished Vulnerability Suppression Analyzer (0 seconds)
[INFO] Finished Known Exploited Vulnerability Analyzer (0 seconds)
[INFO] Finished Dependency Bundling Analyzer (0 seconds)
[INFO] Finished Unused Suppression Rule Analyzer (0 seconds)
[INFO] Analysis Complete (20 seconds)
[INFO] Writing HTML report to: /home/ubuntu/dependency-check/reports/dependency-check-report.html
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error:  Failed to request component-reports
Error: Process completed with exit code 14.
0s
Cleaning up orphan processes
