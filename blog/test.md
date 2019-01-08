### 打印出一个命令的路径
```
  type ls
  ls is hashed (/usr/bin/ls)
```
### 创建自定义工程目录
> $1代表你想定义的目录
```
   mkdir $1
   cd $1
   css js
   touch index.html css/style.css js/main.js
   exit
```
> 执行
```
 script.sh demo
```
### 判断自定义的目录是否存在

```
if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo 'success'
  exit
fi
```
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
+ 查看磁盘空间 `df -h`
+ 查看目录大小 `du -sh`
+ 打包 `tar -cvf`
+ 解包 `tar -xvf`
+ 压缩 `gzip`
+ 解压缩 `gunzip bzip`
### 进程管理
+ `lsof`(list open files)，列举系统中已经被打开的文件！
+ `ps -ef | grep user` 查询当前用户下的进程
+ `lsof -i:27017` 查看端口占用的状态
+ `lsof +d mydir/` 查看指定文件夹下被进程开启的文件
+ `kill pid` (process ID)杀死指定的PID进程
+ `kill -9 pid` 杀死相关进程
+ `top` 资源管理器，键入`top`后键入`P`(根据`CPU`大小排序),`M`(根据驻留内存大小排序),
+ 也可以安装`htop`功能更强大

 ```
 sudo apt-get install htop
 htop
 ```
### 操作文件、文件夹
+ 查看文件大小的命令：

  ```
  ls  -l    filename
  ```
+ 查看文件夹大小

  ```
 cd  Foldename进到Foldename 目录
 du    -sh
  ```
+ 修改文件或文件夹名

  ```
mv file1 file2
  ```
+ 查看磁盘的使用情况命令：

  ```
 df    -h
  ```
+ 压缩文件文件夹

  ```
 tar zcvf Retail.tar.gz Retail/
  ```
+ 解压

  ```
 tar -xvf Retail.tar.gz
  ```

### 性能监控
+ 查看CPU的使用频率

    ```
    sar -u 1 2 //每秒采样一次，总共采样两次
    ```
### 网络工具
+ 查询网络服务和端口
    + 列出所有`TCP`端口号

      ```
    netstat -at
      ```
    + 使用`netstat`工具查询端口:

     ```
     netstat -antp | grep 27017
     ```
    + 使用`ps`工具查询进程详情

      ```
     ps -fe | grep 19034
      ```
+ `ftp/sftp`文件传输

    ```
    sftp ID@host
    get filename # 下载文件
    put filename # 上传文件
    ls # 列出host上当前路径的所有文件
    cd # 在host上更改当前路径
    lls # 列出本地主机上当前路径的所有文件
    lcd # 在本地主机更改当前路径
    ```
+ 网络复制
    + 将本地localpath指向的文件上传到远程主机的path路径:

      ```
    scp localpath username@host:path
      ```

    + 以ssh协议，遍历下载path路径下的整个文件系统，到本地的localpath:

      ```
    scp -r username@host:path localpath
      ```
### 用户管理工具
+ 查看所有用户

    ```
    cut -d: -f1 /etc/passwd
    ```
+ 查看所有用户及权限

    ```
    more /etc/passwd
    ```
+ 更改读写权限

    ```
    chmod a+x main         对所有用户给文件main增加可执行权限
    chmod g+w blogs        对组用户给文件blogs增加可写权限
    ```
+ 增加用户

    ```
    sudo adduser new_username
    ```
### 系统管理
+ 查看`liunx`版本

    ```
    lsb_release -a
    ```

+ 查看`CPU`的核的个数

    ```
    cat /proc/cpuinfo | grep processor | wc -l
    ```
+ 查看内存信息

    ```
    cat /proc/meminfo
    ```
+ 设置系统时间

    ```
    date -s 2018-05-05 00:00:00
    ```
+ 设置时区

    ```
    tzselect
    ```
+ 强制把系统时间写入CMOS

    ```
    clock -w
    ```
+ 查看当前时间状态

    ```
    timedatectl status
    ```
+ 修改时区为上海

    ```
    timedatectl set-timezone "Asia/Shanghai"
    ```
### mongodb backup script
    #!/bin/sh
    # dump 命令执行路径，根据mongodb安装路径而定
    DUMP=/usr/bin/mongodump
    # 临时备份路径
    #OUT_DIR=/var/mongodb-data-backup/uncompress
    OUT_DIR=/root/mongo-data-newDisk/mongoDB_Backup/mongodb-data-backup/compress
    # 压缩后的备份存放路径date
    #TAR_DIR=/var/mongodb-data-backup/compress
    TAR_DIR=/root/mongo-data-newDisk/mongoDB_Backup/mongodb-data-backup/uncompress
    # 当前系统时间
    DATE=`date +%Y-%m-%d`
    # 数据库账号
    //DB_USER=user
    # 数据库密码
    //DB_PASS=password
    # 代表删除7天前的备份，即只保留近 7 天的备份
    DAYS=7
    # 最终保存的数据库备份文件
    TAR_BAK="mongod_bak_$DATE.tar.gz"
    cd $OUT_DIR
    rm -rf $OUT_DIR/*
    mkdir -p $OUT_DIR/$DATE
    #$DUMP -h 127.0.0.1:27017 -u $DB_USER -p $DB_PASS -d dbname -o $OUT_DIR/$DATE
    $DUMP -o $OUT_DIR/$DATE
    # 压缩格式为 .tar.gz 格式
    tar -zcvf $TAR_DIR/$TAR_BAK $OUT_DIR/$DATE
    # 删除 7 天前的备份文件
    find $TAR_DIR/ -mtime +$DAYS -delete

    exit
### 备份到FTP
    #!/bin/bash           
    HOST=you-ftp-Address                   
    USER=username                    
    PASSWORD=pwd                    
    ftp -inv $HOST <<EOF            
    user $USER $PASSWORD
    cd Ubuntu-mongoBackup/					
    lcd /var/mongodb-data-backup/compress             
    mput *.tar.gz                     
    bye                     
    EOF

###查看swap file
```
 free -m  
 top
```
### 查看CPU信息

+ 查看物理CPU个数

  ```
  cat /proc/cpuinfo| grep "physical id" | sort| uniq | wc -l
  ```
+ 查看每个物理CPU中core的个数(即核数)

  ```
  cat /proc/cpuinfo| grep "cpu cores"| uniq
  ```  
+ 查看逻辑CPU的个数

  ```
  cat /proc/cpuinfo| grep "processor"| wc -l
  ```
+  路由追踪

  ```
tracert ip
  ```

###防火墙
```
sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口
```
###查看已经连接的服务端口（ESTABLISHED）
+ 
```
netstat -a
```
+ 查看所有的服务端口（LISTEN，ESTABLISHED）

  ```
netstat -ap
  ```

+ 查看指定端口，可以结合grep命令：

  ```
  netstat -ap | grep 8080
  ```
+ 也可以使用lsof命令：

  ```
  lsof -i:8888
  sudo lsof -i | grep ssh
  ```
+ 若要关闭使用这个端口的程序，使用kill + 对应的pid

  ```
  kill -9 PID号
  ```
+ 杀死进程

  ```
  sudo netstat -tulpn | grep :80
  ```

###CRON
+ 查看本机上所有cron服务
  ```
     ls -l /etc/init.d
  ```

+ 过滤cron日志

  ```
  grep CRON /var/log/syslog
  ```
### 过滤系统日志
```
   sed -n '/2018-09-01/,/2018-09-09/p'  path/xxx.log
```



