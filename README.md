Create 3 IAM user - developer-Dev@1234, tester-Test@1234,devops-Devops@1234
Give the eks service access to all
Need to create cluster and create node group, namespace and pod.
Now the peoples trying to get the pods information
If I want to restrict access, I create role and assign the role to the user..

aws eks update-kubeconfig --region ap-south-2 --name testcluster

-------------------------------------------------------------------------------------

pod.yaml

apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod        
  namespace: dev
  labels:
    app: my-app
spec:
  containers:
    - name: my-app-container
      image: naveen0101/narayani-image:latest
      ports:
        - containerPort: 80
----------------------------------------------------------------------
Role.yaml

apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: dev
  name: pod-reader
rules:
- apiGroups: [""]          # "" indicates core API group
  resources: ["pods"]      # resources this role can access
  verbs: ["get", "list", "watch"]  # allowed actions


-----------------

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods-binding
  namespace: dev
subjects:
- kind: User
  name: developer
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
