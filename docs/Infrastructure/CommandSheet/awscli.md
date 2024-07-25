---
sidebar_position: 1
---

# AWS CLI Command Sheet

This document summarizes the commands necessary to manage various AWS services using the `aws` command. It includes descriptions, usage, options, and examples for each command.

---

## Basic Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws configure` | Configures the AWS CLI with access key, secret key, region, and output format. | `aws configure` | `aws configure` |
| `aws sts get-caller-identity` | Retrieves the IAM user or role's identity information. | `aws sts get-caller-identity` | `aws sts get-caller-identity` |
| `aws configure list` | Displays the current configuration of the AWS CLI. | `aws configure list` | `aws configure list` |
| `aws configure get` | Retrieves a specific configuration value. | `aws configure get [profile].name` | `aws configure get region` |

## IAM (Identity and Access Management) Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws iam create-user` | Creates a new IAM user. | `aws iam create-user --user-name [user name]` | `aws iam create-user --user-name new-user` |
| `aws iam delete-user` | Deletes an IAM user. | `aws iam delete-user --user-name [user name]` | `aws iam delete-user --user-name old-user` |
| `aws iam list-users` | Lists all IAM users. | `aws iam list-users` | `aws iam list-users` |
| `aws iam attach-user-policy` | Attaches a policy to an IAM user. | `aws iam attach-user-policy --user-name [user name] --policy-arn [policy ARN]` | `aws iam attach-user-policy --user-name new-user --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess` |
| `aws iam detach-user-policy` | Detaches a policy from an IAM user. | `aws iam detach-user-policy --user-name [user name] --policy-arn [policy ARN]` | `aws iam detach-user-policy --user-name new-user --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess` |

## S3 (Simple Storage Service) Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws s3 ls` | Lists all S3 buckets or the contents of a specific bucket. | `aws s3 ls [s3://bucket name]` | `aws s3 ls`\n`aws s3 ls s3://my-bucket` |
| `aws s3 mb` | Creates a new S3 bucket. | `aws s3 mb s3://[bucket name]` | `aws s3 mb s3://my-new-bucket` |
| `aws s3 rb` | Deletes an S3 bucket. | `aws s3 rb s3://[bucket name] [options]` | `aws s3 rb s3://my-bucket --force` |
| `aws s3 cp` | Uploads a local file to S3 or downloads an S3 file to local. | `aws s3 cp [source path] [destination path] [options]` | `aws s3 cp my-file.txt s3://my-bucket/my-file.txt`\n`aws s3 cp s3://my-bucket/my-file.txt my-file.txt` |
| `aws s3 sync` | Syncs files between a local directory and an S3 bucket. | `aws s3 sync [source path] [destination path] [options]` | `aws s3 sync ./local-folder s3://my-bucket/remote-folder`\n`aws s3 sync s3://my-bucket/remote-folder ./local-folder` |

## EC2 (Elastic Compute Cloud) Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws ec2 run-instances` | Launches a new EC2 instance. | `aws ec2 run-instances --image-id [image ID] --instance-type [instance type] [options]` | `aws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t2.micro --key-name MyKeyPair` |
| `aws ec2 describe-instances` | Displays information about all EC2 instances. | `aws ec2 describe-instances [options]` | `aws ec2 describe-instances` |
| `aws ec2 start-instances` | Starts a stopped EC2 instance. | `aws ec2 start-instances --instance-ids [instance ID]` | `aws ec2 start-instances --instance-ids i-0abcdef1234567890` |
| `aws ec2 stop-instances` | Stops a running EC2 instance. | `aws ec2 stop-instances --instance-ids [instance ID]` | `aws ec2 stop-instances --instance-ids i-0abcdef1234567890` |
| `aws ec2 terminate-instances` | Terminates an EC2 instance. | `aws ec2 terminate-instances --instance-ids [instance ID]` | `aws ec2 terminate-instances --instance-ids i-0abcdef1234567890` |
| `aws ec2 reboot-instances` | Reboots an EC2 instance. | `aws ec2 reboot-instances --instance-ids [instance ID]` | `aws ec2 reboot-instances --instance-ids i-0abcdef1234567890` |

## VPC (Virtual Private Cloud) Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws ec2 create-vpc` | Creates a new VPC. | `aws ec2 create-vpc --cidr-block [CIDR block]` | `aws ec2 create-vpc --cidr-block 10.0.0.0/16` |
| `aws ec2 describe-vpcs` | Displays information about all VPCs. | `aws ec2 describe-vpcs` | `aws ec2 describe-vpcs` |
| `aws ec2 delete-vpc` | Deletes a VPC. | `aws ec2 delete-vpc --vpc-id [VPC ID]` | `aws ec2 delete-vpc --vpc-id vpc-0abcdef1234567890` |
| `aws ec2 create-subnet` | Creates a new subnet in a VPC. | `aws ec2 create-subnet --vpc-id [VPC ID] --cidr-block [CIDR block]` | `aws ec2 create-subnet --vpc-id vpc-0abcdef1234567890 --cidr-block 10.0.1.0/24` |
| `aws ec2 describe-subnets` | Displays information about all subnets. | `aws ec2 describe-subnets` | `aws ec2 describe-subnets` |
| `aws ec2 delete-subnet` | Deletes a subnet. | `aws ec2 delete-subnet --subnet-id [subnet ID]` | `aws ec2 delete-subnet --subnet-id subnet-0abcdef1234567890` |

## RDS (Relational Database Service) Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws rds create-db-instance` | Creates a new RDS instance. | `aws rds create-db-instance --db-instance-identifier [DB instance identifier] --db-instance-class [DB instance class] --engine [engine name] --allocated-storage [allocated storage] [options]` | `aws rds create-db-instance --db-instance-identifier mydbinstance --db-instance-class db.t2.micro --engine mysql --allocated-storage 20 --master-username admin --master-user-password secret99` |
| `aws rds describe-db-instances` | Displays information about all RDS instances. | `aws rds describe-db-instances` | `aws rds describe-db-instances` |
| `aws rds delete-db-instance` | Deletes an RDS instance. | `aws rds delete-db-instance --db-instance-identifier [DB instance identifier] --skip-final-snapshot` | `aws rds delete-db-instance --db-instance-identifier mydbinstance --skip-final-snapshot` |
| `aws rds reboot-db-instance` | Reboots an RDS instance. | `aws rds reboot-db-instance --db-instance-identifier [DB instance identifier]` | `aws rds reboot-db-instance --db-instance-identifier mydbinstance` |

## ECS (Elastic Container Service) Commands

| Command | Description | Usage | Example |
|---------|-------------|-------|---------|
| `aws ecs create-cluster` | Creates a new ECS cluster. | `aws ecs create-cluster --cluster-name [cluster name]` | `aws ecs create-cluster --cluster-name my-cluster` |
| `aws ecs list-clusters` | Lists all ECS clusters. | `aws ecs list-clusters` | `aws ecs list-clusters` |
| `aws ecs delete-cluster` | Deletes an ECS cluster. | `aws ecs delete-cluster --cluster [cluster name or ARN]` | `aws ecs delete-cluster --cluster arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster` |
| `aws ecs create-service` | Creates a new ECS service. | `aws ecs create-service --cluster [cluster name] --service-name [service