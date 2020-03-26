// 同源窗口发送消息
const infoData = new window.BroadcastChannel('wxh');
export function postData (message) {
  
	infoData.postMessage(message);
}
export function onData (callback) {
	infoData.onmessage = function (res) {
		if (res) {
			callback(res);
		}
	};
}