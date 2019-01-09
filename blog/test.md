>本文本着笔记的原则，没有那么的详细。**[<a href="https://github.com/Composur/resume/blob/master/blog/git.md" target="_blank">git</a>](#jump_10)** <a href="https://coolshell.cn/articles/5426.html" target="_black">vim</a>二者不在此述;
**[如果你觉得对你有帮助，欢迎点个赞](#jump_20)**
***
[不想看文字的这里有张图](https://i.loli.net/2017/08/22/599b9b3ca5bb7.png)

### 目录

[TOC]

### 磁盘管理
#### 基础命令
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

#### htop
```
sudo apt-get install htop
htop
```

####top的表头含义
| 表头 | 含义 |
|-----|-----|
| `PID` | 进程ID   | 
| `USER` | 进程所属用户   |
| `PRI` | 调度优先级   |
| `NI` | nice值   |
| `VIRT` | 虚拟内存大小   |
| `RES` | 使用的物理内存   |
| `SHR` | 共享内存   |
| `%MEM` | 使用内存的比例   |
| `S` | 进程状态   |
| `%CPU` | CPU份额   |
| `TIME+` | CPU时间（秒）   |
| `COMMAND` | 具体的命令   |

### 操作文件、文件夹
#### 基础操作
#### find
>find命令是一个无处不在命令，是linux中最有用的命令之一
```
find [-H] [-L] [-P] [-D debugopts] [-Olevel] [path...] [expression]
```
上面的参数过于复杂，对我们来说不是那么的常用，让我们简化一下。
```
find [path...] [expression]
find /dir -name filename  在/dir目录及其子目录下面查找名字为filename的文件 
find . -name "*.c" 在当前目录及其子目录（用“.”表示）中查找任何扩展名为“c”的文件
```

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
 tar -xvf xxx.tar.gz
  ```
#### 打印出一个命令的路径
```
  type ls
  ls is hashed (/usr/bin/ls)
```
#### 创建自定义工程目录
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
#### 判断自定义的目录是否存在

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
#### ubuntu运行sh脚本sudo自动输入密码
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



### 网络工具

#### 查询网络服务和端口
+ 列出所有`TCP`端口号

```
 netstat -at
```
+ 使用`netstat`工具查询端口:
```
 netstat -antp | grep 27017
```
##### netstat的常用参数含义
| 表头 | 含义 |
|-----|-----|
| `-a`（–all）|显示包括LISTEN状态的连接，默认没有。   | 
| `-t`（–tcp）| TCP连接。   |
| `-u`（–udp） | UDP连接   |
| `-n`（–numeric） | 显示数字形式的地址，比如 localhost:mongodb 会展示为 127.0.0.1:27017   |
| `-l`（–listening） | 仅显示处于监听状态的套接字   |
| `-p`（–program） | 显示PID和程序名   |

+ 使用`ps`工具查询进程详情
>ps命令用于输出当前系统的进程信息，和top的持续输出不同，ps输出的是一个快照。
```
 ps -fe | grep 19034 //-e所有进程，等同于 -A。-f可以看到更多的信息，比如完整的程序名。
```

#### ftp/sftp文件传输
```
  sftp ID@host
  get filename # 下载文件
  put filename # 上传文件
  ls # 列出host上当前路径的所有文件
  cd # 在host上更改当前路径
  lls # 列出本地主机上当前路径的所有文件
  lcd # 在本地主机更改当前路径
```
#### 网络复制
+ 将本地localpath指向的文件上传到远程主机的path路径:

```
scp localpath username@host:path
```

+ 以ssh协议，遍历下载path路径下的整个文件系统，到本地的localpath:

```
scp -r username@host:path localpath
```

### 用户管理工具
#### 增加sudo用户
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

+ [add sudo user](https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart)
### 系统管理
#### 查看swap file

```
 free -m  
 top
```
#### 查看CPU信息
#### 性能监控
+ 查看CPU的使用频率

    ```
    sar -u 1 2 //每秒采样一次，总共采样两次
    ```
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

####防火墙
```
sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口
```
####查看已经连接的服务端口（ESTABLISHED）
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

####CRON
+ 查看本机上所有cron服务
  ```
     ls -l /etc/init.d
  ```

+ 过滤cron日志

  ```
  grep CRON /var/log/syslog
  ```
#### 过滤系统日志
```
   sed -n '/2018-09-01/,/2018-09-09/p'  path/xxx.log
```
#### 其它
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
***

### 常见的自带命令
| 操作 | 命令 |
|-----|-----|
| 进入目录 | `cd `  | 
| 创建目录 | `mkdir 目录名`  |
| 创建目录	 | `mkdir -p 目录路径`  |
| 当前用户	 | `whoami ` |
| --	 | --  |
| 查看路径	 | `ls 路径` |
| 查看路径	 | `ls -a 路径`  |
| 查看路径	 | `ls -l 路径` |
| 查看路径	 | `ls -al 路径`  |
| --	 | --  |
| 创建文件	 | `touch 文件名` |
| 改变文件更新时间	 | `touch 文件名` |
| 创建文件	 | `echo '文件内容' > 文件路径`  |
| 强制创建文件	 | `echo '文件内容' > !文件路径`  |
| 追加文件内容	 | `echo '文件内容' >> 文件路径`  |
| --	 | --  |
| 复制文件	 | `cp 源路径 目标路径`  |
| 复制目录	 | `cp -r 源路径 目标路径`  |
| --	 | --  |
| 移动节点	 | `mv 源路径 目标路径`  |
| --	 | --  |
| 删除文件	 | `rm 文件路径`  |
| 强制删除文件	 | `rm -f 文件路径` |
| 删除目录	 | `rm -r 目录路径`  |
| 强制删除目录	 | `rm -rf 目录路径`  |
| --	 | --  |
| 查看目录结构	 | `tree`  |
| 建立软链接	 | `ln -s 真实文件 链接` |
| --	 | --  |
| 下载文件	 | `curl -L https://www.baidu.com > baidu.html`  |
| 磁盘占用	 | `df -kh`  |
| 当前目录大小	 | `du -sh .`  |
| 各文件大小	 | `du -h`  |

