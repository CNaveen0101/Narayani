Using Deployments my pods are running. In this I mention the replica count aswell. Replicas: 3. For example if I have two worker nodes, in this 3 pods are running. 2 pods runs on Node A, once pod running on Node B.

Cluster Ip: If pod 1 can talk to pod 3 using cluster ip it talk to it. Cluster Ip is a service and it is used for internal communication within a cluster.

Nodeport: If I want to access the application externally at the time I can access the application by using Node Ip. But the drawback is we not sure in which node our application is running. For testing purpose we are using this.

Loadbalancer: It is used to access the application externally. It creates the loadbalancer in cloud platform by using loadbalancer DNS we will access the application. But the point is I want to know how the traffic will reach my pod.

Internet  --> Loadbalancer --> It is coming through Nodeport or clusterip --> Pod --> Application


