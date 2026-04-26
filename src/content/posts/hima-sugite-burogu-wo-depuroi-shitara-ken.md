---
title: 关于我大概是无聊了在那儿部署博客这件事
published: 2026-04-18
updated: 2026-04-24
description: 借用Minis来帮忙在阿里云云服务器上部署基于 Astro 框架和 Firefly 主题的博客。
image: ./images/cover2.avif
tags: [GitHub, Aliyun, 1Panel, Astro, Firefly, Minis, AI]
category: 生活琐事
draft: false
pinned: false
---

# 关于我大概是无聊了在那儿部署博客这件事

> 借用Minis来帮忙在阿里云服务器上部署基于 Astro 框架和 Firefly 主题的博客。
---
## 一、缘起
大概上上周，我决定在云服务器上部署我的博客。

这个博客使用 Astro 框架和 Firefly 主题。我选择了阿里云 ECS 作为服务器，操作系统是 Ubuntu 22.04 ，阿里云价格还不错，2C2G 的小破机加上一年域名花了111元。~~我知道自己是大冤种，奈何第二年 ECS 还是 99 元，还是能折腾一下的不是。~~

这几篇关于 Astro 部署的教程也在我自己操作实施的过程中提供了很多帮助。
[通过 1Panel 部署 Astro 站点到服务器——公开仓库篇](https://www.ooowl.net/posts/depoly-an-public-repo-astro-site-to-server-by-1panel/)
[从零搭建Astro博客：1小时完成部署指南]( https://blog.moewah.com/posts/zero-to-astro-blog-deployment-guide/)
[从 0 开始：在阿里云 ECS 上部署 Astro 博客，并用 GitHub Actions 自动发布]( https://zhangbh.com/posts/build-astro-blog/)
[Firefly Astro 博客 主题模板文档]( https://docs-firefly.cuteleaf.cn/zh/)
[Astro博客搭建全攻略：性能+SEO双拉满](https://www.oneyangcrown.top/posts/astro-blog-complete-guide/)

## 二、准备工作
在开始之前，先是完成了一些准备工作。阿里云控制台中配置了 SSH 密钥对，安全组中开放了22、80、443几个常用端口。ICP 备案大概是花了6天。

我自认不是技术专家，也想找个简单的方法。于是使用了 iOS 平台上的 Minis 这款应用来指挥大模型帮忙管理这台 ECS 实例，终端写入之前配置好的 SSH私钥，剩下后续的配置，全靠 Kimi-2.5 用自然语言喊着就能完成。 就是消耗的 tokens 也确实很多，要长期折腾，大厂的 coding plan 会是不错的选择（广告位预留 x）。再有就多在咸鱼上逛逛或是某些骚操作……

## 三、安装面板与配置域名
为了省事、管理方便（懒），1panel 社区版用来作为这台 ECS 的管理界面就很够用，也是一句话的事：

```bash
为这台 ECS 安装1panel。
ssh凭证已保存，
终端中执行 ssh root@ecs的ip地址，
bash -c "$(curl -sSL https://resource.fit2cloud.com/1panel/package/v2/quick_start.sh)"
```

安装1Panel的过程很快。在等待它安装的时候，我这边也没有闲着。在域名DNS管理后台，需要添加了两条A记录，将域名指向ECS 的公网IP。

主域名解析：
	•	记录类型：A
	•	主机记录：@
	•	记录值：ECS公网IP

www子域名解析：
	•	记录类型：A
	•	主机记录：www
	•	记录值：ECS公网IP

配置完成后，我在本地电脑上用 `ping` 命令验证了一下。

```bash
ping yourdomain.com
ping www.yourdomain.com
```
看到返回的IP地址已指向 ECS公网IP，说明DNS解析已经生效。

## 四、配置网站与HTTPS
这时1Panel也安装好了。它提供了一个带端口的访问地址和初始登录凭据。你需要先在阿里云安全组中放行这个端口。

因为是纯静态部署，这里只需要一个Web服务器，在1Panel的应用商店里安装OpenResty 即可。它是一个基于Nginx的高性能Web服务器，用来托管静态文件很合适。

接着，要在1Panel的“网站”菜单里创建了一个静态网站，域名填写为 `yourdomain.com`。然后，转到“证书”管理页面为这个域名申请了SSL证书。这个证书稍后绑定网站时会用到。申请过程很简单，根据你的域名服务商和个人偏好设置即可。
回到刚才创建的`yourdomain.com`网站，进入配置，找到HTTPS设置，启用 HTTPS，下方选择刚申请的证书，再点击保存，证书就这样绑定好了。

此时访问 `https://yourdomain.com`。
看到测试页面，这说明一切正常。域名解析正确。服务器443端口通畅。OpenResty服务正在运行。网站目录也可以访问。

---
先写这点，这种天突然感冒了，大家注意保重身体。  2026-04-19 22:05

---

五、上传博客内容
上传博客内容
现在，服务器和网站框架都已就绪，只差把我的博客内容放上去了。虽然最终目标是全自动部署，但首次部署，我还是想先跑通手动流程。当然，这个“手动”也可以用更省力的方式完成。

1. 连接本地设备
我再次打开Minis应用。就像之前连接云服务器一样，我为我的本地开发设备也配置了SSH连接。这台设备上存有我的博客源代码。

给 Minis 的指令
```
通过SSH连接到我的本地设备（192.168.1.100），进入博客的项目目录Blog，然后克隆最新的代码 `git clone git@github.com:xxxx/Firefly.git`。
```

2. 构建与上传
 Github 托管的代码克隆到本地后继续用自然语言向 Minis 下达指令：

	1.	安装依赖： “运行 `pnpm install`。”
	2.	构建项目： “运行 `pnpm build`。”
	3.	上传文件： “用 `scp` 或 `rsync` 命令，把 `dist/` 目录下的所有文件，复制到云服务器 `yourdomain.com` 网站的根目录 `/opt/1panel/apps/openresty/openresty/www/sites/yourdomain.com/index` 下。”

这些指令被准确执行。它在我的本地设备上完成了构建，然后将生成的文件直接推送到了云服务器的指定位置。

这个过程省去了我在本地手动打包、再通过1Panel网页手动上传的繁琐步骤。

3. 验证结果
文件传输完成后，我立刻在浏览器里重新访问了我的域名 `https://yourdomain.com`。

这一次，屏幕上不再是1Panel的测试页，而是我熟悉的Astro Firefly博客主页。文章、样式和图片都显示正常。这标志着我的博客首次“半自动”部署成功了。

六、实现自动化部署 (GitHub Actions)
手动上传虽然成功了，但每次更新文章都要重复一遍这个过程，这不符合我“懒人”的原则。所以，我的下一个目标是配置GitHub Actions，实现自动化部署。

1. 工作原理
整个自动化流程的原理很简单。

	1.	我在本地写好新文章，然后使用Git将改动推送到我的GitHub仓库。
	2.	GitHub检测到代码推送后，会自动触发一个预设好的工作流（Action）。
	3.	这个工作流会在GitHub的服务器上模拟一个环境，自动拉取我的最新代码，安装依赖，并运行 `pnpm build` 命令打包成静态文件。
	4.	打包完成后，工作流会使用SSH安全地连接到我的阿里云服务器。
	5.	最后，它通过 `rsync` 命令，高效地将打包好的文件同步到我网站的根目录，自动覆盖旧文件。

整个过程无需我手动干预，我只管写文章和推送代码。

2. 服务器端准备
为了让GitHub能安全地访问我的服务器，我需要为它配置一把“钥匙”。

我通过Minis连接到我的ECS服务器，执行了以下命令来生成一对新的SSH密钥。
￼
命令执行后，在 `/root/.ssh/` 目录下生成了 `id_rsa` (私钥) 和 `id_rsa.pub` (公钥) 两个文件。接着，把公钥的内容添加到了认证文件里。

这样，任何持有对应私钥的设备都可以免密登录服务器了。

3. GitHub仓库配置
接下来，我需要把服务器的地址和私钥告诉GitHub。这些信息是敏感数据，必须存放在GitHub仓库的Secrets中。

我打开我的博客项目仓库，进入 `Settings` > `Secrets and variables` > `Actions` 页面，点击“New repository secret”添加了以下几个秘密变量：

	•	`SERVER_HOST`: 我的ECS服务器公网IP地址。
	•	`SERVER_USER`: 登录服务器的用户名，我这里是 `root`。
	•	`SSH_PRIVATE_KEY`: 我查看并复制了服务器上 `/root/.ssh/id_rsa` 私钥文件的全部内容，粘贴到这里。
	•	`REMOTE_TARGET_PATH`: 我在服务器上存放网站文件的绝对路径，即 `/opt/1panel/apps/openresty/openresty/www/sites/yourdomain.com/index`。

4. 编写Workflow文件
万事俱备，只差编排具体的自动化脚本了。

我在本地项目的根目录下创建了 `.github/workflows/` 文件夹，并在其中新建了一个 `deploy.yml` 文件。我将以下配置写入了这个文件：

```
￼晚些补

```

这个脚本文件定义了从拉取代码、安装、构建到最终部署的每一个步骤。

5. 测试自动化
为了验证成果，我在本地对博客做了一个小小的修改，然后将改动 `git push` 到了 `main` 分支。

我立刻打开GitHub仓库的“Actions”页面，看到一个新的工作流正在运行。几分钟后，它显示为绿色，表示所有步骤都成功完成了。

我刷新了我的博客网站，那个小小的修改已经出现在页面上。自动化部署成功了。

七、最后的总结
从一时兴起购买服务器，到借助AI助手和1Panel面板完成部署，再到最后配置好GitHub Actions实现自动化，整个过程比我想象的要顺利。

现代化的工具确实极大地降低了技术门槛。现在，我可以更专注于写作本身，而不必为每次发布都进行繁琐的操作。