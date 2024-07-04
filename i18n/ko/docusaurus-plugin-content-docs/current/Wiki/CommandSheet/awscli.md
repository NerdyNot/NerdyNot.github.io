---
sidebar_position: 1
---

# AWS CLI Command Sheet

이 문서는 Amazon Web Services(AWS)의 `aws` 명령어를 사용하여 다양한 AWS 서비스를 관리하는 데 필요한 명령어를 정리한 것입니다. 각 명령어의 설명, 사용법, 옵션 및 예제를 포함하고 있습니다.

---

## 기본 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|--------|------|--------|------|
| `aws configure` | AWS CLI를 구성하고 액세스 키, 비밀 키, 리전 및 출력 형식을 설정합니다. | `aws configure` | `aws configure` |
| `aws sts get-caller-identity` | 현재 사용자 또는 역할의 ID 정보를 확인합니다. | `aws sts get-caller-identity` | `aws sts get-caller-identity` |
| `aws configure list` | 현재 구성된 AWS CLI 설정을 표시합니다. | `aws configure list` | `aws configure list` |
| `aws configure get` | 특정 구성 값을 조회합니다. | `aws configure get [프로파일].name` | `aws configure get region` |

## IAM(Identity and Access Management) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|--------|------|--------|------|
| `aws iam create-user` | 새로운 IAM 사용자를 생성합니다. | `aws iam create-user --user-name [사용자 이름]` | `aws iam create-user --user-name new-user` |
| `aws iam delete-user` | IAM 사용자를 삭제합니다. | `aws iam delete-user --user-name [사용자 이름]` | `aws iam delete-user --user-name old-user` |
| `aws iam list-users` | 모든 IAM 사용자의 목록을 표시합니다. | `aws iam list-users` | `aws iam list-users` |
| `aws iam attach-user-policy` | IAM 사용자에게 정책을 연결합니다. | `aws iam attach-user-policy --user-name [사용자 이름] --policy-arn [정책 ARN]` | `aws iam attach-user-policy --user-name new-user --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess` |
| `aws iam detach-user-policy` | IAM 사용자에게 연결된 정책을 분리합니다. | `aws iam detach-user-policy --user-name [사용자 이름] --policy-arn [정책 ARN]` | `aws iam detach-user-policy --user-name new-user --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess` |

## S3(Simple Storage Service) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|--------|------|--------|------|
| `aws s3 ls` | S3 버킷의 목록을 표시하거나, 특정 버킷의 내용을 나열합니다. | `aws s3 ls [s3://버킷 이름]` | `aws s3 ls`\n`aws s3 ls s3://my-bucket` |
| `aws s3 mb` | 새로운 S3 버킷을 생성합니다. | `aws s3 mb s3://[버킷 이름]` | `aws s3 mb s3://my-new-bucket` |
| `aws s3 rb` | S3 버킷을 삭제합니다. | `aws s3 rb s3://[버킷 이름] [옵션]` | `aws s3 rb s3://my-bucket --force` |
| `aws s3 cp` | 로컬 파일을 S3로 업로드하거나, S3 파일을 로컬로 다운로드합니다. | `aws s3 cp [소스 경로] [대상 경로] [옵션]` | `aws s3 cp my-file.txt s3://my-bucket/my-file.txt`\n`aws s3 cp s3://my-bucket/my-file.txt my-file.txt` |
| `aws s3 sync` | 로컬 디렉토리와 S3 버킷 간에 파일을 동기화합니다. | `aws s3 sync [소스 경로] [대상 경로] [옵션]` | `aws s3 sync ./local-folder s3://my-bucket/remote-folder`\n`aws s3 sync s3://my-bucket/remote-folder ./local-folder` |

## EC2(Elastic Compute Cloud) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|--------|------|--------|------|
| `aws ec2 run-instances` | 새로운 EC2 인스턴스를 시작합니다. | `aws ec2 run-instances --image-id [이미지 ID] --instance-type [인스턴스 유형] [옵션]` | `aws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t2.micro --key-name MyKeyPair` |
| `aws ec2 describe-instances` | 모든 EC2 인스턴스의 정보를 표시합니다. | `aws ec2 describe-instances [옵션]` | `aws ec2 describe-instances` |
| `aws ec2 start-instances` | 정지된 EC2 인스턴스를 시작합니다. | `aws ec2 start-instances --instance-ids [인스턴스 ID]` | `aws ec2 start-instances --instance-ids i-0abcdef1234567890` |
| `aws ec2 stop-instances` | 실행 중인 EC2 인스턴스를 정지합니다. | `aws ec2 stop-instances --instance-ids [인스턴스 ID]` | `aws ec2 stop-instances --instance-ids i-0abcdef1234567890` |
| `aws ec2 terminate-instances` | EC2 인스턴스를 종료합니다. | `aws ec2 terminate-instances --instance-ids [인스턴스 ID]` | `aws ec2 terminate-instances --instance-ids i-0abcdef1234567890` |
| `aws ec2 reboot-instances` | EC2 인스턴스를 재부팅합니다. | `aws ec2 reboot-instances --instance-ids [인스턴스 ID]` | `aws ec2 reboot-instances --instance-ids i-0abcdef1234567890` |

## VPC(Virtual Private Cloud) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|--------|------|--------|------|
| `aws ec2 create-vpc` | 새로운 VPC를 생성합니다. | `aws ec2 create-vpc --cidr-block [CIDR 블록]` | `aws ec2 create-vpc --cidr-block 10.0.0.0/16` |
| `aws ec2 describe-vpcs` | 모든 VPC의 정보를 표시합니다. | `aws ec2 describe-vpcs` | `aws ec2 describe-vpcs` |
| `aws ec2 delete-vpc` | VPC를 삭제합니다. | `aws ec2 delete-vpc --vpc-id [VPC ID]` | `aws ec2 delete-vpc --vpc-id vpc-0abcdef1234567890` |
| `aws ec2 create-subnet` | VPC에 새로운 서브넷을 생성합니다. | `aws ec2 create-subnet --vpc-id [VPC ID] --cidr-block [CIDR 블록]` | `aws ec2 create-subnet --vpc-id vpc-0abcdef1234567890 --cidr-block 10.0.1.0/24` |
| `aws ec2 describe-subnets` | 모든 서브넷의 정보를 표시합니다. | `aws ec2 describe-subnets` | `aws ec2 describe-subnets` |
| `aws ec2 delete-subnet` | 서브넷을 삭제합니다. | `aws ec2 delete-subnet --subnet-id [서브넷 ID]` | `aws ec2 delete-subnet --subnet-id subnet-0abcdef1234567890` |

## RDS(Relational Database Service) 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|--------|------|--------|------|
| `aws rds create-db-instance` | 새로운 RDS 인스턴스를 생성합니다. | `aws rds create-db-instance --db-instance-identifier [DB 인스턴스 식별자] --db-instance-class [DB 인스턴스 클래스] --engine [엔진 이름] --allocated-storage [할당된 스토리지] [옵션]` | `aws rds create-db-instance --db-instance-identifier mydbinstance --db-instance-class db.t2.micro --engine mysql --allocated-storage 20 --master-username admin --master-user-password secret99` |
| `aws rds describe-db-instances` | 모든 RDS 인스턴스의 정보를 표시합니다. | `aws rds describe-db-instances` | `aws rds describe-db-instances` |
| `aws rds delete-db-instance` | RDS 인스턴스를 삭제합니다. | `aws rds delete-db-instance --db-instance-identifier [DB 인스턴스 식별자] --skip-final-snapshot` | `aws rds delete-db-instance --db-instance-identifier mydbinstance --skip-final-snapshot` |
| `aws rds reboot-db-instance` | RDS 인스턴스를 재부팅합니다. | `aws rds reboot-db-instance --db-instance-identifier [DB 인스턴스 식별자]` | `aws rds