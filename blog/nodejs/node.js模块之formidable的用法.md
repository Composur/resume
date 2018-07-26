### node.js模块--formidable
> formidable用于解析表单数据，尤其是数据上传（能适应GB级的数据上传），可适用于生产环境。
```
npm i -S formidable
```
> 这里只介绍解析表单数据
+ 我们以一个登录请求为例
```
 login(req, res) {
        const from = new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            if (err) {
                throw new Error(err)
            }
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            // res.end(util.inspect({fields: fields, files: files}));

            const {mobile, password, issms, smscaptcha} = fields;

            if (!mobile || !/^1[3,5,7,8,9]\w{9}$/.test(mobile)) {
                return res.send({status: 0, type: 'ERROR_MOBILE_IS_INVALID', message: '请输入正确的手机号'})
            };
            const exitUser = await UserModel.findOne({mobile})
            if (!exitUser) {
                return res.send({status: 0, type: 'ERROR_USER_IS_NOT_EXITS', message: '该手机号尚未注册'})
            }
            if (issms) {
                const sms_code = req.session.sms_code || {};
                if (sms_code.mobile !== mobile) {
                    return res.send({status: 0, type: 'ERROR_PARAMS_SIGNIN', message: '获取验证码的手机号与登录手机号不一致'})
                } else if (sms_code.code !== smscaptcha) {
                    return res.send({status: 0, type: 'ERROR_PARAMS_OF_SIGNIN', message: '短信验证码不正确'})
                } else if (Date.now() >= sms_code.expired) {
                    return res.send({status: 0, type: 'ERROR_PARAMS_OF_SIGNIN', message: '短信验证码已经失效了，请重新获取'})
                };
                req.session.user = exitUser
                return res.send({status: 1, data: existUser});
            } else {
                const isMatch = bcrypt.compare(password, existUser.password);

                if (!isMatch) {
                    return res.send({status: 0, type: 'ERROR_PASS_IS_NOT_MATCH', message: '用户密码错误'});
                }

                req.session.user = existUser;
                return res.send({status: 1, data: existUser});
            }
        });
    }

```
+ 详情
    +  创建一个form表单
    ```
        const from = new formidable.IncomingForm()
    ```
    + parse方法解析req中包含的登录表单提交的数据

    ```
     form.parse(req, async(err, fields, files) => {
            if (err) {
                throw new Error(err)
            }
            <!--解析传入的数据 -->
            const {mobile, password, issms, smscaptcha} = fields; 
     })
    ```


