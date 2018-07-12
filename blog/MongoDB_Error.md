### Mongodb 启动警告WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.解决
```
WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'
WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
```
#### 系统信息

```
LSB Version:	core-9.20160110ubuntu0.2-amd64:core-9.20160110ubuntu0.2-noarch:security-9.20160110ubuntu0.2-amd64:security-9.20160110ubuntu0.2-noarch
Distributor ID:	Ubuntu
Description:	Ubuntu 16.04.3 LTS
Release:	16.04
Codename:	xenial
```

#### 解决办法

```
sudo echo "never" > /sys/kernel/mm/transparent_hugepage/enabled
sudo echo "never" >  /sys/kernel/mm/transparent_hugepage/defrag
```

#### 重启MongoDB _[建议配置好启动文件](https://blog.csdn.net/composurext/article/details/79900676)_
    
```
mongod –f /etc/mongod.conf

```