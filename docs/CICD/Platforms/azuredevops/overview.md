---
sidebar_position: 1
---

# Overview
Azure DevOps는 마이크로소프트에서 제공하는 종합적인 DevOps 플랫폼으로, CI/CD 파이프라인을 자동화하고 소프트웨어 개발, 테스트, 배포를 지원하는 도구이다. Azure Repos, Azure Pipelines, Azure Boards, Azure Test Plans, Azure Artifacts 등의 다양한 서비스를 통해 개발 프로세스 전반을 관리할 수 있다.

Azure DevOps는 퍼블릭 클라우드, 프라이빗 클라우드, 온프레미스 환경에서 모두 사용할 수 있으며, 다양한 운영 체제와 통합이 가능하다.

## Components of Azure DevOps
Azure DevOps의 주요 구성 요소는 다음과 같다:

- **Azure Repos**: 소스 코드 버전 관리를 위한 Git 저장소 서비스이다.
- **Azure Pipelines**: CI/CD 파이프라인을 구축하고 관리할 수 있는 서비스이다.
- **Azure Boards**: 작업 항목, 버그, 피드백 등을 관리할 수 있는 애자일 도구이다.
- **Azure Test Plans**: 테스트 계획, 테스트 케이스, 수동 테스트 실행 등을 지원하는 도구이다.
- **Azure Artifacts**: 패키지 관리 및 공유를 위한 서비스이다.

## Creating an Example Pipeline
Azure Pipelines는 YAML 구문을 사용하여 파이프라인을 정의한다. 예제 파이프라인을 생성하여 코드를 푸시할 때마다 자동으로 빌드하고 테스트하는 워크플로우를 설정할 수 있다.

Azure DevOps 프로젝트에서 `pipelines` 디렉토리를 생성하고 `azure-pipelines.yml` 파일을 추가한다:

```yaml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: UseNode@1
  inputs:
    version: '16.x'
  displayName: 'Use Node.js 16.x'

- script: npm install
  displayName: 'Install npm packages'

- script: npm test
  displayName: 'Run tests'
```

이 파이프라인은 main 브랜치에 푸시될 때마다 트리거되며, Node.js 16.x를 사용하여 npm 패키지를 설치하고 테스트를 실행한다.

### Viewing Pipeline Run History
1. Azure DevOps 프로젝트의 메인 페이지로 이동한다.
2. "Pipelines" 탭을 클릭한다.
3. 좌측 사이드바에서 보고 싶은 파이프라인을 클릭한다.
4. 실행 목록에서 실행된 파이프라인 이름을 클릭하여 요약을 본다.
