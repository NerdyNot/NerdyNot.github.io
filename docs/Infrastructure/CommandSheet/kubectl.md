---
sidebar_position: 5
---

# Kubectl 명령어 시트

이 문서는 `kubectl` 명령어를 사용하여 Kubernetes 클러스터를 관리하는 데 필요한 명령어를 요약한 것입니다. 각 명령어에 대한 설명, 사용법, 옵션 및 예제를 상세히 포함하고 있습니다.

---

## 기본 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl version` | Kubectl 클라이언트 및 서버 버전을 출력합니다. | `kubectl version [옵션]` | `kubectl version --short` |
| `kubectl config view` | 현재 설정된 Kubernetes 클러스터 설정을 출력합니다. | `kubectl config view` | `kubectl config view` |
| `kubectl cluster-info` | 현재 Kubernetes 클러스터 정보를 출력합니다. | `kubectl cluster-info` | `kubectl cluster-info` |
| `kubectl get` | 리소스를 나열합니다. | `kubectl get [리소스 유형] [이름] [옵션]` | `kubectl get pods` |

## 파드(Pod) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl get pods` | 모든 파드를 나열합니다. | `kubectl get pods [옵션]` | `kubectl get pods` |
| `kubectl describe pod` | 특정 파드의 상세 정보를 출력합니다. | `kubectl describe pod [이름] [옵션]` | `kubectl describe pod my-pod` |
| `kubectl logs` | 파드의 로그를 출력합니다. | `kubectl logs [파드 이름] [옵션]` | `kubectl logs my-pod` |
| `kubectl exec` | 실행 중인 파드 내에서 명령어를 실행합니다. | `kubectl exec [파드 이름] [명령어] [옵션]` | `kubectl exec my-pod -- /bin/bash` |
| `kubectl delete pod` | 특정 파드를 삭제합니다. | `kubectl delete pod [이름] [옵션]` | `kubectl delete pod my-pod` |

## 디플로이먼트(Deployment) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl get deployments` | 모든 디플로이먼트를 나열합니다. | `kubectl get deployments [옵션]` | `kubectl get deployments` |
| `kubectl describe deployment` | 특정 디플로이먼트의 상세 정보를 출력합니다. | `kubectl describe deployment [이름] [옵션]` | `kubectl describe deployment my-deployment` |
| `kubectl create deployment` | 새로운 디플로이먼트를 생성합니다. | `kubectl create deployment [이름] --image=[이미지] [옵션]` | `kubectl create deployment my-deployment --image=nginx` |
| `kubectl scale deployment` | 디플로이먼트의 레플리카 수를 조정합니다. | `kubectl scale deployment [이름] --replicas=[수] [옵션]` | `kubectl scale deployment my-deployment --replicas=3` |
| `kubectl delete deployment` | 특정 디플로이먼트를 삭제합니다. | `kubectl delete deployment [이름] [옵션]` | `kubectl delete deployment my-deployment` |

## 서비스(Service) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl get services` | 모든 서비스를 나열합니다. | `kubectl get services [옵션]` | `kubectl get services` |
| `kubectl describe service` | 특정 서비스의 상세 정보를 출력합니다. | `kubectl describe service [이름] [옵션]` | `kubectl describe service my-service` |
| `kubectl expose` | 파드, 레플리카셋, 디플로이먼트, 서비스 등을 노출합니다. | `kubectl expose [리소스 유형] [이름] --port=[포트] [옵션]` | `kubectl expose deployment my-deployment --port=80 --target-port=8080` |
| `kubectl delete service` | 특정 서비스를 삭제합니다. | `kubectl delete service [이름] [옵션]` | `kubectl delete service my-service` |

## 컨피그맵(ConfigMap) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl get configmaps` | 모든 컨피그맵을 나열합니다. | `kubectl get configmaps [옵션]` | `kubectl get configmaps` |
| `kubectl describe configmap` | 특정 컨피그맵의 상세 정보를 출력합니다. | `kubectl describe configmap [이름] [옵션]` | `kubectl describe configmap my-config` |
| `kubectl create configmap` | 새로운 컨피그맵을 생성합니다. | `kubectl create configmap [이름] --from-literal=[key]=[value] [옵션]` | `kubectl create configmap my-config --from-literal=key1=value1` |
| `kubectl delete configmap` | 특정 컨피그맵을 삭제합니다. | `kubectl delete configmap [이름] [옵션]` | `kubectl delete configmap my-config` |

## 시크릿(Secret) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl get secrets` | 모든 시크릿을 나열합니다. | `kubectl get secrets [옵션]` | `kubectl get secrets` |
| `kubectl describe secret` | 특정 시크릿의 상세 정보를 출력합니다. | `kubectl describe secret [이름] [옵션]` | `kubectl describe secret my-secret` |
| `kubectl create secret` | 새로운 시크릿을 생성합니다. | `kubectl create secret generic [이름] --from-literal=[key]=[value] [옵션]` | `kubectl create secret generic my-secret --from-literal=password=my-password` |
| `kubectl delete secret` | 특정 시크릿을 삭제합니다. | `kubectl delete secret [이름] [옵션]` | `kubectl delete secret my-secret` |

## 노드(Node) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `kubectl get nodes` | 모든 노드를 나열합니다. | `kubectl get nodes [옵션]` | `kubectl get nodes` |
| `kubectl describe node` | 특정 노드의 상세 정보를 출력합니다. | `kubectl describe node [이름] [옵션]` | `kubectl describe node my-node` |
| `kubectl cordon` | 노드를 unschedulable 상태로 표시합니다. | `kubectl cordon [이름] [옵션]` | `kubectl cordon my-node` |
| `kubectl drain` | 노드에서 파드를 안전하게 제거합니다. | `kubectl drain [이름] [옵션]` | `kubectl drain my-node --ignore-daemonsets` |
| `kubectl uncordon` | 노드를 schedulable 상태로 복원합니다. | `kubectl uncordon [이름] [옵션]` | `kubectl uncordon my-node` |
