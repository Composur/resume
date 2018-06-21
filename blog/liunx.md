### ubuntu运行sh脚本sudo自动输入密码
+ 第一种方法（文本块，重定向）
    ```
    #!/bin/bash
    sudo -S apt-get update << EOF 
    Your password
    EOF
    ```
+ 第二种方法（使用管道）
    ```
    #!/bin/bash
    echo password | sudo -S apt-get update
    ```
### 磁盘管理
+ 查看磁盘空间 df -h
+ 查看目录大小 du -sh
+ 打包 tar -cvf
+ 解包 tar -xvf
+ 压缩 gzip
+ 解压缩 gunzip bzip
### 进程管理
+ lsof(list open files)，列举系统中已经被打开的文件！
+ ps -ef | grep user 查询当前用户下的进程
+ lsof -i:27017 查看端口占用的状态
+ lsof +d mydir/ 查看指定文件夹下被进程开启的文件
+ kill pid (process ID)杀死指定的PID进程
+ kill -9 pid 杀死相关进程
+ top 资源管理器，键入top后键入P(根据CPU大小排序),M(根据驻留内存大小排序),
+ 也可以安装htop功能更强大
### 性能监控
+ 查看CPU的使用频率
    ```
    $ sar -u 1 2 //每秒采样一次，总共采样两次
    ```
### 网络工具
+ 查询网络服务和端口
    + 列出所有TCP端口号
    ```
    netstat -at
    ```
    + 使用netstat工具查询端口:
     ```
     netstat -antp | grep 27017
     ```
    + 使用ps工具查询进程详情
    ```
    ps -fe | grep 19034
    ```
+ ftp/sftp文件传输
    ```
    $sftp ID@host
    ```
    + get filename # 下载文件
    + put filename # 上传文件
    + ls # 列出host上当前路径的所有文件
    + cd # 在host上更改当前路径
    + lls # 列出本地主机上当前路径的所有文件
    + lcd # 在本地主机更改当前路径
    
+ 网络复制
    + 将本地localpath指向的文件上传到远程主机的path路径:
    ```
    $scp localpath username@host:path
    ```
    + 以ssh协议，遍历下载path路径下的整个文件系统，到本地的localpath:

    ```
    $scp -r username@host:path localpath
    ```
### 用户管理工具

+ 查看所有用户及权限
    ```
    more /etc/passwd
    ```
+ 更改读写权限
    ```
    $chmod a+x main         对所有用户给文件main增加可执行权限
    $chmod g+w blogs        对组用户给文件blogs增加可写权限
    ```
### 系统管理
+ 查看liunx版本
    ```
    lsb_release -a
    ```
+ 查看CPU的使用情况

+ 查看CPU的核的个数
    ```
    $cat /proc/cpuinfo | grep processor | wc -l
    ```
+ 查看内存信息

    ```
    cat /proc/meminfo
    ```
+ 设置系统时间

    ```
    $date -s 2018-05-05 00:00:00
    ```
+ 设置时区
    ```
    tzselect
    ```
+ 强制把系统时间写入CMOS
    ```
    $clock -w
    ```
### 