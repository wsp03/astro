export default {
  Title: '朋朋杂语',
  // 访问的域名
  Site: 'https://www.wuai.xin',
  Subtitle: '不曾与你分享的时间,我在进步.',
  Description: '朋朋 专注于前开发与相关技术的实战分享，涵盖Vue框架、Node.js、Serverless等，并涉及Node、Python、Linux、Docker等领域。同时，博客也分享作者的生活、音乐和旅行的热爱。',
  Author: '朋',
  Motto: '路就在脚下！',
  Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2078148078&s=640',
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    { text: '朋友', link: '/links', icon: '/assets/images/svg/Navs/links.svg' },
    { text: '圈子', link: '/friends', icon: '/assets/images/svg/Navs/friends.svg' },
    { text: '动态', link: '/talking', icon: '/assets/images/svg/Navs/talking.svg' },
    { text: '昔日', link: '/archives', icon: '/assets/images/svg/Navs/archives.svg' },
    { text: '留言', link: '/message', icon: '/assets/images/svg/Navs/message.svg' },
    { text: '关于', link: '/about', icon: '/assets/images/svg/Navs/about.svg' },
    // { text: 'API', link: 'https://api.vvhan.com/', target: true, icon: '/assets/images/svg/Navs/link.svg' },
  ],
  // 侧边栏个人网站
  WebSites: [
    { text: 'Github', link: 'https://github.com/wsp03', icon: '/assets/images/svg/WebSites/github.svg' },
    // { text: '韩小韩API', link: 'https://api.vvhan.com', icon: '/assets/images/svg/WebSites/api.svg' },
    // { text: '每日热榜', link: 'https://hot.vvhan.com', icon: '/assets/images/svg/WebSites/hot.svg' },
    // { text: '骤雨重山图床', link: 'https://wp-cdn.4ce.cn', icon: '/assets/images/svg/WebSites/img.svg' },
    // { text: 'HanAnalytics', link: 'https://analytics.vvhan.com', icon: '/assets/images/svg/WebSites/analytics.svg' },
  ],
  // Cover 使用绝对路径
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  CreateTime: '2021-09-01',
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://tools-api.vvhan.com',
    'https://pagead2.googlesyndication.com',
    'https://lf9-cdn-tos.bytecdntp.com',
    'https://registry.npmmirror.com',
    'https://npm.elemecdn.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://meting-dd.2333332.xyz/api',
  // 评论组件 Twikoo
  Twikoo: { envId: '' },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: 'ca-pub-xxxxxx',
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  }
}