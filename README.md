ubuntu@ip-172-31-25-77:~/actions-runner$ ls
_diag  actions-runner-linux-x64-2.335.1.tar.gz  config.sh  externals                run-helper.sh.template  runsvc.sh      svc.sh
_work  bin                                      env.sh     run-helper.cmd.template  run.sh                  safe_sleep.sh
ubuntu@ip-172-31-25-77:~/actions-runner$ ./run.sh --version
2.335.1
Runner listener exit with 0 return code, stop the service, no retry needed.
Exiting runner...
ubuntu@ip-172-31-25-77:~/actions-runner$ java --version
openjdk 25.0.3 2026-04-21
OpenJDK Runtime Environment (build 25.0.3+9-2-26.04.2-Ubuntu)
OpenJDK 64-Bit Server VM (build 25.0.3+9-2-26.04.2-Ubuntu, mixed mode, sharing)
ubuntu@ip-172-31-25-77:~/actions-runner$ ls -l /home/ubuntu/actions-runner/_work/amma-biryani//amma-biryani/reports
ls: cannot access '/home/ubuntu/actions-runner/_work/amma-biryani//amma-biryani/reports': No such file or directory
ubuntu@ip-172-31-25-77:~/actions-runner$ cd  /home/ubuntu/actions-runner/_work/amma-biryani//amma-biryani/
ubuntu@ip-172-31-25-77:~/actions-runner/_work/amma-biryani/amma-biryani$ ls
Dockerfile  README.md  pom.xml  sonar-project.properties  src  target
ubuntu@ip-172-31-25-77:~/actions-runner/_work/amma-biryani/amma-biryani$ 
