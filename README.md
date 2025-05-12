ProjectBolt - Full DevOps Deployment Guide ⚡
📌 Overview
ProjectBolt is a containerized microservices project designed to run in a DevOps environment, integrating CI/CD, monitoring, observability, and autoscaling using: ✅ GitHub Actions, ArgoCD & Jenkins for CI/CD ✅ Istio Service Mesh for networking & routing ✅ Prometheus, Grafana & Kiali for monitoring ✅ Kubernetes Horizontal Pod Autoscaler (HPA) for scaling

This guide provides a step-by-step setup, including deployment files, ingress rules, and how to expose services externally.

🔹 1. Prerequisites
Before starting, ensure you have installed: ✅ Docker (docker -v) ✅ Kubernetes (kubectl) (kubectl version --client) ✅ Minikube (minikube version) ✅ Helm (helm version) ✅ Istioctl (istioctl version) ✅ ArgoCD CLI (argocd version) ✅ Jenkins (systemctl status jenkins if using local server)

If any tool is missing, install it following their official documentation.

⚡ 2. Setting Up ProjectBolt
🔹 Step 1: Extract ProjectBolt Repository
Download and unzip ProjectBolt:

bash
unzip projectbolt.zip -d projectbolt
cd projectbolt
🔹 Step 2: Build and Tag Docker Image
bash
docker build -t projectbolt:1.0 .
docker tag projectbolt:1.0 projectbolt:latest
Verify the image is created:

bash
docker images | grep projectbolt
☸️ 3. Deploying on Kubernetes with Minikube
🔹 Step 1: Start Minikube
bash
minikube start
kubectl get nodes
🔹 Step 2: Load ProjectBolt Image into Minikube
bash
minikube image load projectbolt:latest
🔹 Step 3: Apply Kubernetes Deployment & Routing
bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/virtual-service.yaml
Verify pods:

bash
kubectl get pods -n default
🔹 4. Setting Up CI/CD with GitHub Actions, ArgoCD & Jenkins
🔹 Step 1: Configure GitHub Actions Pipeline
Create .github/workflows/deploy.yml:

yaml
name: Deploy ProjectBolt

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Build Docker Image
        run: docker build -t projectbolt:latest .

      - name: Push to Container Registry
        run: docker push your-dockerhub-username/projectbolt:latest

      - name: Deploy to Kubernetes
        run: kubectl apply -f k8s/deployment.yaml
🔹 Step 2: Set Up ArgoCD for Continuous Deployment
Install ArgoCD:

bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
Expose the ArgoCD UI:

bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
Access: http://localhost:8080

🔹 Step 3: Jenkins CI/CD Setup
Deploy Jenkins on Kubernetes:

bash
helm install jenkins jenkins/jenkins --namespace devops
Expose Jenkins UI:

bash
kubectl port-forward svc/jenkins -n devops 8081:8080
Access: http://localhost:8081

🔹 5. Configuring Istio Service Mesh
🔹 Step 1: Install Istio
bash
istioctl install --set profile=demo -y
Verify services:

bash
kubectl get svc -n istio-system
🔹 Step 2: Apply Istio Routing
bash
kubectl apply -f istio/gateway.yaml
kubectl apply -f istio/virtual-service.yaml
kubectl apply -f istio/destination-rule.yaml
Expose Istio UI:

bash
kubectl port-forward svc/istio-ingressgateway -n istio-system 15021:15021
Access: http://localhost:15021

📊 6. Monitoring with Prometheus, Grafana & Kiali
🔹 Step 1: Install Prometheus
bash
helm install prometheus prometheus-community/prometheus --namespace monitoring
Expose UI:

bash
kubectl port-forward svc/prometheus-server -n monitoring 9090:80
Access: http://localhost:9090

🔹 Step 2: Install Grafana
bash
helm install grafana grafana/grafana --namespace monitoring
Expose UI:

bash
kubectl port-forward svc/grafana -n monitoring 3000:80
Access: http://localhost:3000

🔹 Step 3: Install Kiali
bash
helm install kiali-server kiali/kiali-server --namespace istio-system
Expose UI:

bash
kubectl port-forward svc/kiali -n istio-system 20001:20001
Access: http://localhost:20001

📈 7. Scaling with Kubernetes HPA
🔹 Step 1: Enable Metrics Server
bash
minikube addons enable metrics-server
🔹 Step 2: Apply Horizontal Pod Autoscaler
bash
kubectl autoscale deployment projectbolt --cpu-percent=80 --min=1 --max=5
Verify autoscaler:

bash
kubectl get hpa
🚀 8. Final Verification
✅ Check ProjectBolt’s pods and services:

bash
kubectl get pods
kubectl get svc
✅ Access logs if needed:

bash
kubectl logs <pod-name>
✅ Validate Istio, Prometheus, Grafana & Kiali integrations.

💡 Troubleshooting
🔹 External IP not accessible? → Run kubectl get svc -n istio-system to check assigned IP 🔹 Pod stuck in ContainerCreating? → Check kubectl describe pod <pod-name> 🔹 PVC not binding? → Delete stuck PVC: kubectl delete pvc <pvc-name>

📌 Next Steps
✅ Enhance CI/CD pipelines with ArgoCD & Jenkins ✅ Implement GitOps workflows for better automation ✅ Integrate Canary Deployments using Istio
