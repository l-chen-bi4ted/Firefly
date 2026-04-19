---
title: 关于我大概是无聊了在那儿部署博客这件事
published: 2026-04-18
updated: 2026-04-19
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


