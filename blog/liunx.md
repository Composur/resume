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



