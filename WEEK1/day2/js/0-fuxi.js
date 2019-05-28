/*
* github:www.github.com 项目托管平台
* git:版本管理工具（代码管理工具）
* */

//1. 建立github账户
//2. 创建一个仓库（远程仓库）
//3. 把远程仓库克隆到本地
    // 3.1 赋值git仓库地址 比如：...
    // 3.2 进入到本地目录中（尽量不要用中文命名文件夹）右键git bash here 打开命令行
    // 3.3 在命令行中键入命令：git clone 仓库地址 enter
// 4. 本地文件夹关联远程仓库
/*
* 4.1 在本地文件夹下，git bash here
* 4.2 git init 把本地文件夹初始化成一个git仓库
* 4.3 git remote add origin 项目地址
* 4.4 git remote -v
* */
// 5.提交一个版本（上传文件到远程仓库）
/*
* 提交版本需要经历git的三个区
* 工作区：本地文件夹
* 暂存区：缓存区（缓存你对文件的修改）
* 历史区：生成一个历史版本
* */

// git status 查看本地仓库的状态
// 文件是红色：这些文件处于工作区；
// 添加到暂存区：git add . (. 是全部：表示把红色的都添加到暂存区，如果我们有以下)
// git status 查看本地仓库的状态：文件都是绿色的，说明文件处于暂存区。
// git commit -m"本次修改的备注" 把暂存区中内容添加到历史区
// git push origin master 把本次版本提交到远程仓库

// 6.克隆咱们的课件
// git clone https://
// 每天下课后 git pull origin master

// 常用的linux命令：
/*
* mkdir 创建文件夹
* touch 文件 创建文件
* cat 文件 查看文件
* vim 编辑文件
* i 修改
* esc 退出编辑状态
* :w
* :q
* :wq 保存并退出
* :!q 强制退出
* cd 切换目录 cd ../ 返回上一级
* pwd 查看当前目录
* find -name 根据文件名查找文件
* rm -rf 文件、文件夹（-的递归 -f force）
* ls 查看目录中详细情况
* ls -al 查看所有内容（包括隐藏文件或文件夹）
* clear 清屏
*
*
* rm -rf *(删除)
* drop database 删库
* shutdown -h now
*
* ctrl+L 清屏
* ctrl+insert 复制
* shift+insert 粘贴
*
* */