#安装的位置

mv mongodb-linux-aarch64-ubuntu1604-3.4.10/ /usr/local/mongodb

/usr/local/mongodb

export PATH=/usr/local/mongodb/bin:$PATH

## 修改数据库名
		
	db.copyDatabase('old_name', 'new_name'); 
	use old_name 
	db.dropDatabase(); //不要忘了加分号
	
##Linux该配置文件
/etc/mongod.conf

## 过滤mongo进程
ps aux | grep mongo

##关闭mongo db服务
使用shutdownServer()
# mongo // 从linux命令行进入mongod命令行
> use admin // 切换到管理员模式
> db.shutdownServer() // 关闭mongodb服务


##开机自启动
$ sudo systemctl start mongod
$ sudo systemctl status mongod
$ sudo systemctl enable mongod

### linux 安装 mongodb 时的"dbpath (/data/db/) does not "
前面安装来说都是很顺利的，但是在启动的时候遇到了这么一个问题
ERROR: dbpath (/data/db/) does not exist.
Create this directory or give existing directory in --dbpath. See http://dochub.mongodb.org/core/startingandstoppingmongo
从这个问题来看 ，应该是没有创建 /data/db 目录，那么就用 “sudo mkdir -p /data/db”命令创建。但问题是重新启动还是出现了同样的问题，
原因是文件夹的权限不够，那么解决的方法就是允许文件夹有读写的权限即可，那么运行下面的命令
sudo chmod 777 -R /data


MongoDB备份
mongodump -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 -o 文件存在路径 

mongorestore还原数据库
mongorestore -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 --drop 文件存在路径

#导出数据
sudo mongoexport --db 数据库名称 -c 表名 --out newdbexport.json






echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get install -y mongodb-org=3.4.10 mongodb-org-server=3.4.10 mongodb-org-shell=3.4.10 mongodb-org-mongos=3.4.10 mongodb-org-tools=3.4.10

sudo apt-get install -y mongodb-org=3.4.10
sudo apt-get install -y mongodb-org=3.4.10 mongodb-org-server=3.4.10 mongodb-org-shell=3.4.10 mongodb-org-mongos=3.4.10 mongodb-org-tools=3.4.10




###按日期查询
db.getCollection('projects').find({ "createdAt" : { "$gte" : ISODate("2018-01-00T00:00:00Z")  , "$lt" : ISODate("2018-01-30T00:00:00Z") } })
##ID
db.getCollection('userdashboards').find({'_id':ObjectId("59fa7515b7cc5588cadffad9")})

## MongoDB使用过程笔记
+ index（索引）
	建索引是为了提高查询速度，要根据实际业务建立索引
	```
	const BaseModel=require('../models/base')
	const mongoose=require('mongoose')
	const {Schema}=mongoose
	const {ObjectId}=Schema

	const ReplySchema=new Schema({
		content:{type:String,required:true},
		topic_id:{type:ObjectId,required:true},
		author_id:{type:ObjectId,required:true},
		reply_id:{type:ObjectId},

		create_at:{type:Date,default:Date.now},
		update_at:{type:Date,default:Date.now},

		ups:{type:Array,default:[]}
	})

	ReplySchema.plugin(BaseModel)

	//建立查询索引
	ReplySchema.index({topic_id:1,author_id:1});// schema level, 1是正序，-1是倒序
	ReplySchema.index({topic_id:1,create_at:1})
	```
+ 查询用时
> executionStats：MongoDB运行查询优化器选择获胜的计划，执行计划，完成并返回成功，统计描述的胜利计划的执行
	```
	db.person.find({name:'xutong'+1000}).explain('executionStats')

	```



