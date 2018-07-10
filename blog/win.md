### .bat文件乱码
+ bat文件右键用“ 编辑”  打开，
+ 另存为时，UTF-8保存为ANSI 格式。即可解决运行是乱码问题，
### win备份文件夹脚本
    ```
    @echo off
    echo 设置要备份的文件夹...
    set "pbuf=C:\迅雷下载"
    echo 设置备份文件存放文件夹...
    set "tbuf=C:\log"
    
    echo 初始化压缩程序设置...
    cd \
    C:
    cd C:\Program Files\WinRAR
    set yes=ok
    echo 压缩程序在C:\Program Files\WinRAR\WinRAR.exe
    
    echo 设置备份文件名(以星期几命名，即备份文件只保存最近一周)...
    set name=%date%
    set name=%name:~-3%
    set name=YouName_%name%
    
    echo 是否存在同名文件，若存在则删除同名文件...
    if exist %tbuf%\%name%.rar del %tbuf%\%name%.rar
    
    echo 开始执行压缩备份...
    rar a -r -ed -esh %tbuf%\%name%.rar %pbuf%\*.*
    echo 备份完毕！


    ```