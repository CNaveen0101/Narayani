I completed the learning of K8S. In this learning I completed the important topics of

Architecture
What is cluster
What is Master node and worker node
How it is working
Deployment = Used to manage stateless application eg. Web application
Statefulset = Used for stateful application eg> Database
Demonset = Ensure one pod running on every worker node. For monitoring purpose
Service = It is used to expose the application outside of the cluster
ClusterIP = Internal communication
Nodeport = Access the application by using nodeip + port
Loadbalancer = Access application by using loadbalancer created on cloudprovider
Ingress = It is like a configuration files and in this we will mention the ruting rules such as path based routing, host based routing, TLS/SSL termination
Ingress controller = It is a software that runs inside the k8s cluster and it is used to route the traffic based on ingress rules.
ConfigMap = It is used to store non sensitive information such as application data, environmental variables and configuration data. It is used to separate configuration information from the application code.
Secret = It is used to sensitive information such as password, api tokens, certificates. By suing we cannot hardcode the sensitive information in the application code
Probe = It is a health check service in k8s performed by kubelet
Startup probe = Kubelet will check application started successfully or not. If not it restart the container
Liveness probe = It will check application is alive or not. If not it restart the container
Readiness probe = It will check application is ready to receive the traffic or not. If not it remove the pod from the service endpoint
NodeAffinity: Pod will decide to run on the node or not by using pod labels. It is used to placed the workloads on the nodes such as gpu nodes, ssd nodes, production nodes
Taint and Toleration : IN this method node will decide pod should should on the node or not. Taint is added on node. Tolerated is attached on pod. Taint node will decide tolerated pod will run on node or not
RBAC = RBAC s k8s resource it will decide who can perform what actions on which resources.
Role = Namespace level
Rolebinding= Attach the namespace role to the user, group and service accounts
ClusterRole= Entire cluster level access
ClusterRoleBinding = Attach the entire cluster role to the user, group and service accounts
Volume = Volume is a k8s resource and it used for our data should be persistent in k8s. Data should not lost when the pod deleted, restarted or unhealthy
Emptydir = For temporary purpose
Hostpath = Completely share the host file system. Not recommednded
Persistent Volume = This method is used to store the data
Deployment strategies = Recreate, Rolling update, Blue Green Deployment, Canary Deployment.
HPA (Horizontal Pod Autoscaler) = Increase the pod count
VPA (Vertical pod Autoscaler) = Increase the pod resources


