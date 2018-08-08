### 运行 fdisk -l 命令查看实例是否有数据盘
### 创建一个单分区数据盘，依次执行以下命令：
+ 运行 fdisk /dev/vdb：对数据盘进行分区
+ 输入 n 并按回车键：创建一个新分区
+ 输入 p 并按回车键：选择主分区。因为创建的是一个单分区数据盘，所以只需要创建主分区。
+ 输入分区编号并按回车键。因为这里仅创建一个分区，可以输入 1
+ 输入第一个可用的扇区编号：按回车键采用默认值 1
+ 输入最后一个扇区编号：因为这里仅创建一个分区，所以按回车键采用默认值。
+ 输入 wq 并按回车键，开始分区。
###  运行命令 fdisk -l 看是否有分区创建
+ 在新分区上创建一个文件系统：运行命令 mkfs.ext3 /dev/vdb1
+ （建议）备份 etc/fstab：运行命令 cp /etc/fstab /etc/fstab.bak
+ 向 /etc/fstab 写入新分区信息：运行命令 echo /dev/vdb1 /mnt ext3 defaults 0 0 >> /etc/fstab。
+ 挂载文件系统：运行命令 mount /dev/vdb1 /mnt。
### 运行命令 df -h 查看分区
#!/bin/sh
# dump 命令执行路径，根据mongodb安装路径而定
DUMP=/usr/bin/mongodump
# 临时备份路径
# OUT_DIR=/var/mongodb-data-backup/uncompress
OUT_DIR=/mnt/MongodbBakup/uncompress
# 压缩后的备份存放路径date
# TAR_DIR=/var/mongodb-data-backup/compress
TAR_DIR=/mnt/MongodbBakup/compress
# 当前系统时间
DATE=`date +%Y-%m-%d`
# 数据库账号
//DB_USER=user
# 数据库密码
//DB_PASS=password
# 代表删除7天前的备份，即只保留近 7 天的备份
DAYS=100
# 最终保存的数据库备份文件
TAR_BAK="mongod_bak_$DATE.tar.gz"
cd $OUT_DIR
rm -rf $OUT_DIR/*
mkdir -p $OUT_DIR/$DATE
#$DUMP -h 127.0.0.1:27017 -u $DB_USER -p $DB_PASS -d dbname -o $OUT_DIR/$DATE
$DUMP -o $OUT_DIR/$DATE
# 压缩格式为 .tar.gz 格式
tar -zcvf $TAR_DIR/$TAR_BAK $OUT_DIR/$DATE
# 删除 100 天前的备份文件
find $TAR_DIR/ -mtime +$DAYS -delete

exit