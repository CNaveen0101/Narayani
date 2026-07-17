Run mvn clean verify sonar:sonar \
WARNING: A terminally deprecated method in sun.misc.Unsafe has been called
WARNING: sun.misc.Unsafe::objectFieldOffset has been called by com.google.common.util.concurrent.AbstractFuture$UnsafeAtomicHelper (file:/usr/share/maven/lib/guava.jar)
WARNING: Please consider reporting this to the maintainers of class com.google.common.util.concurrent.AbstractFuture$UnsafeAtomicHelper
WARNING: sun.misc.Unsafe::objectFieldOffset will be removed in a future release
[INFO] Scanning for projects...
[WARNING] The artifact org.codehaus.mojo:sonar-maven-plugin:jar:4.0.0.4121 has been relocated to org.sonarsource.scanner.maven:sonar-maven-plugin:jar:4.0.0.4121: SonarQube plugin was moved to SonarSource organisation
[INFO] 
[INFO] ----------------< com.ammabiryani:amma-biryani-backend >----------------
[INFO] Building amma-biryani-backend 1.0.0
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- clean:3.3.2:clean (default-clean) @ amma-biryani-backend ---
[INFO] Deleting /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ amma-biryani-backend ---
[INFO] Copying 1 resource from src/main/resources to target/classes
[INFO] Copying 13 resources from src/main/resources to target/classes
[INFO] 
[INFO] --- compiler:3.11.0:compile (default-compile) @ amma-biryani-backend ---
[INFO] Changes detected - recompiling the module! :source
release 17] to target/classes
[INFO] 
[INFO] --- resources:3.3.1:testResources (default-testResources) @ amma-biryani-backend ---
[INFO] skip non existing resourceDirectory /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/src/test/resources
[INFO] 
[INFO] --- compiler:3.11.0:testCompile (default-testCompile) @ amma-biryani-backend ---
[INFO] No sources to compile
[INFO] 
[INFO] --- surefire:3.1.2:test (default-test) @ amma-biryani-backend ---
[INFO] No tests to run.
[INFO] 
[INFO] --- jar:3.3.0:jar (default-jar) @ amma-biryani-backend ---
[INFO] Building jar: /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/amma-biryani-backend-1.0.0.jar
[INFO] 
[INFO] --- spring-boot:3.2.5:repackage (repackage) @ amma-biryani-backend ---
[INFO] Replacing main artifact /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/amma-biryani-backend-1.0.0.jar with repackaged archive, adding nested dependencies in BOOT-INF/.
[INFO] The original artifact has been renamed to /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/amma-biryani-backend-1.0.0.jar.original
[INFO] 
[INFO] ----------------< com.ammabiryani:amma-biryani-backend >----------------
[INFO] Building amma-biryani-backend 1.0.0
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- sonar:4.0.0.4121:sonar (default-cli) @ amma-biryani-backend ---
[WARNING] 13:46:03.138 Using an unspecified version instead of an explicit plugin version may introduce breaking analysis changes at an unwanted time. It is highly recommended to use an explicit version, e.g. 'org.sonarsource.scanner.maven:sonar-maven-plugin:4.0.0.4121'.
[INFO] 13:46:03.155 Java 25.0.3 Ubuntu (64-bit)
[INFO] 13:46:03.156 Linux 7.0.0-1006-aws (amd64)
[INFO] 13:46:03.455 User cache: /home/ubuntu/.sonar/cache
[INFO] 13:46:03.589 Communicating with SonarQube Server 13.1.3.3768
[INFO] 13:46:03.612 Default locale: "en", source code encoding: "UTF-8"
[INFO] 13:46:05.161 Load global settings
[INFO] 13:46:05.443 Load global settings (done) | time=278ms
[INFO] 13:46:05.486 Server id: 147B411E-AZ9v-t3VqYbETTi2_-HK
[INFO] 13:46:05.502 Loading required plugins
[INFO] 13:46:05.503 Load plugins index
[INFO] 13:46:05.689 Load plugins index (done) | time=186ms
[INFO] 13:46:05.690 Load/download plugins
[INFO] 13:46:05.717 Load/download plugins (done) | time=27ms
[INFO] 13:46:06.467 Process project properties
[INFO] 13:46:06.519 Process project properties (done) | time=52ms
[INFO] 13:46:06.544 Project key: com.ammabiryani:amma-biryani-backend
[INFO] 13:46:06.545 Base dir: /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani
[INFO] 13:46:06.545 Working dir: /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/sonar
[INFO] 13:46:06.572 Load project settings for component key: 'com.ammabiryani:amma-biryani-backend'
[INFO] 13:46:06.688 Load project settings for component key: 'com.ammabiryani:amma-biryani-backend' (done) | time=116ms
[INFO] 13:46:06.729 Load quality profiles
[INFO] 13:46:06.891 Load quality profiles (done) | time=162ms
[INFO] 13:46:06.917 Auto-configuring with CI 'Github Actions'
[INFO] 13:46:07.004 Load active rules
[INFO] 13:46:08.058 Load active rules (done) | time=1055ms
[INFO] 13:46:08.076 Load analysis cache
[INFO] 13:46:08.116 Load analysis cache (954 bytes) | time=40ms
[INFO] 13:46:08.485 Preprocessing files...
[INFO] 13:46:08.682 2 languages detected in 16 preprocessed files (done) | time=180ms
[INFO] 13:46:08.683 0 files ignored because of scm ignore settings
[INFO] 13:46:08.687 Loading plugins for detected languages
[INFO] 13:46:08.688 Load/download plugins
[INFO] 13:46:08.717 Load/download plugins (done) | time=29ms
[INFO] 13:46:08.992 Load project repositories
[INFO] 13:46:09.195 Load project repositories (done) | time=203ms
[INFO] 13:46:09.237 Indexing files...
[INFO] 13:46:09.238 Project configuration:
[INFO] 13:46:09.252 16 files indexed (done) | time=13ms
[INFO] 13:46:09.254 Quality profile for java: Sonar way
[INFO] 13:46:09.255 Quality profile for xml: Sonar way
[INFO] 13:46:09.255 ------------- Run sensors on module amma-biryani-backend
[INFO] 13:46:09.407 Load metrics repository
[INFO] 13:46:09.478 Load metrics repository (done) | time=72ms
[INFO] 13:46:11.143 Sensor JavaSensor [java]
[INFO] 13:46:11.154 Configured Java source version (sonar.java.source): 17, preview features enabled (sonar.java.enablePreview): false
[INFO] 13:46:11.203 Server-side caching is enabled. The Java analyzer will not try to leverage data from a previous analysis.
[INFO] 13:46:11.206 Using ECJ batch to parse 15 Main java source files with batch size 50 KB.
[INFO] 13:46:11.852 Starting batch processing.
[INFO] 13:46:12.869 The Java analyzer cannot skip unchanged files in this context. A full analysis is performed for all files.
[INFO] 13:46:15.643 100% analyzed
[INFO] 13:46:15.643 Batch processing: Done.
[INFO] 13:46:15.647 Did not optimize analysis for any files, performed a full analysis for all 15 files.
[INFO] 13:46:15.650 No "Test" source files to scan.
[INFO] 13:46:15.651 No "Generated" source files to scan.
[INFO] 13:46:15.654 Sensor JavaSensor [java] (done) | time=4510ms
[INFO] 13:46:15.654 Sensor SurefireSensor [java]
[INFO] 13:46:15.657 parsing [/home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/surefire-reports]
[INFO] 13:46:15.658 Sensor SurefireSensor [java] (done) | time=3ms
[INFO] 13:46:15.658 Sensor XML Sensor [xml]
[INFO] 13:46:15.664 1 source file to be analyzed
[INFO] 13:46:15.973 1/1 source file has been analyzed
[INFO] 13:46:15.973 Sensor XML Sensor [xml] (done) | time=315ms
[INFO] 13:46:15.973 Sensor JaCoCo XML Report Importer [jacoco]
[INFO] 13:46:15.977 'sonar.coverage.jacoco.xmlReportPaths' is not defined. Using default locations: target/site/jacoco/jacoco.xml,target/site/jacoco-it/jacoco.xml,build/reports/jacoco/test/jacocoTestReport.xml
[INFO] 13:46:15.978 No report imported, no coverage information will be imported by JaCoCo XML Report Importer
[INFO] 13:46:15.978 Sensor JaCoCo XML Report Importer [jacoco] (done) | time=4ms
[INFO] 13:46:15.978 Sensor IaC hadolint report Sensor [iac]
[INFO] 13:46:15.980 Sensor IaC hadolint report Sensor [iac] (done) | time=1ms
[INFO] 13:46:15.980 Sensor Java Config Sensor [iac]
[INFO] 13:46:15.989 There are no files to be analyzed for the Java language
[INFO] 13:46:15.989 Sensor Java Config Sensor [iac] (done) | time=9ms
[INFO] 13:46:15.990 Sensor IaC Docker Sensor [iac]
[INFO] 13:46:15.992 There are no files to be analyzed for the Docker language
[INFO] 13:46:15.992 Sensor IaC Docker Sensor [iac] (done) | time=2ms
[INFO] 13:46:15.992 Sensor TextAndSecretsSensor [text]
[INFO] 13:46:16.033 Available processors: 2
[INFO] 13:46:16.034 Using 2 threads for analysis.
[INFO] 13:46:16.567 The property "sonar.tests" is not set. To improve the analysis accuracy, we categorize a file as a test file if any of the following is true:
  * The filename starts with "test"
  * The filename contains "test." or "tests."
  * Any directory in the file path is named: "doc", "docs", "test", "tests", "mock" or "mocks"
  * Any directory in the file path has a name ending in "test" or "tests"
[INFO] 13:46:16.613 Start fetching files for the text and secrets analysis
[INFO] 13:46:16.624 Using Git CLI to retrieve dirty files
[INFO] 13:46:16.640 Retrieving language associated files and files included via "sonar.text.inclusions" that are tracked by git
[INFO] 13:46:16.641 Starting the text and secrets analysis
[INFO] 13:46:16.643 16 source files to be analyzed for the text and secrets analysis
[INFO] 13:46:16.707 16/16 source files have been analyzed for the text and secrets analysis
[INFO] 13:46:16.710 Sensor TextAndSecretsSensor [text] (done) | time=717ms
[INFO] 13:46:16.714 ------------- Run sensors on project
[INFO] 13:46:17.064 Sensor JaCoCo Aggregate XML Report Importer [jacoco]
[INFO] 13:46:17.065 Sensor JaCoCo Aggregate XML Report Importer [jacoco] (done) | time=0ms
[INFO] 13:46:17.068 Sensor IaC Project Sensor [iac]
[INFO] 13:46:17.072 Sensor IaC Project Sensor [iac] (done) | time=4ms
[INFO] 13:46:17.072 Sensor JavaProjectSensor [java]
[INFO] 13:46:17.077 Sensor JavaProjectSensor [java] (done) | time=4ms
[INFO] 13:46:17.077 Sensor Zero Coverage Sensor
[INFO] 13:46:17.098 Sensor Zero Coverage Sensor (done) | time=20ms
[INFO] 13:46:17.098 Sensor Java CPD Block Indexer
[INFO] 13:46:17.193 Sensor Java CPD Block Indexer (done) | time=93ms
[INFO] 13:46:17.194 ------------- Gather SCA dependencies on project
[INFO] 13:46:17.212 Dependency analysis skipped
[INFO] 13:46:17.224 SCM Publisher SCM provider for this project is: git
[INFO] 13:46:17.226 SCM Publisher 16 source files to be analyzed
[WARNING] 13:46:17.229 Shallow clone detected, no blame information will be provided. You can convert to non-shallow with 'git fetch --unshallow'.
[INFO] 13:46:17.232 SCM Publisher 0/16 source files have been analyzed (done) | time=6ms
[WARNING] 13:46:17.233 Missing blame information for the following files:
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/controller/MenuController.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/service/OrderService.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/model/OrderItem.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/dto/OrderRequest.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/service/MenuService.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/model/Order.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/config/GlobalExceptionHandler.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/config/DataSeeder.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/repository/MenuItemRepository.java
[WARNING] 13:46:17.234   * pom.xml
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/config/WebConfig.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/model/OrderStatus.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/model/MenuItem.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/controller/OrderController.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/AmmaBiryaniApplication.java
[WARNING] 13:46:17.234   * src/main/java/com/ammabiryani/repository/OrderRepository.java
[WARNING] 13:46:17.235 This may lead to missing/broken features in SonarQube
[INFO] 13:46:17.242 CPD Executor 5 files had no CPD blocks
[INFO] 13:46:17.243 CPD Executor Calculating CPD for 10 files
[INFO] 13:46:17.260 CPD Executor CPD calculation finished (done) | time=16ms
[INFO] 13:46:17.267 SCM revision ID 'd311a007794bbde8c20babf37d98d807b8dee184'
[INFO] 13:46:17.418 Analysis report generated in 141ms, dir size=332.4 kB
[INFO] 13:46:17.496 Analysis report compressed in 76ms, zip size=65.2 kB
[INFO] 13:46:17.576 Analysis report uploaded in 80ms
[INFO] 13:46:17.578 ANALYSIS SUCCESSFUL, you can find the results at: http://3.80.46.129:9000/dashboard?id=com.ammabiryani%3Aamma-biryani-backend
[INFO] 13:46:17.579 Note that you will be able to access the updated dashboard once the server has processed the submitted analysis report
[INFO] 13:46:17.579 More about the report processing at http://3.80.46.129:9000/api/ce/task?id=0f504241-b13a-42db-8588-a58b115ceb91
[INFO] 13:46:17.592 Analysis total time: 11.789 s
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  20.925 s
[INFO] Finished at: 2026-07-17T13:46:17Z
[INFO] ------------------------------------------------------------------------
30s
Run cd /home/ubuntu/dependency-check
  cd /home/ubuntu/dependency-check
  ./bin/dependency-check.sh \
  --scan $GITHUB_WORKSPACE \
  --out $GITHUB_WORKSPACE/reports \
  --data /home/ubuntu/dependency-check/data \
  --noupdate
  shell: /usr/bin/bash -e {0}
  
[INFO] 
Dependency-Check is an open source tool performing a best effort analysis of 3rd party dependencies; false positives and false negatives may exist in the analysis performed by the tool. Use of the tool and the reporting provided constitutes acceptance for use in an AS IS condition, and there are NO warranties, implied or otherwise, with regard to the analysis or its use. Any use of the tool and the reporting provided is at the user's risk. In no event shall the copyright holder or OWASP be held liable for any damages whatsoever arising out of or in connection with the use of this tool, the analysis performed, or the resulting report.
   About ODC: https://jeremylong.github.io/DependencyCheck/general/internals.html
   False Positives: https://jeremylong.github.io/DependencyCheck/general/suppression.html
💖 Sponsor: https://github.com/sponsors/jeremylong
[INFO] Analysis Started
[INFO] Finished Archive Analyzer (2 seconds)
[INFO] Finished File Name Analyzer (0 seconds)
[INFO] Finished Jar Analyzer (0 seconds)
[INFO] Finished Central Analyzer (2 seconds)
[INFO] Finished Dependency Merging Analyzer (0 seconds)
[INFO] Finished Hint Analyzer (0 seconds)
[INFO] Finished Version Filter Analyzer (0 seconds)
WARNING: A restricted method in java.lang.foreign.Linker has been called
WARNING: java.lang.foreign.Linker::downcallHandle has been called by org.apache.lucene.store.PosixNativeAccess in an unnamed module (file:/home/ubuntu/dependency-check/lib/lucene-core-9.12.0.jar)
WARNING: Use --enable-native-access=ALL-UNNAMED to avoid a warning for callers in this module
WARNING: Restricted methods will be blocked in a future release unless native access is enabled
Jul 17, 2026 1:46:35 PM org.apache.lucene.store.MemorySegmentIndexInputProvider <init>
INFO: Using MemorySegmentIndexInput and native madvise support with Java 21 or later; to disable start with -Dorg.apache.lucene.store.MMapDirectory.enableMemorySegments=false
Jul 17, 2026 1:46:35 PM org.apache.lucene.internal.vectorization.VectorizationProvider lookup
WARNING: You are running with Java 23 or later. To make full use of the Vector API, please update Apache Lucene.
[INFO] Created CPE Index (4 seconds)
[WARN] Hosted Suppressions file is empty or missing - attempting to force the update
[WARN] Empty Hosted Suppression file after update, results may contain false positives already resolved by the DependencyCheck project due to failed download of the hosted suppression file
[INFO] Finished CPE Analyzer (8 seconds)
[INFO] Finished False Positive Analyzer (0 seconds)
[INFO] Finished NVD CVE Analyzer (0 seconds)
[INFO] Finished RetireJS Analyzer (0 seconds)
[WARN] An error occurred while analyzing '/home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/src/main/resources/static/script.js' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/amma-biryani-backend-1.0.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/target/classes/static/script.js' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-boot-jarmode-layertools-3.2.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-jcl-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-core-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.activation-api-2.1.3.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.xml.bind-api-4.0.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/mysql-connector-j-8.3.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/h2-2.2.224.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.validation-api-3.0.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/hibernate-validator-8.0.1.Final.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/tomcat-embed-el-10.1.20.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-aspects-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/slf4j-api-2.0.13.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-tx-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-orm-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-data-commons-3.2.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/antlr4-runtime-4.13.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-data-jpa-3.2.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.inject-api-2.0.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/istack-commons-runtime-4.1.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/txw2-4.0.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/angus-activation-2.0.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jaxb-core-4.0.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jaxb-runtime-4.0.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/byte-buddy-1.14.13.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/classmate-1.6.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jandex-3.1.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/hibernate-commons-annotations-6.0.6.Final.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jboss-logging-3.5.3.Final.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.transaction-api-2.0.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.persistence-api-3.1.0.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/hibernate-core-6.4.4.Final.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-jdbc-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/HikariCP-5.0.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/aspectjweaver-1.9.22.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-expression-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-context-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-aop-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-webmvc-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/micrometer-commons-1.12.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/micrometer-observation-1.12.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-beans-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-web-6.1.6.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/tomcat-embed-websocket-10.1.20.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/tomcat-embed-core-10.1.20.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jackson-module-parameter-names-2.15.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jackson-datatype-jsr310-2.15.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jackson-datatype-jdk8-2.15.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jackson-annotations-2.15.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jackson-core-2.15.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/snakeyaml-2.2.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jackson-databind-2.15.4.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jakarta.annotation-api-2.1.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/log4j-api-2.21.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/jul-to-slf4j-2.0.13.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/log4j-to-slf4j-2.21.1.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/logback-core-1.4.14.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/logback-classic-1.4.14.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-boot-autoconfigure-3.2.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/lib/spring-boot-3.2.5.jar' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/1/BOOT-INF/classes/static/script.js' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/9/org/h2/server/web/res/table.js' (Sonatype OSS Index Analyzer).
[WARN] An error occurred while analyzing '/tmp/dctemp4fae1def-3aa9-4873-a692-5a07e96277ca/check4245229363501149904tmp/9/org/h2/server/web/res/tree.js' (Sonatype OSS Index Analyzer).
[INFO] Finished Sonatype OSS Index Analyzer (2 seconds)
[INFO] Finished Vulnerability Suppression Analyzer (0 seconds)
[INFO] Finished Known Exploited Vulnerability Analyzer (0 seconds)
[INFO] Finished Dependency Bundling Analyzer (0 seconds)
[INFO] Finished Unused Suppression Rule Analyzer (0 seconds)
[INFO] Analysis Complete (18 seconds)
[INFO] Writing HTML report to: /home/ubuntu/actions-runner/_work/amma-biryani/amma-biryani/reports/dependency-check-report.html
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
