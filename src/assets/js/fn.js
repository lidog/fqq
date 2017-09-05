
/**
 * 全局公用方法
 */
export default {
	install(Vue, options) {
		Vue.prototype.fn = {
			/**
			 * 弹出警告提示框，待完善
			 * @method warn
			 * @param  {string} msg 提示的消息文字
			 */
			warn: function(msg) {
				console.error(msg);
			},
			gotoConversation: function(_this, params) {
				_this.$router.push({ 
					path: '/show-panel/conversation',
					query: { 
						friendID: params.friendID, 
						name: params.name,
						account: params.account
					}
				});
			}
		}
	}
}