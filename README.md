For Microservices

1. Create 3 microservice application. Profile application, Payment application.
2. Just create simple docker image and run as a container to check all 3 application working successfully
3. Push the 3 images into Dockerhub.
4. Create the 3 deployment file for 3 different application.
5. Create 3 clusterip service.yaml. 
6. Install ingress controller
7. Write ingress.yaml file and mention all the three application.
8. Just check whether I am able to access or not

Application port 5000
Homeapplication = 8989
Profileapplication = 8080
Paymentapplication = 9000


apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-home-deployment
  labels:
    app: home
spec:
  replicas: 3
  selector:
    matchLabels:
      app: home
  template:
    metadata:
      labels:
        app: home
    spec:
      containers:
      - name: homecontainer
        image: naveen0101/homeapplication:latest
        ports:
        - containerPort: 5000

------------------------------

apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-profile-deployment
  labels:
    app: profile
spec:
  replicas: 3
  selector:
    matchLabels:
      app: profile
  template:
    metadata:
      labels:
        app: profile
    spec:
      containers:
      - name: profilecontainer
        image: naveen0101/profileapplication:latest
        ports:
        - containerPort: 5000

---------------------------------

apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-payment-deployment
  labels:
    app: payment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: payment
  template:
    metadata:
      labels:
        app: payment
    spec:
      containers:
      - name: paymentcontainer
        image: naveen0101/paymntapplication:latest
        ports:
        - containerPort: 5000

--------------------------

service - ClusterIp

apiVersion: v1
kind: Service

metadata:
  name: home-service
 
spec:
  selector:
    app: home
  ports:
  - port: 80
    targetPort: 5000

------------------------

apiVersion: v1
kind: Service

metadata:
  name: profile-service
 
spec:
  selector:
    app: profile
  ports:
  - port: 80
    targetPort: 5000

-------------------------

apiVersion: v1
kind: Service

metadata:
  name: payment-service
 
spec:
  selector:
    app: payment
  ports:
  - port: 80
    targetPort: 5000

----------------------


apiVersion: networking.k8s.io/v1
kind: Ingress
 
metadata:
  name: narayani-ingress
 
spec:
  ingressClassName: nginx
  rules:
  - host: navionline.in
 
    http:
      paths:
 
      - path: /home
        pathType: Prefix
 
        backend:
          service:
            name: home-service
            port:
              number: 80

      - path: /profile
        pathType: Prefix
 
        backend:
          service:
            name: profile-service
            port:
              number: 80

      - path: /payment
        pathType: Prefix
 
        backend:
          service:
            name: payment-service
            port:
              number: 80






