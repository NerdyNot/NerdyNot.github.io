---
sidebar_position: 3
---

# GCP CLI 명령어 시트

## 기본 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `gcloud init` | GCP CLI를 초기화하고 설정합니다. | `gcloud init` | `gcloud init` |
| `gcloud auth login` | GCP에 로그인합니다. | `gcloud auth login` | `gcloud auth login` |
| `gcloud config list` | 현재 구성된 설정을 나열합니다. | `gcloud config list` | `gcloud config list` |
| `gcloud config set` | 특정 구성을 설정합니다. | `gcloud config set [속성] [값]` | `gcloud config set project my-project` |

## 프로젝트 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `gcloud projects create` | 새로운 GCP 프로젝트를 생성합니다. | `gcloud projects create [프로젝트 ID]` | `gcloud projects create my-new-project` |
| `gcloud projects delete` | GCP 프로젝트를 삭제합니다. | `gcloud projects delete [프로젝트 ID]` | `gcloud projects delete my-old-project` |
| `gcloud projects list` | 모든 GCP 프로젝트를 나열합니다. | `gcloud projects list` | `gcloud projects list` |
| `gcloud projects describe` | 특정 GCP 프로젝트의 정보를 표시합니다. | `gcloud projects describe [프로젝트 ID]` | `gcloud projects describe my-project` |

## Compute Engine 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `gcloud compute instances create` | 새로운 Compute Engine 인스턴스를 생성합니다. | `gcloud compute instances create [인스턴스 이름] --zone [존]` | `gcloud compute instances create my-instance --zone us-central1-a` |
| `gcloud compute instances delete` | Compute Engine 인스턴스를 삭제합니다. | `gcloud compute instances delete [인스턴스 이름] --zone [존]` | `gcloud compute instances delete my-instance --zone us-central1-a` |
| `gcloud compute instances start` | Compute Engine 인스턴스를 시작합니다. | `gcloud compute instances start [인스턴스 이름] --zone [존]` | `gcloud compute instances start my-instance --zone us-central1-a` |
| `gcloud compute instances stop` | Compute Engine 인스턴스를 중지합니다. | `gcloud compute instances stop [인스턴스 이름] --zone [존]` | `gcloud compute instances stop my-instance --zone us-central1-a` |
| `gcloud compute instances list` | 모든 Compute Engine 인스턴스를 나열합니다. | `gcloud compute instances list` | `gcloud compute instances list` |

## Cloud Storage 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `gcloud storage buckets create` | 새로운 Cloud Storage 버킷을 생성합니다. | `gcloud storage buckets create gs://[버킷 이름]` | `gcloud storage buckets create gs://my-new-bucket` |
| `gcloud storage buckets delete` | Cloud Storage 버킷을 삭제합니다. | `gcloud storage buckets delete gs://[버킷 이름]` | `gcloud storage buckets delete gs://my-old-bucket` |
| `gcloud storage buckets list` | 모든 Cloud Storage 버킷을 나열합니다. | `gcloud storage buckets list` | `gcloud storage buckets list` |
| `gcloud storage buckets describe` | 특정 Cloud Storage 버킷의 정보를 표시합니다. | `gcloud storage buckets describe gs://[버킷 이름]` | `gcloud storage buckets describe gs://my-bucket` |

## Cloud SQL 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `gcloud sql instances create` | 새로운 Cloud SQL 인스턴스를 생성합니다. | `gcloud sql instances create [인스턴스 이름]` | `gcloud sql instances create my-sql-instance` |
| `gcloud sql instances delete` | Cloud SQL 인스턴스를 삭제합니다. | `gcloud sql instances delete [인스턴스 이름]` | `gcloud sql instances delete my-sql-instance` |
| `gcloud sql instances list` | 모든 Cloud SQL 인스턴스를 나열합니다. | `gcloud sql instances list` | `gcloud sql instances list` |
| `gcloud sql instances describe` | 특정 Cloud SQL 인스턴스의 정보를 표시합니다. | `gcloud sql instances describe [인스턴스 이름]` | `gcloud sql instances describe my-sql-instance` |
| `gcloud sql databases create` | Cloud SQL 인스턴스에 새로운 데이터베이스를 생성합니다. | `gcloud sql databases create [데이터베이스 이름] --instance [인스턴스 이름]` | `gcloud sql databases create my-database --instance my-sql-instance` |
| `gcloud sql databases delete` | Cloud SQL 데이터베이스를 삭제합니다. | `gcloud sql databases delete [데이터베이스 이름] --instance [인스턴스 이름]` | `gcloud sql databases delete my-database --instance my-sql-instance` |
| `gcloud sql databases list` | 모든 Cloud SQL 데이터베이스를 나열합니다. | `gcloud sql databases list --instance [인스턴스 이름]` | `gcloud sql databases list --instance my-sql-instance` |
| `gcloud sql databases describe` | 특정 Cloud SQL 데이터베이스의 정보를 표시합니다. | `gcloud sql databases describe [데이터베이스 이름] --instance [인스턴스 이름]` | `gcloud sql databases describe my-database --instance my-sql-instance` |
