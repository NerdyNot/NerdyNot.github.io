---
sidebar_position: 3
---

# GitLab CI

## Overview
GitLab CI/CD는 GitLab에 내장된 지속적 통합 및 지속적 배포(CI/CD) 플랫폼으로, 코드 변경 사항을 자동으로 빌드, 테스트, 배포할 수 있게 해주는 도구이다. GitLab CI/CD를 사용하면 소프트웨어 개발 주기를 자동화하여 개발, 테스트, 배포 프로세스를 효율적으로 관리할 수 있다.

## Components of GitLab CI/CD
GitLab CI/CD는 다음과 같은 주요 구성 요소로 이루어져 있다.

### Pipelines
파이프라인은 하나 이상의 스테이지를 포함하는 자동화 프로세스로, 각 스테이지는 특정 작업을 수행하는 일련의 작업으로 구성된다. 파이프라인은 `.gitlab-ci.yml` 파일에 정의된다.

### Jobs
작업은 파이프라인의 각 스테이지에서 실행되는 개별 단위 작업이다. 작업은 스크립트를 실행하거나 특정 작업을 수행한다.

### Runners
러너는 GitLab CI/CD 파이프라인의 작업을 실행하는 서버이다. GitLab은 셰어드 러너와 특정 프로젝트나 그룹에 전용된 전용 러너를 지원한다.

### Artifacts
아티팩트는 파이프라인 실행 중에 생성된 파일로, 이후 스테이지나 작업에서 사용할 수 있다.

## Creating an Example Pipeline
GitLab CI/CD 파이프라인은 `.gitlab-ci.yml` 파일에 정의된다. 예제 파이프라인을 만들어 코드가 푸시될 때마다 자동으로 빌드하고 테스트하는 워크플로우를 설정할 수 있다.

```yaml
stages:
  - build
  - test

build_job:
  stage: build
  script:
    - echo "Building the application..."
    - npm install

test_job:
  stage: test
  script:
    - echo "Running tests..."
    - npm test
```

이 예제 파이프라인은 코드가 푸시될 때 트리거되며, 빌드 및 테스트 작업을 수행한다.

### Viewing Pipeline Run History
1. GitLab 프로젝트의 메인 페이지로 이동한다.
2. "CI / CD" 메뉴를 클릭한다.
3. "Pipelines" 탭을 클릭하여 실행된 파이프라인의 목록을 본다.
4. 특정 파이프라인을 클릭하여 세부 사항을 확인한다.
