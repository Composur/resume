### git初始化
+ 清空现有的key
```
rm -rf ~/.ssh/*
```
+ 运行
```
ssh-keygen -t rsa -b 4096 -C "你的邮箱"
```
+ 执行
```
cat ~/.ssh/id_rsa.pub
```
+ 把得到的公钥放到GitHub上
+ 执行
```
ssh -T git@github.com
```
+ 之后配置下git
```
git config --global user.name 你的英文名                                                   #此英文名不需要跟GitHub账号保持一致
git config --global user.email 你的邮箱                                                      #此邮箱不需要跟GitHub账号保持一致
git config --global push.default matching
git config --global core.quotepath false
git config --global core.editor "vim"

```



## Reset版本回退利器
#### 如果我们想回退到某个版本可以用git log查看，git log命令显示从最近到最远的提交日志如果嫌输出信息太多，可以试试加上--pretty=oneline参数;

* reset命令把当前分支指向另一个位置，并且有选择的变动工作目录和索引。也用来在从历史仓库中复制文件到索引，而不动工作目录。

* 如果不给选项（默认--mixed ），那么当前分支指向到那个提交。如果用--hard选项，那么工作目录也更新，如果用--soft选项，那么都不变。

* 如果没有给出提交点的版本号，那么默认用HEAD。这样，分支指向不变，但是索引会回滚到最后一次提交，如果用--hard选项，工作目录也同样。

* 如果给了文件名(或者 -p选项), 那么工作效果和带文件名的checkout差不多，除了索引被更新。

## git pull 和 git fetch 的区别
- 来一张珍藏的图
 ![](./img/git_pull.jpg)
- git pull = git fetch + merge
- git fetch 拿到了远程所有分支的更新
- merge 动作的默认目标是当前分支
- merge 动作的来源则取决于你是否有 tracking



### Git pull 强制覆盖本地文件

```
    git fetch --all  
    git reset --hard origin/master 
    git pull
```

### git branch HEAD detached at c49fac8

```
git symbolic-ref HEAD yields refs/heads/master
The branch named “master” is checked out.
git rev-parse refs/heads/master yield 17a02998078923f2d62811326d130de991d1a95a

```

### git clone branch

```
git branch -r/-a 查看远程/所有分支
```
然后
```
git checkout -b 本地分支名x origin/远程分支名x
```
会在本地新建分支x，并自动切换到该本地分支x