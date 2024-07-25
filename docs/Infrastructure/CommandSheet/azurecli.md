---
sidebar_position: 2
---

# Azure CLI 명령어 시트

## 기본 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `az login` | Azure에 로그인합니다. | `az login` | `az login` |
| `az account show` | 현재 로그인한 계정 정보를 표시합니다. | `az account show` | `az account show` |
| `az account list` | 모든 구독 목록을 표시합니다. | `az account list` | `az account list` |
| `az account set` | 특정 구독을 활성화합니다. | `az account set --subscription [구독 ID]` | `az account set --subscription "My Subscription"` |

## 리소스 그룹 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `az group create` | 새로운 리소스 그룹을 생성합니다. | `az group create --name [리소스 그룹 이름] --location [위치]` | `az group create --name MyResourceGroup --location eastus` |
| `az group delete` | 리소스 그룹을 삭제합니다. | `az group delete --name [리소스 그룹 이름]` | `az group delete --name MyResourceGroup` |
| `az group list` | 모든 리소스 그룹을 나열합니다. | `az group list` | `az group list` |
| `az group show` | 특정 리소스 그룹의 정보를 표시합니다. | `az group show --name [리소스 그룹 이름]` | `az group show --name MyResourceGroup` |

## 가상 머신 (VM) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `az vm create` | 새로운 가상 머신을 생성합니다. | `az vm create --resource-group [리소스 그룹 이름] --name [VM 이름] --image [이미지] --admin-username [관리자 사용자 이름] --generate-ssh-keys` | `az vm create --resource-group MyResourceGroup --name MyVM --image UbuntuLTS --admin-username azureuser --generate-ssh-keys` |
| `az vm delete` | 가상 머신을 삭제합니다. | `az vm delete --resource-group [리소스 그룹 이름] --name [VM 이름]` | `az vm delete --resource-group MyResourceGroup --name MyVM` |
| `az vm start` | 가상 머신을 시작합니다. | `az vm start --resource-group [리소스 그룹 이름] --name [VM 이름]` | `az vm start --resource-group MyResourceGroup --name MyVM` |
| `az vm stop` | 가상 머신을 중지합니다. | `az vm stop --resource-group [리소스 그룹 이름] --name [VM 이름]` | `az vm stop --resource-group MyResourceGroup --name MyVM` |
| `az vm list` | 모든 가상 머신을 나열합니다. | `az vm list --resource-group [리소스 그룹 이름]` | `az vm list --resource-group MyResourceGroup` |

## 스토리지 계정 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `az storage account create` | 새로운 스토리지 계정을 생성합니다. | `az storage account create --name [스토리지 계정 이름] --resource-group [리소스 그룹 이름] --location [위치] --sku [SKU]` | `az storage account create --name mystorageaccount --resource-group MyResourceGroup --location eastus --sku Standard_LRS` |
| `az storage account delete` | 스토리지 계정을 삭제합니다. | `az storage account delete --name [스토리지 계정 이름] --resource-group [리소스 그룹 이름]` | `az storage account delete --name mystorageaccount --resource-group MyResourceGroup` |
| `az storage account list` | 모든 스토리지 계정을 나열합니다. | `az storage account list --resource-group [리소스 그룹 이름]` | `az storage account list --resource-group MyResourceGroup` |
| `az storage account show` | 특정 스토리지 계정의 정보를 표시합니다. | `az storage account show --name [스토리지 계정 이름] --resource-group [리소스 그룹 이름]` | `az storage account show --name mystorageaccount --resource-group MyResourceGroup` |

## Azure Kubernetes Service (AKS) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `az aks create` | 새로운 AKS 클러스터를 생성합니다. | `az aks create --resource-group [리소스 그룹 이름] --name [클러스터 이름] --node-count [노드 수] --enable-addons monitoring --generate-ssh-keys` | `az aks create --resource-group MyResourceGroup --name MyAKSCluster --node-count 3 --enable-addons monitoring --generate-ssh-keys` |
| `az aks delete` | AKS 클러스터를 삭제합니다. | `az aks delete --resource-group [리소스 그룹 이름] --name [클러스터 이름]` | `az aks delete --resource-group MyResourceGroup --name MyAKSCluster` |
| `az aks list` | 모든 AKS 클러스터를 나열합니다. | `az aks list --resource-group [리소스 그룹 이름]` | `az aks list --resource-group MyResourceGroup` |
| `az aks show` | 특정 AKS 클러스터의 정보를 표시합니다. | `az aks show --resource-group [리소스 그룹 이름] --name [클러스터 이름]` | `az aks show --resource-group MyResourceGroup --name MyAKSCluster` |

## Azure SQL Database 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `az sql server create` | 새로운 SQL 서버를 생성합니다. | `az sql server create --name [서버 이름] --resource-group [리소스 그룹 이름] --location [위치] --admin-user [관리자 사용자 이름] --admin-password [관리자 비밀번호]` | `az sql server create --name myserver --resource-group MyResourceGroup --location eastus --admin-user myadmin --admin-password MyAdminPassword123` |
| `az sql server delete` | SQL 서버를 삭제합니다. | `az sql server delete --name [서버 이름] --resource-group [리소스 그룹 이름]` | `az sql server delete --name myserver --resource-group MyResourceGroup` |
| `az sql server list` | 모든 SQL 서버를 나열합니다. | `az sql server list --resource-group [리소스 그룹 이름]` | `az sql server list --resource-group MyResourceGroup` |
| `az sql server show` | 특정 SQL 서버의 정보를 표시합니다. | `az sql server show --name [서버 이름] --resource-group [리소스 그룹 이름]` | `az sql server show --name myserver --resource-group MyResourceGroup` |
| `az sql db create` | 새로운 SQL 데이터베이스를 생성합니다. | `az sql db create --resource-group [리소스 그룹 이름] --server [서버 이름] --name [데이터베이스 이름] --service-objective [서비스 목표]` | `az sql db create --resource-group MyResourceGroup --server myserver --name mydatabase --service-objective S0` |
| `az sql db delete` | SQL 데이터베이스를 삭제합니다. | `az sql db delete --resource-group [리소스 그룹 이름] --server [서버 이름] --name [데이터베이스 이름]` | `az sql db delete --resource-group MyResourceGroup --server myserver --name mydatabase` |
| `az sql db list` | 모든 SQL 데이터베이스를 나열합니다. | `az sql db list --resource-group [리소스 그룹 이름] --server [서버 이름]` | `az sql db list --resource-group MyResourceGroup --server myserver` |
| `az sql db show` | 특정 SQL 데이터베이스의 정보를 표시합니다. | `az sql db show --resource-group [리소스 그룹 이름] --server [서버 이름] --name [데이터베이스 이름]` | `az sql db show --resource-group MyResourceGroup --server myserver --name mydatabase` |
