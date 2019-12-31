module.exports = {
  title: 'Vue Element Admin', //网页标题

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true, //右侧控制面板是否显示

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true, //便签页，是否有

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false, // 滑动窗口时，头部是否固定

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false, //是否展示logo图表

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
