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
