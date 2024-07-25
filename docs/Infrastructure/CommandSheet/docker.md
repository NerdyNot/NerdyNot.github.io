---
sidebar_position: 4
---

# Docker 명령어 시트

## 기본 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker --version` | Docker 버전을 확인합니다. | `docker --version` | `docker --version` |
| `docker info` | Docker 시스템에 대한 자세한 정보를 출력합니다. | `docker info` | `docker info` |
| `docker help` | Docker 명령어에 대한 도움말을 표시합니다. | `docker help [명령어]` | `docker help run` |

## 이미지 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker images` | 로컬에 저장된 모든 Docker 이미지를 나열합니다. | `docker images` | `docker images` |
| `docker pull` | Docker Hub에서 이미지를 다운로드합니다. | `docker pull [이미지 이름:태그]` | `docker pull ubuntu:latest` |
| `docker build` | Dockerfile을 사용하여 이미지를 생성합니다. | `docker build -t [이미지 이름:태그] [경로]` | `docker build -t myapp:latest .` |
| `docker rmi` | 로컬에서 Docker 이미지를 삭제합니다. | `docker rmi [이미지 ID 또는 이름:태그]` | `docker rmi ubuntu:latest` |
| `docker tag` | 이미지를 새로운 태그로 태그합니다. | `docker tag [이미지 ID 또는 이름:태그] [새 태그]` | `docker tag 123456789abc myapp:v1.0` |
| `docker history` | Docker 이미지의 히스토리를 표시합니다. | `docker history [이미지 이름:태그]` | `docker history ubuntu:latest` |

## 컨테이너 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker ps` | 실행 중인 컨테이너를 나열합니다. | `docker ps` | `docker ps` |
| `docker ps -a` | 모든 컨테이너를 나열합니다. | `docker ps -a` | `docker ps -a` |
| `docker run` | 새 컨테이너를 생성하고 실행합니다. | `docker run [옵션] [이미지 이름:태그] [명령어]` | `docker run -it ubuntu:latest /bin/bash` |
| `docker stop` | 실행 중인 컨테이너를 중지합니다. | `docker stop [컨테이너 ID 또는 이름]` | `docker stop mycontainer` |
| `docker start` | 중지된 컨테이너를 시작합니다. | `docker start [컨테이너 ID 또는 이름]` | `docker start mycontainer` |
| `docker restart` | 컨테이너를 재시작합니다. | `docker restart [컨테이너 ID 또는 이름]` | `docker restart mycontainer` |
| `docker rm` | 중지된 컨테이너를 삭제합니다. | `docker rm [컨테이너 ID 또는 이름]` | `docker rm mycontainer` |
| `docker logs` | 컨테이너의 로그를 출력합니다. | `docker logs [옵션] [컨테이너 ID 또는 이름]` | `docker logs mycontainer` `docker logs --tail 100 mycontainer` `docker logs --follow mycontainer` |
| `docker exec` | 실행 중인 컨테이너에서 명령어를 실행합니다. | `docker exec [옵션] [컨테이너 ID 또는 이름] [명령어]` | `docker exec -it mycontainer /bin/bash` |

## 네트워크 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker network ls` | Docker 네트워크를 나열합니다. | `docker network ls` | `docker network ls` |
| `docker network create` | 새로운 Docker 네트워크를 생성합니다. | `docker network create [네트워크 이름]` | `docker network create mynetwork` |
| `docker network rm` | Docker 네트워크를 삭제합니다. | `docker network rm [네트워크 이름]` | `docker network rm mynetwork` |
| `docker network inspect` | Docker 네트워크의 세부 정보를 표시합니다. | `docker network inspect [네트워크 이름]` | `docker network inspect mynetwork` |
| `docker network connect` | 컨테이너를 Docker 네트워크에 연결합니다. | `docker network connect [옵션] [네트워크 이름] [컨테이너 이름]` | `docker network connect mynetwork mycontainer` |
| `docker network disconnect` | 컨테이너를 Docker 네트워크에서 분리합니다. | `docker network disconnect [옵션] [네트워크 이름] [컨테이너 이름]` | `docker network disconnect mynetwork mycontainer` |

## 볼륨 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker volume ls` | Docker 볼륨을 나열합니다. | `docker volume ls` | `docker volume ls` |
| `docker volume create` | 새로운 Docker 볼륨을 생성합니다. | `docker volume create [볼륨 이름]` | `docker volume create myvolume` |
| `docker volume rm` | Docker 볼륨을 삭제합니다. | `docker volume rm [볼륨 이름]` | `docker volume rm myvolume` |
| `docker volume inspect` | Docker 볼륨의 세부 정보를 표시합니다. | `docker volume inspect [볼륨 이름]` | `docker volume inspect myvolume` |

## 이미지 레지스트리 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker login` | Docker 레지스트리에 로그인합니다. | `docker login [레지스트리 URL]` | `docker login` |
| `docker logout` | Docker 레지스트리에서 로그아웃합니다. | `docker logout [레지스트리 URL]` | `docker logout` |
| `docker push` | Docker 이미지를 레지스트리에 푸시합니다. | `docker push [이미지 이름:태그]` | `docker push myapp:v1.0` |
| `docker pull` | Docker 레지스트리에서 이미지를 가져옵니다. | `docker pull [이미지 이름:태그]` | `docker pull ubuntu:latest` |

## Compose 명령어

| 명령어 | 설명 | 사용법 | 예제 |
|---------|-------------|-------|---------|
| `docker-compose up` | Docker Compose 파일에 정의된 서비스들을 시작합니다. | `docker-compose up [옵션] [서비스 이름]` | `docker-compose up` |
| `docker-compose down` | Docker Compose 파일에 정의된 서비스들을 중지하고 컨테이너, 네트워크 등을 제거합니다. | `docker-compose down [옵션]` | `docker-compose down` |
| `docker-compose build` | Docker Compose 파일에 정의된 서비스를 빌드합니다. | `docker-compose build [옵션] [서비스 이름]` | `docker-compose build` |
| `docker-compose ps` | Docker Compose 파일에 정의된 서비스들의 상태를 나열합니다. | `docker-compose ps` | `docker-compose ps` |
| `docker-compose logs` | Docker Compose 파일에 정의된 서비스들의 로그를 출력합니다. | `docker-compose logs [옵션] [서비스 이름]` | `docker-compose logs` |
| `docker-compose exec` | Docker Compose 파일에 정의된 서비스에서 명령어를 실행합니다. | `docker-compose exec [옵션] [서비스 이름] [명령어]` | `docker-compose exec myservice /bin/bash` |
