{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Pulumi를 사용하여 Azure에서 간단한 웹 인프라 구성하기\n",
    "\n",
    "이 실습에서는 Pulumi를 사용하여 Azure에 간단한 웹 애플리케이션 인프라를 구성할 것이다. 이를 위해 Azure Virtual Network(VNet), Subnet, 두 대의 Virtual Machine(VM), 그리고 MySQL 서버를 생성할 것이다. Pulumi를 통해 이러한 리소스를 생성하고 관리하는 방법을 단계별로 설명하겠다."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## 사전 준비\n",
    "\n",
    "Pulumi를 사용하여 Azure 리소스를 구성하기 전에 필요한 준비 단계가 있다."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Pulumi CLI 설치\n",
    "Pulumi CLI는 Pulumi의 핵심 도구이다. 설치는 아래 명령어를 사용하면 된다.\n",
    "설치가 완료되면 `pulumi` 명령어를 사용할 수 있게 된다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Pulumi CLI 설치 명령어\n",
    "!curl -fsSL https://get.pulumi.com | sh"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Azure CLI 설치 및 로그인\n",
    "Azure CLI를 설치하고 인증을 완료해야 한다. 아래 명령어를 사용하여 설치 및 로그인할 수 있다.\n",
    "```bash\n",
    "az login\n",
    "```\n",
    "Azure CLI를 사용하여 현재 로그인된 계정을 확인하려면 아래 명령어를 실행한다.\n",
    "```bash\n",
    "az account show\n",
    "```"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Azure CLI 설치 및 로그인\n",
    "!az login\n",
    "\n",
    "!az account show"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Pulumi 프로젝트 생성\n",
    "새로운 Pulumi 프로젝트를 생성하여 시작한다. Python을 예로 들어 프로젝트를 생성한다.\n",
    "이 명령어는 새로운 Pulumi 프로젝트를 초기화하고, 기본적인 프로젝트 구조를 생성한다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Pulumi 프로젝트 생성 명령어\n",
    "!mkdir pulumi-azure-web\n",
    "!cd pulumi-azure-web\n",
    "!pulumi new azure-python"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## 리소스 생성\n",
    "Pulumi를 사용하여 Azure 인프라를 구성하는 단계는 다음과 같다."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Virtual Network 및 Subnet 생성\n",
    "웹 애플리케이션을 위한 네트워크를 구성하기 위해 Azure Virtual Network와 Subnet을 생성한다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Pulumi를 사용하여 Azure 리소스를 구성하는 코드\n",
    "import pulumi\n",
    "import pulumi_azure as azure\n",
    "\n",
    "# 리소스 그룹 생성\n",
    "resource_group = azure.core.ResourceGroup(\"web-rg\")\n",
    "\n",
    "# Virtual Network 생성\n",
    "vnet = azure.network.VirtualNetwork(\"web-vnet\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    address_spaces=[\"10.0.0.0/16\"])\n",
    "\n",
    "# Subnet 생성\n",
    "subnet = azure.network.Subnet(\"web-subnet\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    virtual_network_name=vnet.name,\n",
    "    address_prefixes=[\"10.0.1.0/24\"])"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Virtual Machines 생성\n",
    "웹 서버로 사용할 두 대의 Virtual Machine을 생성한다. SSH 키를 사용하여 VM에 접근할 수 있도록 설정한다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# SSH 키 생성 (실제 키를 사용해야 함)\n",
    "public_key = \"\"\"\n",
    "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7E...example-key... your-email@example.com\n",
    "\"\"\"\n",
    "\n",
    "# 네트워크 인터페이스 생성\n",
    "nic1 = azure.network.NetworkInterface(\"web-nic1\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    ip_configurations=[{\n",
    "        \"name\": \"internal\",\n",
    "        \"subnet_id\": subnet.id,\n",
    "        \"private_ip_address_allocation\": \"Dynamic\"\n",
    "    }])\n",
    "\n",
    "nic2 = azure.network.NetworkInterface(\"web-nic2\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    ip_configurations=[{\n",
    "        \"name\": \"internal\",\n",
    "        \"subnet_id\": subnet.id,\n",
    "        \"private_ip_address_allocation\": \"Dynamic\"\n",
    "    }])\n",
    "\n",
    "# 첫 번째 Virtual Machine 생성\n",
    "vm1 = azure.compute.VirtualMachine(\"web-vm1\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    network_interface_ids=[nic1.id],\n",
    "    vm_size=\"Standard_B1s\",\n",
    "    delete_data_disks_on_termination=True,\n",
    "    delete_os_disk_on_termination=True,\n",
    "    os_profile={\n",
    "        \"computer_name\": \"webvm1\",\n",
    "        \"admin_username\": \"adminuser\",\n",
    "        \"admin_ssh_key\": {\n",
    "            \"key_data\": public_key,\n",
    "        }\n",
    "    },\n",
    "    os_profile_linux_config={\n",
    "        \"disable_password_authentication\": True,\n",
    "    },\n",
    "    storage_os_disk={\n",
    "        \"create_option\": \"FromImage\",\n",
    "        \"name\": \"webvm1osdisk\"\n",
    "    },\n",
    "    storage_image_reference={\n",
    "        \"publisher\": \"Canonical\",\n",
    "        \"offer\": \"UbuntuServer\",\n",
    "        \"sku\": \"18.04-LTS\",\n",
    "        \"version\": \"latest\"\n",
    "    })\n",
    "\n",
    "# 두 번째 Virtual Machine 생성\n",
    "vm2 = azure.compute.VirtualMachine(\"web-vm2\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    network_interface_ids=[nic2.id],\n",
    "    vm_size=\"Standard_B1s\",\n",
    "    delete_data_disks_on_termination=True,\n",
    "    delete_os_disk_on_termination=True,\n",
    "    os_profile={\n",
    "        \"computer_name\": \"webvm2\",\n",
    "        \"admin_username\": \"adminuser\",\n",
    "        \"admin_ssh_key\": {\n",
    "            \"key_data\": public_key,\n",
    "        }\n",
    "    },\n",
    "    os_profile_linux_config={\n",
    "        \"disable_password_authentication\": True,\n",
    "    },\n",
    "    storage_os_disk={\n",
    "        \"create_option\": \"FromImage\",\n",
    "        \"name\": \"webvm2osdisk\"\n",
    "    },\n",
    "    storage_image_reference={\n",
    "        \"publisher\": \"Canonical\",\n",
    "        \"offer\": \"UbuntuServer\",\n",
    "        \"sku\": \"18.04-LTS\",\n",
    "        \"version\": \"latest\"\n",
    "    })"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### MySQL 서버 생성\n",
    "웹 애플리케이션의 데이터베이스로 사용할 MySQL 서버를 생성한다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# MySQL 서버 생성\n",
    "mysql_server = azure.mysql.Server(\"web-mysql\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    location=resource_group.location,\n",
    "    administrator_login=\"mysqladmin\",\n",
    "    administrator_login_password=\"PulumiAdmin123!\",\n",
    "    sku={\n",
    "        \"name\": \"B_Gen5_1\",\n",
    "        \"tier\": \"Basic\",\n",
    "        \"capacity\": 1,\n",
    "        \"family\": \"Gen5\"\n",
    "    },\n",
    "    storage_profile={\n",
    "        \"storage_mb\": 5120,\n",
    "        \"backup_retention_days\": 7,\n",
    "        \"geo_redundant_backup\": \"Disabled\"\n",
    "    },\n",
    "    version=\"5.7\")\n",
    "\n",
    "# MySQL 데이터베이스 생성\n",
    "mysql_database = azure.mysql.Database(\"webdb\",\n",
    "    resource_group_name=resource_group.name,\n",
    "    server_name=mysql_server.name,\n",
    "    charset=\"utf8\",\n",
    "    collation=\"utf8_general_ci\")"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 리소스 내보내기\n",
    "생성된 모든 리소스를 Pulumi에서 내보내어 이후의 참조나 사용에 대비한다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 리소스 내보내기\n",
    "pulumi.export(\"resource_group_name\", resource_group.name)\n",
    "pulumi.export(\"vnet_name\", vnet.name)\n",
    "pulumi.export(\"subnet_name\", subnet.name)\n",
    "pulumi.export(\"vm1_name\", vm1.name)\n",
    "pulumi.export(\"vm1_private_ip\", nic1.private_ip_address)\n",
    "pulumi.export(\"vm2_name\", vm2.name)\n",
    "pulumi.export(\"vm2_private_ip\", nic2.private_ip_address)\n",
    "pulumi.export(\"mysql_server_name\", mysql_server.name)\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Pulumi 명령어 실행\n",
    "위의 모든 Python 코드를 작성한 후, 아래 명령어를 사용하여 Pulumi 프로그램을 실행하고 리소스를 Azure에 배포한다."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Pulumi 스택 초기화\n",
    "```bash\n",
    "pulumi stack init dev\n",
    "```\n",
    "이 명령어는 Pulumi 스택을 초기화한다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Pulumi 스택 초기화\n",
    "!pulumi stack init dev"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Azure 자격 증명 설정\n",
    "Azure CLI를 사용하여 로그인하고 현재 계정과 구독을 Pulumi에 적용한다.\n",
    "```bash\n",
    "az login\n",
    "az account set --subscription \"<your-subscription-id>\"\n",
    "```\n",
    "이 명령어를 통해 Azure에 인증하고, 사용할 구독을 설정할 수 있다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Azure 자격 증명 설정\n",
    "!az login\n",
    "!az account set --subscription \"<your-subscription-id>\""
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Pulumi 프로그램 실행\n",
    "Pulumi 프로그램을 실행하여 리소스를 생성한다.\n",
    "```bash\n",
    "pulumi up\n",
    "```\n",
    "이 명령어를 실행하면 Pulumi가 리소스를 구성하고 배포된다."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Pulumi 프로그램 실행\n",
    "!pulumi up"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
