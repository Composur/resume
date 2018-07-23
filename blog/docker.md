### Ubuntu 安装Docker环境，并部署NodeJS应用
+ Ubuntu版本
    ```
    LSB Version:	core-9.20160110ubuntu0.2-amd64:core-9.20160110ubuntu0.2-noarch:security-9.20160110ubuntu0.2-amd64:security-9.20160110ubuntu0.2-noarch
    Distributor ID:	Ubuntu
    Description:	Ubuntu 16.04.3 LTS
    Release:	16.04
    Codename:	xenial
    ```
+ 卸载旧版本
    ```
    $ sudo apt-get remove docker docker-engine docker.io
    ```
+ 更新 apt 软件包索引： 
    ```
    $ sudo apt-get update
    ```
+ 安装软件包，以允许 apt 通过 HTTPS 使用镜像仓库
    ```
    $ sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     software-properties-common
    ```
+ 添加 Docker 的官方 GPG 密钥：
    ```
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
     $ sudo apt-key fingerprint 0EBFCD88

        pub   4096R/0EBFCD88 2017-02-22
            Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
        uid                  Docker Release (CE deb) <docker@docker.com>
        sub   4096R/F273FCD8 2017-02-22
    ```
+ amd64：
    ```
     $ sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) \
        stable"
    ```
+ 安装最新版本的 Docker CE
    ```
    $ sudo apt-get install docker-ce
    ```
    特定版本的版本

    ```
     $ sudo apt-get install docker-ce=<17.06.0~ce-0~ubuntu-xenial>
    ```

    列出所有的版本

    ```
    apt-cache madison docker-ce
    ```
+ 验证是否正确的安装
    ```
     $ sudo docker run hello-world//此命令将下载一个测试镜像并在容器中运行它。容器运行时，它将输出一条参考消息并退出。
    ```
### 卸载docker
+ 卸载 Docker CE 软件包
    ```
     $ sudo apt-get purge docker-ce
    ```
+ 主机上的镜像、容器、存储卷、或定制配置文件不会自动删除。如需删除所有镜像、容器和存储卷，请运行下列命令：
    ```
     $ sudo rm -rf /var/lib/docker
    ```
### 非root账户启动docker设置
+ 创建 docker 组
    ```
    sudo groupadd docker
    ```
+ 向 docker 组中添加您的用户
    ```
    $ sudo usermod -aG docker username
    ```
+ 测试
    ```
    $ docker run hello-world
    ```
+ 将 Docker 配置为在启动时启动
    ```
    $ sudo systemctl enable docker
    ```
+ 如需禁用此性能，请改为使用 disable
    ```
    $ sudo systemctl disable docker
    ```
### 部署NodeJS应用
+ 拉取镜像
    ```
    sudo docker pull node:version

    ```
+ 创建Dockerfile
    Docker会依照Dockerfile的内容来构建一个镜像。
    ```
    $ cd ..
    $ touch Dockerfile
    $ vi Dockerfile
    ```

    ```
    #设置基础镜像,如果本地没有该镜像，会从Docker.io服务器pull镜像
    FROM node

    #设置工作目录(代码的根目录)
    WORKDIR /home/user/nodeapp

   
    #暴露container的端口
    EXPOSE 8888

    #运行命令
    CMD ["npm", "start"]

    ```
+ 未完待续...