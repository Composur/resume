### PM2 笔记
可以通过pm2 startup来实现开机自启动。细节可参考。大致流程如下
通过pm2 save保存当前进程状态。
通过 pm2 startup [ubuntu|centos|gentoo|systemd]生成开机自启动的命令。（记得查看控制台输出）
将步骤2生成的命令，粘贴到控制台进行，搞定。