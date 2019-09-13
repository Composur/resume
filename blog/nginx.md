### 常用的nginx命令
> nginx作为Web服务器的基础知识，前端应该了解一些重要的Nginx命令。

**下列命令默认需要管理员权限**
#### 1.启动Nginx
```
service nginx start
```
如果您使用的是基于systemd的版本，例如Ubuntu Linux 16.04LTS及更高版本，请systemctl在命令中使用，如下所示：
```
systemctl start nginx
```
#### 2.停止Nginx
终止所有nginx系统进程
```
service nginx stop
systemctl stop nginx
```
快速终止进程
```
killall -9 nginx
```
#### 3.退出Nginx
```
service nginx quit
systemctl quit nginx

```
#### 4.重启Nginx
```
service nginx restart
systemctl restart nginx
```
#### 5.重新加载Nginx
当你修改配置文件后可以使用此命令，使修改生效
```
service nginx reload
systemctl reload nginx
```
#### 6.查看Nginx服务状态
```
service nginx status
systemctl status nginx
```

#### 6.测试Nginx配置
修改配置reload后看服务启动是否正常
```
nginx -t
```
#### 7.检查Nginx版本
```
service nginx -v
systemctl -v nginx
```
#### 8.显示命令帮助
```
service nginx -h
systemctl -h nginx
```
