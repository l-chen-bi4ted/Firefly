import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "LiKai Blog",
		imgurl: "https://tylk.cc/wp-content/uploads/2021/06/tptylv2f.png",
		desc: "云端电波起，星河寄心声",
		siteurl: "https://tylk.cc",
		tags: ["Blog"],
		weight: 15,
		enabled: true,
	},
	{
		title: "Frederick's Blog",
		imgurl: "http://www.ooowl.net/avatar.jpeg",
		desc: "Sky is the limit.",
		siteurl: "https://www.ooowl.net",
		tags: ["Blog"],
		weight: 14,
		enabled: true,
	},
	{
		title: "喵斯基部落",
		imgurl: "https://blog.moewah.com/assets/images/avatar.webp",
		desc: "运维之美，在于折腾与分享。",
		siteurl: "https://blog.moewah.com/",
		tags: ["Blog", "运维"],
		weight: 13,
		enabled: true,
	},
	{
		title: "YoungYet",
		imgurl: "https://pic.551211.xyz/file/AgACAgUAAyEGAASaAAFeoAADQWkTvs89771GSbmBCSijrIdN4IMPAAIVC2sbtLqgVMg6FL9sMf_uAQADAgADeQADNgQ.jpg",
		desc: "Are you still young?",
		siteurl: "https://blog.yt",
		tags: ["Blog"],
		weight: 12,
		enabled: true,
	},
	{
		title: "夏夜流荧",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},

];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
