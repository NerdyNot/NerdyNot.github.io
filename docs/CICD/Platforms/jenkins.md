---
sidebar_position: 4
---

# Jenkins

## Overview
Jenkins는 오픈 소스 자동화 서버로, 지속적 통합 및 지속적 배포(CI/CD) 파이프라인을 구축하고 관리할 수 있게 해주는 도구이다. 다양한 플러그인을 통해 빌드, 테스트, 배포 프로세스를 확장하고 커스터마이징할 수 있다.

## Components of Jenkins
Jenkins의 주요 구성 요소는 다음과 같다:

### Jobs
Jenkins에서 실행되는 단위 작업으로, 빌드, 테스트, 배포 등의 작업을 정의할 수 있다.

### Builds
각 Job이 실행되는 인스턴스로, 빌드 기록이 저장되고 결과를 확인할 수 있다.

### Plugins
Jenkins의 기능을 확장하는 플러그인으로, 다양한 빌드 도구, 소스 코드 관리 시스템, 배포 도구와 통합할 수 있다.

### Nodes
빌드 작업을 실행할 수 있는 Jenkins의 슬레이브 머신이다.

## Creating an Example Pipeline
Jenkins 파이프라인은 Jenkinsfile이라는 스크립트 파일을 사용하여 정의된다. 예제 Jenkinsfile을 생성하여 코드 푸시 시 자동으로 빌드하고 테스트하는 파이프라인을 설정할 수 있다.

프로젝트 루트 디렉토리에 `Jenkinsfile`을 생성하고 다음 코드를 추가한다:

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            junit 'reports/**/*.xml'
            archiveArtifacts 'dist/**/*'
        }
    }
}
```

이 파이프라인은 소스 코드를 체크아웃하고, npm 패키지를 설치하며, 테스트를 실행한다. 모든 빌드 후 junit 테스트 결과를 보고하고, 생성된 아티팩트를 저장한다.

### Viewing Build History
1. Jenkins 대시보드로 이동한다.
2. 특정 Job을 클릭한다.
3. "Build History"에서 빌드 결과를 확인한다.
4. 특정 빌드를 클릭하여 세부 사항을 확인한다.