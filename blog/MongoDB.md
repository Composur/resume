
## 索引
>index（索引）建索引是为了提高查询速度，要根据实际业务建立索引
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
	ReplySchema.index({topic_id:1,author_id:1});//1是正序，-1是倒序
	ReplySchema.index({topic_id:1,create_at:1})
```


> executionStats：MongoDB运行查询优化器选择获胜的计划，执行计划，完成并返回成功，统计描述的胜利计划的执行

```
db.person.find({name:'test'+1000}).explain('executionStats')

```
> 二者相差462毫秒（我服务器太差劲！哈哈哈）


### 常用索引命令
1. 查询索引
```
db.col.getIndexes()
```

2. 查看集合索引大小
```
db.col.totalIndexSize()
```
3. 删除集合所有索引
```
db.col.dropIndexes()
```
4. 删除集合指定索引
```
db.col.dropIndex("索引名称")

```

### 修改数据库名
```
db.copyDatabase('old_name', 'new_name'); 
use old_name 
db.dropDatabase(); //不要忘了加分号
  ```
	
### Linux的配置文件
```
/etc/mongod.conf
```
### 开机自启动
```
$ sudo systemctl start mongod
$ sudo systemctl status mongod
$ sudo systemctl enable mongod
```
### MongoDB备份
```
mongodump -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 -o 文件存在路径 
```

### mongorestore还原数据库
```
mongorestore -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 --drop 文件存在路径
```

### 导出数据
```
sudo mongoexport --db 数据库名称 -c 表名 --out newdbexport.json
```



### 常用操作命令
#### 查询
1. 查询用户列表；过滤0表示不返回，1表示返回，sort排序 正序or倒序
```
 UserModel.find({username: {'$ne': 'admin'}},{password:0,__v:0}).sort({"_id": -1})
```
2. 按日期查询
```
db.getCollection('projects').find({ "createdAt" : { "$gte" : ISODate("2018-01-00T00:00:00Z")  , "$lt" : ISODate("2018-01-30T00:00:00Z") } })
##ID
db.getCollection('userdashboards').find({'_id':ObjectId("59fa7515b7cc5588cadffad9")})
```
#### 删除
3. 删除user表含有name字段的对象
```
db.users.deleteMany({name:{$exists:true}})
```






