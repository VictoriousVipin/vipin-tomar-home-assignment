# Multi-tier Architecture on Kubernetes (Node.js + PostgreSQL)

## Repository URL

GitHub: [https://github.com/VictoriousVipin/vipin-tomar-home-assignment](https://github.com/VictoriousVipin/vipin-tomar-home-assignment)

## Docker Hub Image

API Image: [https://hub.docker.com/r/victoriousvipin/customer-api](https://hub.docker.com/r/victoriousvipin/customer-api)

## Service API Endpoint

Ingress URL: http://<INGRESS_STATIC_IP>/customers

## Contents

-   Node.js API with PostgreSQL backend
-   Exposed via Ingress
-   4 API replicas, 1 DB replica
-   Persistent volume for DB
-   ConfigMap & Secret used
