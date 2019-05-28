/*
* Git 和 github.com
* git 版本管理工具
* github 项目代码托管平台
*   1、注册一个github账户
*   2、新建一个仓库（remote）远程仓库
*
*
* */

// 本地和github关联
// 1、复制仓库地址： https://github.com/liu9856866814/mysecond.git
// 2、进入到本地一个文件夹，右键git bash here
// 3、在弹出的命令行界面中输入 git clone 仓库地址 enter

// 本地仓库（我们克隆下来的仓库）
// .git 文件夹 第一个git仓库都会有一个 不要随意删除

// 查看本地仓库和哪个远程仓库关联
// 1、进入本地仓库（文件夹）
// 2、右击 git bash here
// git remote -v enter
// origin  https://github.com/liu9856866814/mysecond.git (fetch)
// origin  https://github.com/liu9856866814/mysecond.git (push)

// 将本地文件push（推）到远程仓库
// 提交代码需要经历git的三个区
// 工作区：本地文件夹
// 暂存区：缓存区域
// 历史区：针对每次提交生成一个版本记录

// clear 清屏
//提交一个版本：
//1、git status 查看仓库状态
//如果文件名都是红色的，就说明这些文件处于工作区

//2. git add . 将文件添加到暂存区

//3、git status
//文件为绿色的，说明 现在处于暂存区

//4. git commit -m "本次提交的备注"（-m后空格可有可无）把文件添加到历史区

//如果出现Please tell me who you are
//git config --global user.email "你的邮箱"
//git config --global user.name "用户名"
// 再次执行第4步

//5. push 到远程仓库
// git push origin master

//输入用户名和密码

// 把本地文件夹和远程仓库关联
// 1、git init 在文件夹下执行，把文件夹变成一个本地git仓库
// 2、git remote add origin 远程仓库地址
// 3、git remote -v 查看本地仓库和远程仓库的关联关系
// 完成上面步骤完成本地仓库和远程关联

//以后的课间都会存在git仓库中，每天下课执行：
// git pull origin master

// 常用的linux命令
//1、 mkdir 创建文件夹
// mkdir -p 11/22 递归创建文件夹

//2、touch 文件名

//3、cat 文件名

//4、vim 文件名 编辑文件（使文件进入编辑状态）
/*
* 命令：i 编辑文件
* 修改完成后退出编辑命令：esc
* 保存：输入英文状态下的冒号 :w
* 退出: :q
* :wq 保存并退出
* */
// 5、 cd 切换目录
// cd ../ (..表示上级目录，上上级../../)

//6、pwd 查看当前所属目录

//7、 ls 查看当期目录下文件和文件夹
// ls -a 查看隐藏的和不隐藏的 ls -al 权限+所有文件

//8、rm -rf 强制删除文件或者文件夹
// rm -rf * (表示全部)

//9. find 查找
// find -name 文件名 按照文件名查找

// 10.clear 清屏
