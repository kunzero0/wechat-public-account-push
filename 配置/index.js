export const USER_CONFIG = {
  /**
   * 公众号配置
   */
  
  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wxc9752f0c3952e840",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "7e49f4e4801f96562c03193d2dedadd8",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,
    
    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,
    
    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,
    
    /** 星座运势 */
    horoscope: false,
    
    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },
  
  /** 每日一言 */愿你天天没烦恼！愿你永保青春不显老！
  
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  
  
  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝贝儿",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "",
      // 所在省份
      province: "四川",
      // 所在城市
      city: "绵阳",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '03-21',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "老婆", "year": "1997", "date": "03-21"},
        {"type": "节日", "name": "恋爱纪念日", "year": "2014", "date": "01-27"},
  ],
  
  
}
