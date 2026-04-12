import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://weavatar.com/avatar/af4c9ee5b115f32ea3dc44d4820998a64a7cc0645b78babb6f61deaf8b0b980c",

	// 名字
	name: "枕心散人",

	// 个人签名
	bio: "是笼囚天地，抑或是天地本在盏中？",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		// {
		// 	name: "qq",
		// 	icon: "fa7-brands:qq",
		// 	url: "https://qm.qq.com/q/ZGsFa8qX2G",
		// 	showName: false,
		// },
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/l-chen-bi4ted",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:shirohako@icloud.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
