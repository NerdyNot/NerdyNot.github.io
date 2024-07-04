---
sidebar_position: 1
---

# GitHub Actions

## Overview
GitHub Actions is a continuous integration and continuous deployment (CI/CD) platform that allows you to automate build, test, and deployment pipelines. You can create workflows to build and test every pull request to your repository or deploy merged pull requests to production.

Beyond DevOps, GitHub Actions can also execute workflows when other events occur in the repository. For instance, you can run a workflow that automatically adds appropriate labels whenever someone creates a new issue.

GitHub provides Linux, Windows, and macOS virtual machines to run workflows, and you can also use self-hosted runners in your own data center or cloud infrastructure.

## Components of GitHub Actions
GitHub Actions workflows can be configured to trigger when events occur in your repository. For example, they can be triggered when a pull request is created or an issue is opened. A workflow contains one or more jobs that run sequentially or in parallel. Each job runs on its own virtual machine runner or within a container and consists of one or more steps that execute defined scripts or reusable actions to simplify workflows.

### Workflow
A workflow is a configurable automated process that runs one or more jobs. Workflows are defined in YAML files checked into the repository and can be triggered by events in the repository, manually, or on a defined schedule.

Workflows are defined in the `.github/workflows` directory of the repository, and each repository can have multiple workflows performing different tasks. For example, you can have a workflow for building and testing pull requests, a workflow for deploying applications when a release is created, and a workflow for adding labels whenever a new issue is created.

### Events
Events are specific activities that trigger the execution of a workflow. For instance, they can occur when someone creates a pull request, opens an issue, or pushes a commit to the repository. Workflows can also be triggered on a schedule, by posting to the REST API, or manually.

### Jobs
Jobs are a series of steps that run on the same runner within a workflow. Each step can be a shell script to run or an action to execute. Steps are executed in order and are dependent on each other. Since steps run on the same runner, they can share data between them. For example, you can have a step to build an application followed by a step to test the built application.

Dependencies between jobs can be configured, and by default, jobs run independently and in parallel. When a job depends on another, it will only run after the dependent job has completed. For example, you can have multiple build jobs for different architectures running in parallel, followed by a packaging job that runs only after all build jobs are complete.

### Actions
Actions are custom applications for the GitHub Actions platform that perform complex tasks frequently repeated. Actions can reduce the repetitive code you write in your workflow files. They can fetch repositories from GitHub, set up the correct toolchain for the build environment, or configure authentication with cloud providers.

You can create your own actions or find actions to use in your workflows from the GitHub Marketplace.

### Runners
A runner is a server that executes your workflows when they're triggered. Each runner can run only one job at a time. GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run workflows. Each workflow run executes on a fresh virtual machine provisioned for that run. GitHub also offers larger runners. For more details, refer to "About larger runners." If you need a different operating system or specific hardware configuration, you can use self-hosted runners.

## Creating an Example Workflow
GitHub Actions uses YAML syntax to define workflows. Each workflow is managed as a separate YAML file stored in the `.github/workflows` directory.

You can create an example workflow that automatically triggers a series of commands whenever code is pushed. In this workflow, GitHub Actions will check out the pushed code, install the bats testing framework, and run a basic command to output the bats version: `bats -v`.

Create the `.github/workflows/` directory in your repository to store workflow files.

Create a new file named `learn-github-actions.yml` in the `.github/workflows/` directory and add the following code:

```yaml
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g bats
      - run: bats -v
```

Commit this change and push it to your GitHub repository.

The new GitHub Actions workflow file is now set up in your repository and will automatically run whenever someone pushes changes to the repository. For more details on viewing workflow run history, see "Viewing the workflow run history."

## Understanding the Workflow File
To understand how YAML syntax is used to create workflow files, let’s explain each line of the example.

```yaml
name: learn-github-actions
```
- Optional - The name of the workflow as it will appear in the "Actions" tab of the GitHub repository. If omitted, the filename of the workflow file will be used instead.

```yaml
run-name: ${{ github.actor }} is learning GitHub Actions
```
- Optional - The name of the workflow run created by this workflow, displayed in the list of workflow runs in the "Actions" tab of the repository. This example uses the `github` context to display the name of the user who triggered the workflow run. For more information, see "Workflow syntax for GitHub Actions."

```yaml
on: [push]
```
- Specifies the trigger for this workflow. In this example, the workflow is triggered by the `push` event, so it runs whenever someone pushes changes or merges a pull request into the repository. This triggers on pushes to any branch.

```yaml
jobs:
```
- Groups all jobs running in the `learn-github-actions` workflow.

```yaml
  check-bats-version:
```
- Defines a job named `check-bats-version`. The sub-keys define the properties of the job.

```yaml
    runs-on: ubuntu-latest
```
- Configures the job to run on the latest version of an Ubuntu Linux runner. This means the job runs on a new virtual machine hosted by GitHub.

```yaml
    steps:
```
- Groups all steps that run in the `check-bats-version` job. Each item nested in this section is a separate action or shell script.

```yaml
      - uses: actions/checkout@v4
```
- The `uses` keyword specifies that this step runs version 4 of the `actions/checkout` action. This action checks out the repository to the runner, allowing scripts or other actions to access the code. If your code needs to be accessed, you must use the checkout action.

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
```
- This step uses the `actions/setup-node@v4` action to install the specified version of Node.js (version 20 in this example). It adds the `node` and `npm` commands to the `PATH`.

```yaml
      - run: npm install -g bats
```
- The `run` keyword instructs the job to execute a command on the runner. In this case, it uses `npm` to install the `bats` software testing package.

```yaml
      - run: bats -v
```
- Finally, this step runs the `bats` command to output the software version.

### Visualizing the Workflow File
This diagram shows how the workflow file you just created is hierarchically organized with GitHub Actions components. Each step runs one action or shell script. Steps 1 and 2 run actions, and steps 3 and 4 run shell scripts.

### Viewing Workflow Run History
When a workflow is triggered, a workflow run is created to execute the workflow. As a workflow run begins, you can visually see its progress and view the activities of each step on GitHub.

1. On GitHub.com, navigate to the main page of the repository.

2. Under the repository name, click the "Actions" tab.

3. In the left sidebar, click the workflow you want to see.

4. In the workflow run list, click the name of the run to see the workflow run summary.

5. In the left sidebar or the visualization graph, click the job you want to see.

6. Click a step to view the results of that step.