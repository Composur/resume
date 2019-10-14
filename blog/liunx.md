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
+ 压缩 zip ./test.zip ./* -r （递归）-m (删除压缩的文件)
+ 解压缩 unzip test.zip 
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
    + 下载网页

    ```
    wget -p -H -e robots=off https://www.baidu.com ./
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

    + 当scp定时脚本的时候要输入密码的时候我们可以这样免密码操作
        
        + 在脚本所在服务器上操作
        ```
            ssh-keygen -t rsa

        ```
        + 出来的提示可以用默认值,然后将产生的公共密钥传到目标机器

       ```
        scp ~/.ssh/id_rsa.pub username@IP:/home、username/.ssh/authorized_keys
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
    $chmod a+x main         对所有用户给文件main增加可执行权限
    $chmod g+w blogs        对组用户给文件blogs增加可写权限
    ```
+ 增加用户
    ```
    sudo adduser new_username
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
+ 查看当前时间状态
    ```
    timedatectl status
    ```
+ 修改时区为上海

    ```
    timedatectl set-timezone "Asia/Shanghai"
    ```
### mongodb backup script
    ```
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

    ```
### 备份到FTP
    ```
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
    ```
### 其它
##check version
lsb_release -a
#杀死进程
sudo netstat -tulpn | grep :80

sudo kill -9 1066
$ pm2 delete 0           # 杀死指定的进程
$ pm2 delete all         # 杀死全部进程
pm2 monit               #监视每个 node 进程的 CPU 和内存的使用情况。
#查看文件大小的命令：
~$   ls  -l    filename

#查看文件夹大小
~$ cd  Foldename进到Foldename 目录
~$  du    -sh
#Linux命令行下修改文件或文件夹名
$ mv file1 file2
#查看磁盘的使用情况命令：

~$  df    -h

#压缩文件文件夹
tar zcvf Retail.tar.gz Retail/
#解压
tar -xvf Retail.tar.gz
#查看swap file
~$ free -m 
~$ top

# 查看物理CPU个数
  cat /proc/cpuinfo| grep "physical id" | sort| uniq | wc -l

# 查看每个物理CPU中core的个数(即核数)
  cat /proc/cpuinfo| grep "cpu cores"| uniq
  
# 查看逻辑CPU的个数
  cat /proc/cpuinfo| grep "processor"| wc -l
# 路由追踪
	tracert ip
#防火墙	
sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口


##查看已经连接的服务端口（ESTABLISHED）

netstat -a

##查看所有的服务端口（LISTEN，ESTABLISHED）

netstat -ap

##查看指定端口，可以结合grep命令：

netstat -ap | grep 8080

###也可以使用lsof命令：

lsof -i:8888


sudo lsof -i | grep ssh
##若要关闭使用这个端口的程序，使用kill + 对应的pid

kill -9 PID号

##查看本机上所有cron服务
ls -l /etc/init.d

##备份mongo数据库
mongodump --host=127.0.0.1 --db ___backup --o /xt/___backup



##
ln -s /usr/local/share/phantomjs/bin/phantomjs /usr/local/bin/phantomjs 


1.安装phantomjs

—-下载程序文件

wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2
32位ubuntu下载链接是https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-i686.tar.bz2。

—-解压文件

tar -xvf phantomjs-1.9.7-linux-x86_64.tar.bz2
–将程序移到一个合适的位置

sudo mv phantomjs-1.9.7-linux-x86_64 /usr/local/src/phantomjs
—-创建软链接到环境变量中。这样可以直接在shell中使用phantomjs命令

sudo ln -sf /usr/local/src/phantomjs/bin/phantomjs /usr/local/bin/phantomjs
—-检查是否正常工作
2) Error: /node_modules/node-highcharts-exporting/node_modules/phantomjs/lib/phantom/bin/phantomjs: error while loading shared libraries: libfontconfig.so.1: cannot open shared object file: No such file or directory
SOLUTION:
TRY: 
$ sudo apt-get install libfontconfig
phantomjs

##Windows远程桌面连接
	mstsc
	
百度 ip119.75.217.109


npm install -g cnpm --registry=https://registry.npm.taobao.org



2、启动pm2 start ./bin/www

可以通过pm2 startup来实现开机自启动。细节可参考。大致流程如下

通过pm2 save保存当前进程状态。
通过 pm2 startup [ubuntu|centos|gentoo|systemd]生成开机自启动的命令。（记得查看控制台输出）
将步骤2生成的命令，粘贴到控制台进行，搞定。


# 删除软件及其配置文件
apt-get --purge remove <package>
# 删除没用的依赖包
apt-get autoremove <package>
# 此时dpkg的列表中有“rc”状态的软件包，可以执行如下命令做最后清理：
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P
关于部署;
不要把代码发布在user home 如果删除user会删除application 要放到 var/www 目录下



1、我们需要在虚拟机得Ubuntu系统安装ssh服务，其安装命令为：

sudo apt-get install openssh-server

查询其服务时候安装成功的命令：

netstat -tlp 
如显示如下结果，即表明服务启动成功：




source /etc/network/interfaces.d

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto ens33
iface ens33 inet static
address 192.168.0.238
netmask 255.255.255.0
gateway 192.168.0.1

dns-nameservers 8.8.8.8



## ssh id_rsa
ssh-keygen -t rsa
# authorized_keys 不存在
scp ~/.ssh/id_rsa.pub username@example.com:~/.ssh/authorized_keys
# 无论存不存在
ssh-copy-id username@example.com

#提升用户权限，普通用户访问root文件夹
chmod a+rx /root
mkdir /root/a
chmod 777 /root/a

# 挂载硬盘 
mount  /dev/sdb /root路径

//开机自动挂载
sudo vi /etc/fstab 
add UUID=3736236a1d-11f4-4880-be50e-f3e3acd2a06634235 /root/mongo-data-newDisk exts4 defaults 0 0
37366a1d-11f4-4880-be0e-f3e3acd2a0436624234234
#find uuid 
cd /dev/disk/by-uuid
ll


	
//过滤cron日志
grep CRON /var/log/syslog



//To list all local users you can use:
cut -d: -f1 /etc/passwd