/*

代码已加密
  
抓取get包
抓ck :  底下菜单（来玩）-> 点打卡
域名：newvideo.autohome.com.cn
链接:
https://newvideo.autohome.com.cn/openapi/activity-api/checkin/query_list?_appid=ydsp&_timestamp=1635960539&deviceid=********&version=1.4.0&pm=1&_sign=********&uid=********&uticket=********

export slurl='抓取的url1@抓取的url2'

[rewrite_local]
#闪辆
https://newvideo.autohome.com.cn/openapi/activity-api url script-request-body https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js
[MITM]
hostname = newvideo.autohome.com.cn
#loon
https://newvideo.autohome.com.cn/openapi/activity-api url script-request-body https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js, requires-body=true, timeout=10, tag=萝卜闪辆
*/

// [task_local]
//#闪辆
// 10 0 * * * https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js, tag=闪辆, enabled=true

const _0x4a865c = _0x319d;
(function(_0x2b75e9, _0x1e4446) {
	const _0x202898 = _0x319d,
		_0x28093f = _0x2b75e9();
	while (!![]) {
		try {
			const _0x2da1eb = -parseInt(_0x202898(0xe5)) / 0x1 + -parseInt(_0x202898(0xbf)) / 0x2 + -parseInt(_0x202898(0xcc)) / 0x3 * (-parseInt(_0x202898(0x105)) / 0x4) + -parseInt(_0x202898(0xb8)) / 0x5 * (parseInt(_0x202898(0x125)) / 0x6) + parseInt(_0x202898(0xde)) / 0x7 + parseInt(_0x202898(0xff)) / 0x8 * (-parseInt(_0x202898(0x11d)) / 0x9) + parseInt(_0x202898(0x123)) / 0xa;
			if (_0x2da1eb === _0x1e4446) break;
			else _0x28093f['push'](_0x28093f['shift']());
		} catch (_0x3c4cce) {
			_0x28093f['push'](_0x28093f['shift']());
		}
	}
}(_0x4d8d, 0x4b7d2));
const $ = new Env(_0x4a865c(0xf8));
let status;

function _0x4d8d() {
	const _0x8237df = ['https://newvideo.autohome.com.cn/openapi/activity-api/task/start_task?deviceid=', '_appid=ydsp.iosv2&_sign=27867EE9CDD9C4C53C53898477A91853&_timestamp=1635927486&deviceid=', 'getval', 'split', 'join', '\x0a开始【闪辆账户\x20', 'push', '任务失败', '------------------任务结束------------------', 'string', 'status', 'statusCode', 'toLocaleLowerCase', 'method', 'box.dat', 'logs', 'valueForKey', 'getDate', '&deviceid=', 'runScript', 'slurl', 'cktough', 'catch', 'GET', 'Content-Length', 'query_list', 'mediaUrl', 'then', 'getMilliseconds', 'match', 'decode', '/v1/scripting/evaluate', 'iconv-lite', 'toStr', 'opts', 'deviceid=', '_appid=ydsp', 'getjson', 'existsSync', '&imei=5c4cf4e7668b9986c2a201c2a498ebc38e93397b&is_like=1&uticket=', '您选择的是用\x22@\x22隔开\x0a', 'initGotEnv', 'stack', 'index', 'keys', 'logSeparator', 'toString', '个账号', 'post', '&rcontent=', 'get', '&playDuration=60&pm=1&taskId=1&uid=', 'reduce', 'name', 'https://newvideo.autohome.com.cn/openapi/recommend/task_hot_video', 'null', 'floor', 'getMonth', 'parse', 'message', 'test', 'env', 'isNeedRewrite', '5ubPFRj', 'cookieJar', 'CookieJar', 'cwd', 'trim', 'set-cookie', 'taskId', '1180182YkfBHt', 'fetch', '&version=1.4.0', 'isArray', 'totalNum', 'result', 'abs', 'url', 'getFullYear', 'https://newvideo.autohome.com.cn/openapi/activity-api/checkin/checkin?_appid=ydsp&deviceid=&version=1.4.0&pm=1', 'isMuteLog', 'isMute', 'getTime', '717XUPiHD', 'utf-8', 'https://newvideo.autohome.com.cn/openapi/activity-api/task/query_list?uid=', 'round', 'taskName', 'headers', 'assign', 'http://', 'uid=', 'exec', 'getHours', 'writedata', 'returncode', 'startTime', 'write', 'setjson', 'fhxzstatus', 'now', '2032065iVQuKV', 'data', 'cron', 'uticket=', '&uticket=', 'Cookie', 'lodash_set', '455304nYtDcJ', '签到：', 'isNode', 'stringify', 'dataFile', 'log', 'done', '*/*', 'path', 'body', 'checkin', 'getdata', 'encoding', 'indexOf', 'isQuanX', 'writeFileSync', 'rawBody', ',\x20错误!', ',\x20结束!\x20🕛\x20', '萝卜闪辆', 'readFileSync', 'length', 'open-url', 'object', 'Content-Type', 'tough-cookie', '178864CNPJxK', 'undefined', 'ckjar', 'setCookieSync', '-------------共', 'isShadowrocket', '2504yqPSWu', 'logErr', 'finally', '@chavy_boxjs_userCfgs.httpapi', 'isLoon', 'getMinutes', 'send', 'completeNum', 'media-url', 'wait', 'got', 'setValueForKey', 'https://newvideo.autohome.com.cn/api/like/dolike', 'application/x-www-form-urlencoded', 'https://newvideo.autohome.com.cn/openapi/activity-api/task/task_video_commit', 'call', '&vid=', 'getScript', '评论任务：', 'getSeconds', 'loaddata', 'resolve', 'lodash_get', '.$1', '27URhFWK', 'setval', 'https://newvideo.autohome.com.cn/api/comment/add', 'substr', 'replace', 'isSurge', '13343960xEZOrl', '&taskId=', '2115804QYdfxl', 'openUrl', '@chavy_boxjs_userCfgs.httpapi_timeout', 'setdata', 'read'];
	_0x4d8d = function() {
		return _0x8237df;
	};
	return _0x4d8d();
}
status = (status = $[_0x4a865c(0x12c)](_0x4a865c(0xdc)) || '1') > 0x1 ? '' + status : '';
let slckArr = [],
	time = Math[_0x4a865c(0xcf)](Date[_0x4a865c(0xdd)]() / 0x3e8),
	slurl = $[_0x4a865c(0xe7)]() ? process['env']['slurl'] ? process['env'][_0x4a865c(0x13e)] : '' : $[_0x4a865c(0xf0)](_0x4a865c(0x13e)) ? $['getdata'](_0x4a865c(0x13e)) : '',
	slcks = '',
	rcontent = ['哇~', '爱了', '哈哈哈'],
	uid = '',
	taskId = '',
	sp_list, i, deviceid = '',
	uticket = '';
!(async () => {
	const _0x1a456f = _0x4a865c;
	if (typeof $request !== _0x1a456f(0x100)) fhxzck();
	else {
		if (!$[_0x1a456f(0xe7)]()) {
			slckArr[_0x1a456f(0x130)]($[_0x1a456f(0xf0)](_0x1a456f(0x13e)));
			let _0x2b8911 = $['getval']('slcount') || '1';
			for (let _0x454780 = 0x2; _0x454780 <= _0x2b8911; _0x454780++) {
				slckArr[_0x1a456f(0x130)]($[_0x1a456f(0xf0)](_0x1a456f(0x13e) + _0x454780));
			}
			console[_0x1a456f(0xea)](_0x1a456f(0x103) + slckArr['length'] + '个账号-------------\x0a');
			for (let _0x4c4f3e = 0x0; _0x4c4f3e < slckArr['length']; _0x4c4f3e++) {
				slckArr[_0x4c4f3e] && (slurl = slckArr[_0x4c4f3e], $[_0x1a456f(0xa4)] = _0x4c4f3e + 0x1, console['log'](_0x1a456f(0x12f) + $['index'] + '】'), uid = slurl[_0x1a456f(0x147)](/uid=(\S*)&/)[0x1], deviceid = slurl[_0x1a456f(0x147)](/deviceid=(\S*)&ver/)[0x1], uticket = slurl[_0x1a456f(0x147)](/uticket=(\S*)/)[0x1], await rw(), $[_0x1a456f(0xea)](_0x1a456f(0x132)));
			}
		} else {
			process[_0x1a456f(0xb6)][_0x1a456f(0x13e)] && process[_0x1a456f(0xb6)][_0x1a456f(0x13e)]['indexOf']('@') > -0x1 ? (slckArr = process[_0x1a456f(0xb6)][_0x1a456f(0x13e)][_0x1a456f(0x12d)]('@'), console[_0x1a456f(0xea)](_0x1a456f(0xa1))) : slcks = [process[_0x1a456f(0xb6)][_0x1a456f(0x13e)]];;
			Object[_0x1a456f(0xa5)](slcks)['forEach'](_0x4bb63a => {
				const _0x5f154d = _0x1a456f;
				slcks[_0x4bb63a] && slckArr[_0x5f154d(0x130)](slcks[_0x4bb63a]);
			}), console['log']('共' + slckArr[_0x1a456f(0xfa)] + _0x1a456f(0xa8));
			for (let _0x42680b = 0x0; _0x42680b < slckArr['length']; _0x42680b++) {
				$[_0x1a456f(0xb4)] = '', slurl = slckArr[_0x42680b], $[_0x1a456f(0xa4)] = _0x42680b + 0x1, console[_0x1a456f(0xea)](_0x1a456f(0x12f) + $['index'] + '】'), uid = slurl[_0x1a456f(0x147)](/uid=(\S*)&/)[0x1], deviceid = slurl[_0x1a456f(0x147)](/deviceid=(\S*)&ver/)[0x1], uticket = slurl[_0x1a456f(0x147)](/uticket=(\S*)/)[0x1], await rw(), $['log']('------------------任务结束------------------');
			}
		}
	}
})()['catch'](_0x4cc12b => $[_0x4a865c(0x106)](_0x4cc12b))[_0x4a865c(0x107)](() => $['done']());

function fhxzck() {
	const _0x399998 = _0x4a865c;
	if ($request[_0x399998(0xc6)][_0x399998(0xf2)](_0x399998(0xef)) > -0x1 && $request[_0x399998(0xc6)]['indexOf'](_0x399998(0x143)) > -0x1 && $request[_0x399998(0xc6)]['indexOf']('appid=') > -0x1) {
		const _0x11d997 = $request['url'];
		if (_0x11d997) $[_0x399998(0x128)](_0x11d997, _0x399998(0x13e) + status);
		$['log'](_0x11d997), $['msg']($[_0x399998(0xae)], '', '闪辆' + status + '数据获取成功');
	}
}

function _0x319d(_0x154ee9, _0x557a51) {
	const _0x4d8d70 = _0x4d8d();
	return _0x319d = function(_0x319d46, _0x697a3e) {
		_0x319d46 = _0x319d46 - 0x9a;
		let _0xfb6d52 = _0x4d8d70[_0x319d46];
		return _0xfb6d52;
	}, _0x319d(_0x154ee9, _0x557a51);
}
async function rw() {
	return new Promise(_0x32cbb3 => {
		const _0x1162b3 = _0x319d;
		let _0x3768ec = {
			'url': _0x1162b3(0xce) + uid + _0x1162b3(0x13c) + deviceid + '&taskType=0'
		};
		$[_0x1162b3(0xab)](_0x3768ec, async (_0x3cceee, _0x18555a, _0x1ee106) => {
			const _0x595495 = _0x1162b3;
			try {
				result = JSON['parse'](_0x1ee106);
				let _0x4613de = result[_0x595495(0xc4)]['taskDetailDtoList'];
				await daka();
				for (let _0x410494 = 0x0; _0x410494 < _0x4613de[_0x595495(0xfa)]; _0x410494++) {
					console[_0x595495(0xea)]('任务：' + _0x4613de[_0x410494][_0x595495(0xd0)]), _0x4613de[_0x410494]['completeNum'] < _0x4613de[_0x410494][_0x595495(0xc3)] ? (console['log']('当前进度：' + _0x4613de[_0x410494]['completeNum'] + '/' + _0x4613de[_0x410494][_0x595495(0xc3)]), console[_0x595495(0xea)]('去完成'), await kqrw(_0x4613de[_0x410494][_0x595495(0xbe)], _0x4613de[_0x410494][_0x595495(0xc3)] - _0x4613de[_0x410494][_0x595495(0x10c)]), await $[_0x595495(0x10e)](0x3e8)) : console[_0x595495(0xea)]('当前进度：' + _0x4613de[_0x410494]['completeNum'] + '/' + _0x4613de[_0x410494][_0x595495(0xc3)]);
				}
			} catch (_0x44784c) {
				$[_0x595495(0x106)](_0x44784c, _0x18555a);
			} finally {
				_0x32cbb3();
			}
		}, 0x0);
	});
}

function kqrw(_0x983d64, _0x3e955a) {
	return new Promise(_0x525aa5 => {
		const _0x1f225a = _0x319d;
		let _0x369c86 = {
			'url': _0x1f225a(0x12a) + deviceid + _0x1f225a(0x9d),
			'body': _0x1f225a(0xd4) + uid + _0x1f225a(0x124) + _0x983d64,
			'headers': {
				'Content-Type': _0x1f225a(0x112)
			}
		};
		$['post'](_0x369c86, async (_0x505aef, _0x55c0d9, _0x4fbd88) => {
			const _0x20593f = _0x1f225a;
			try {
				result = JSON[_0x20593f(0xb3)](_0x4fbd88);
				if (result[_0x20593f(0xd8)] == 0x0) {
					await splist(), await $[_0x20593f(0x10e)](0x3e8);
					let _0x560ee7 = 0x0;
					do {
						_0x983d64 == 0x1 && (await ksp(), _0x560ee7++, await $[_0x20593f(0x10e)](0x3e8)), _0x983d64 == 0x78 && (await dzsp(_0x560ee7), _0x560ee7++, await $[_0x20593f(0x10e)](0x3e8)), _0x983d64 == 0x79 && (await fbpl(_0x560ee7), _0x560ee7++, await $[_0x20593f(0x10e)](0xbb8));
					} while (_0x560ee7 < _0x3e955a);
				} else console['log'](_0x20593f(0x131));
			} catch (_0x46e353) {
				$[_0x20593f(0x106)](_0x46e353, _0x55c0d9);
			} finally {
				_0x525aa5();
			}
		}, 0x0);
	});
}
i;

function dzsp(_0xeba9f) {
	return new Promise(_0x12bf9d => {
		const _0x25a44d = _0x319d;
		let _0x1dd5a1 = {
			'url': _0x25a44d(0x111),
			'body': _0x25a44d(0x9c) + deviceid + _0x25a44d(0xa0) + uticket + _0x25a44d(0x115) + sp_list[_0xeba9f]['id'],
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};
		$[_0x25a44d(0xa9)](_0x1dd5a1, async (_0x4c3d07, _0xdd6e56, _0x174017) => {
			const _0x1364fd = _0x25a44d;
			try {
				result = JSON[_0x1364fd(0xb3)](_0x174017), console[_0x1364fd(0xea)]('点赞：' + result['message']);
			} catch (_0x2112d5) {
				$[_0x1364fd(0x106)](_0x2112d5, _0xdd6e56);
			} finally {
				_0x12bf9d();
			}
		}, 0x0);
	});
}

function daka() {
	return new Promise(_0x48cbca => {
		const _0x5988c2 = _0x319d;
		let _0xc0d729 = {
			'url': _0x5988c2(0xc8),
			'body': _0x5988c2(0xe1) + uticket,
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};
		$[_0x5988c2(0xa9)](_0xc0d729, async (_0x5bb0ab, _0x556119, _0x550d61) => {
			const _0x286b32 = _0x5988c2;
			try {
				result = JSON[_0x286b32(0xb3)](_0x550d61), console['log'](_0x286b32(0xe6) + result[_0x286b32(0xb4)]);
			} catch (_0x4ba81a) {
				$[_0x286b32(0x106)](_0x4ba81a, _0x556119);
			} finally {
				_0x48cbca();
			}
		}, 0x0);
	});
}

function splist() {
	return new Promise(_0x2dd026 => {
		const _0x3ccb94 = _0x319d;
		let _0x146b00 = {
			'url': _0x3ccb94(0xaf)
		};
		$[_0x3ccb94(0xab)](_0x146b00, async (_0x143016, _0x2295c0, _0x76d523) => {
			const _0x355609 = _0x3ccb94;
			try {
				result = JSON[_0x355609(0xb3)](_0x76d523), result[_0x355609(0xd8)] == 0x0 && console[_0x355609(0xea)]('获取视频列表成功！'), sp_list = result[_0x355609(0xc4)];
			} catch (_0x2cfb5b) {
				$[_0x355609(0x106)](_0x2cfb5b, _0x2295c0);
			} finally {
				_0x2dd026();
			}
		}, 0x0);
	});
}

function fbpl(_0x4e18ac) {
	return new Promise(_0x5c7d56 => {
		const _0x1346b2 = _0x319d;
		let _0x15aa61 = {
			'url': _0x1346b2(0x11f),
			'body': _0x1346b2(0x9c) + deviceid + _0x1346b2(0xaa) + rcontent[_0x4e18ac] + _0x1346b2(0xe2) + uticket + _0x1346b2(0x115) + sp_list[_0x4e18ac]['id'],
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};
		$[_0x1346b2(0xa9)](_0x15aa61, async (_0x229357, _0x95d988, _0x318fe1) => {
			const _0x1324d7 = _0x1346b2;
			try {
				result = JSON[_0x1324d7(0xb3)](_0x318fe1), console[_0x1324d7(0xea)](_0x1324d7(0x117) + result[_0x1324d7(0xb4)]);
			} catch (_0x4bf099) {
				$[_0x1324d7(0x106)](_0x4bf099, _0x95d988);
			} finally {
				_0x5c7d56();
			}
		}, 0x0);
	});
}

function ksp() {
	return new Promise(_0x140373 => {
		const _0x1a7a67 = _0x319d;
		let _0x15993d = {
			'url': _0x1a7a67(0x113),
			'body': _0x1a7a67(0x12b) + deviceid + _0x1a7a67(0xac) + uid + _0x1a7a67(0xc1),
			'headers': {
				'Content-Type': _0x1a7a67(0x112)
			}
		};
		$[_0x1a7a67(0xa9)](_0x15993d, async (_0x264273, _0x207a61, _0x520c09) => {
			const _0x1cc75f = _0x1a7a67;
			try {
				result = JSON[_0x1cc75f(0xb3)](_0x520c09), console['log']('看视频任务：' + result[_0x1cc75f(0xb4)]);
			} catch (_0x52ab76) {
				$[_0x1cc75f(0x106)](_0x52ab76, _0x207a61);
			} finally {
				_0x140373();
			}
		}, 0x0);
	});
}

function Env(_0x5c4ae9, _0x16332f) {
	const _0x2d5bb3 = _0x4a865c;
	class _0x1c4fb0 {
		constructor(_0x5867ce) {
			const _0x44429a = _0x319d;
			this[_0x44429a(0xb6)] = _0x5867ce;
		} [_0x2d5bb3(0x10b)](_0x46a1ce, _0x522f72 = _0x2d5bb3(0x141)) {
			const _0x48ac16 = _0x2d5bb3;
			_0x46a1ce = 'string' == typeof _0x46a1ce ? {
				'url': _0x46a1ce
			} : _0x46a1ce;
			let _0x2cc72b = this[_0x48ac16(0xab)];
			return 'POST' === _0x522f72 && (_0x2cc72b = this[_0x48ac16(0xa9)]), new Promise((_0x4ac4bc, _0x137706) => {
				const _0x31d93a = _0x48ac16;
				_0x2cc72b[_0x31d93a(0x114)](this, _0x46a1ce, (_0x2be743, _0x155e5a, _0x4c4bef) => {
					_0x2be743 ? _0x137706(_0x2be743) : _0x4ac4bc(_0x155e5a);
				});
			});
		} [_0x2d5bb3(0xab)](_0x5ece1a) {
			const _0x582134 = _0x2d5bb3;
			return this['send'][_0x582134(0x114)](this[_0x582134(0xb6)], _0x5ece1a);
		} [_0x2d5bb3(0xa9)](_0x5d1d90) {
			const _0x362879 = _0x2d5bb3;
			return this[_0x362879(0x10b)]['call'](this[_0x362879(0xb6)], _0x5d1d90, 'POST');
		}
	}
	return new class {
		constructor(_0x2e5b47, _0x2eb262) {
			const _0x51785d = _0x2d5bb3;
			this[_0x51785d(0xae)] = _0x2e5b47, this['http'] = new _0x1c4fb0(this), this[_0x51785d(0xdf)] = null, this[_0x51785d(0xe9)] = _0x51785d(0x138), this['logs'] = [], this['isMute'] = !0x1, this[_0x51785d(0xb7)] = !0x1, this[_0x51785d(0xa6)] = '\x0a', this[_0x51785d(0xf1)] = _0x51785d(0xcd), this[_0x51785d(0xd9)] = new Date()[_0x51785d(0xcb)](), Object[_0x51785d(0xd2)](this, _0x2eb262), this['log']('', '🔔' + this[_0x51785d(0xae)] + ',\x20开始!');
		} [_0x2d5bb3(0xe7)]() {
			return 'undefined' != typeof module && !!module['exports'];
		} ['isQuanX']() {
			return 'undefined' != typeof $task;
		} [_0x2d5bb3(0x122)]() {
			const _0xf5f802 = _0x2d5bb3;
			return _0xf5f802(0x100) != typeof $httpClient && _0xf5f802(0x100) == typeof $loon;
		} [_0x2d5bb3(0x109)]() {
			return 'undefined' != typeof $loon;
		} [_0x2d5bb3(0x104)]() {
			const _0x435208 = _0x2d5bb3;
			return _0x435208(0x100) != typeof $rocket;
		} ['toObj'](_0x46ae1b, _0x50a291 = null) {
			const _0x1fbea6 = _0x2d5bb3;
			try {
				return JSON[_0x1fbea6(0xb3)](_0x46ae1b);
			} catch {
				return _0x50a291;
			}
		} [_0x2d5bb3(0x9a)](_0x358e39, _0x8b23c1 = null) {
			const _0xe60854 = _0x2d5bb3;
			try {
				return JSON[_0xe60854(0xe8)](_0x358e39);
			} catch {
				return _0x8b23c1;
			}
		} [_0x2d5bb3(0x9e)](_0x45ddad, _0x19a50d) {
			const _0x58be87 = _0x2d5bb3;
			let _0x154254 = _0x19a50d;
			const _0x13582d = this[_0x58be87(0xf0)](_0x45ddad);
			if (_0x13582d) try {
				_0x154254 = JSON['parse'](this[_0x58be87(0xf0)](_0x45ddad));
			} catch {}
			return _0x154254;
		} [_0x2d5bb3(0xdb)](_0x11fc94, _0x40e017) {
			const _0x4fc2dd = _0x2d5bb3;
			try {
				return this[_0x4fc2dd(0x128)](JSON[_0x4fc2dd(0xe8)](_0x11fc94), _0x40e017);
			} catch {
				return !0x1;
			}
		} [_0x2d5bb3(0x116)](_0x4aed2c) {
			return new Promise(_0x2954e2 => {
				const _0x285d61 = _0x319d;
				this[_0x285d61(0xab)]({
					'url': _0x4aed2c
				}, (_0x180fa1, _0x238ef1, _0x7926fb) => _0x2954e2(_0x7926fb));
			});
		} [_0x2d5bb3(0x13d)](_0x783eb6, _0x11d468) {
			const _0x142f77 = _0x2d5bb3;
			return new Promise(_0x7936e => {
				const _0x2a39d7 = _0x319d;
				let _0x4ca029 = this[_0x2a39d7(0xf0)](_0x2a39d7(0x108));
				_0x4ca029 = _0x4ca029 ? _0x4ca029[_0x2a39d7(0x121)](/\n/g, '')[_0x2a39d7(0xbc)]() : _0x4ca029;
				let _0x4caad7 = this['getdata'](_0x2a39d7(0x127));
				_0x4caad7 = _0x4caad7 ? 0x1 * _0x4caad7 : 0x14, _0x4caad7 = _0x11d468 && _0x11d468['timeout'] ? _0x11d468['timeout'] : _0x4caad7;
				const [_0x29e8dd, _0x4f3f3d] = _0x4ca029['split']('@'), _0x4fecfd = {
					'url': _0x2a39d7(0xd3) + _0x4f3f3d + _0x2a39d7(0x149),
					'body': {
						'script_text': _0x783eb6,
						'mock_type': _0x2a39d7(0xe0),
						'timeout': _0x4caad7
					},
					'headers': {
						'X-Key': _0x29e8dd,
						'Accept': _0x2a39d7(0xec)
					}
				};
				this[_0x2a39d7(0xa9)](_0x4fecfd, (_0x3bdcb0, _0x34f19f, _0x11c244) => _0x7936e(_0x11c244));
			})[_0x142f77(0x140)](_0x6f881d => this[_0x142f77(0x106)](_0x6f881d));
		} [_0x2d5bb3(0x119)]() {
			const _0x55e389 = _0x2d5bb3;
			if (!this[_0x55e389(0xe7)]()) return {}; {
				this['fs'] = this['fs'] ? this['fs'] : require('fs'), this[_0x55e389(0xed)] = this[_0x55e389(0xed)] ? this['path'] : require('path');
				const _0x1efebd = this[_0x55e389(0xed)][_0x55e389(0x11a)](this[_0x55e389(0xe9)]),
					_0x19b7bb = this[_0x55e389(0xed)][_0x55e389(0x11a)](process[_0x55e389(0xbb)](), this[_0x55e389(0xe9)]),
					_0x18c90d = this['fs']['existsSync'](_0x1efebd),
					_0x22add0 = !_0x18c90d && this['fs'][_0x55e389(0x9f)](_0x19b7bb);
				if (!_0x18c90d && !_0x22add0) return {}; {
					const _0x5f539e = _0x18c90d ? _0x1efebd : _0x19b7bb;
					try {
						return JSON['parse'](this['fs'][_0x55e389(0xf9)](_0x5f539e));
					} catch (_0x498abb) {
						return {};
					}
				}
			}
		} ['writedata']() {
			const _0x15e8ef = _0x2d5bb3;
			if (this[_0x15e8ef(0xe7)]()) {
				this['fs'] = this['fs'] ? this['fs'] : require('fs'), this[_0x15e8ef(0xed)] = this[_0x15e8ef(0xed)] ? this[_0x15e8ef(0xed)] : require(_0x15e8ef(0xed));
				const _0x250958 = this[_0x15e8ef(0xed)][_0x15e8ef(0x11a)](this[_0x15e8ef(0xe9)]),
					_0x5056ce = this[_0x15e8ef(0xed)][_0x15e8ef(0x11a)](process['cwd'](), this[_0x15e8ef(0xe9)]),
					_0x1951ff = this['fs'][_0x15e8ef(0x9f)](_0x250958),
					_0x1b134b = !_0x1951ff && this['fs']['existsSync'](_0x5056ce),
					_0x30c308 = JSON['stringify'](this[_0x15e8ef(0xdf)]);
				_0x1951ff ? this['fs'][_0x15e8ef(0xf4)](_0x250958, _0x30c308) : _0x1b134b ? this['fs'][_0x15e8ef(0xf4)](_0x5056ce, _0x30c308) : this['fs'][_0x15e8ef(0xf4)](_0x250958, _0x30c308);
			}
		} [_0x2d5bb3(0x11b)](_0x533f8f, _0x4c8aaa, _0x9f4d48) {
			const _0x56f364 = _0x2d5bb3,
				_0x1b82d1 = _0x4c8aaa[_0x56f364(0x121)](/\[(\d+)\]/g, _0x56f364(0x11c))['split']('.');
			let _0x3fb99f = _0x533f8f;
			for (const _0x15c50d of _0x1b82d1)
				if (_0x3fb99f = Object(_0x3fb99f)[_0x15c50d], void 0x0 === _0x3fb99f) return _0x9f4d48;
			return _0x3fb99f;
		} [_0x2d5bb3(0xe4)](_0x5b7929, _0x46226e, _0x3cc646) {
			const _0x2659e3 = _0x2d5bb3;
			return Object(_0x5b7929) !== _0x5b7929 ? _0x5b7929 : (Array[_0x2659e3(0xc2)](_0x46226e) || (_0x46226e = _0x46226e[_0x2659e3(0xa7)]()[_0x2659e3(0x147)](/[^.[\]]+/g) || []), _0x46226e['slice'](0x0, -0x1)[_0x2659e3(0xad)]((_0x1c2563, _0x46ccf7, _0x56a0ed) => Object(_0x1c2563[_0x46ccf7]) === _0x1c2563[_0x46ccf7] ? _0x1c2563[_0x46ccf7] : _0x1c2563[_0x46ccf7] = Math[_0x2659e3(0xc5)](_0x46226e[_0x56a0ed + 0x1]) >> 0x0 == +_0x46226e[_0x56a0ed + 0x1] ? [] : {}, _0x5b7929)[_0x46226e[_0x46226e['length'] - 0x1]] = _0x3cc646, _0x5b7929);
		} [_0x2d5bb3(0xf0)](_0x4e5c64) {
			const _0x1f2ff6 = _0x2d5bb3;
			let _0x256e17 = this[_0x1f2ff6(0x12c)](_0x4e5c64);
			if (/^@/ [_0x1f2ff6(0xb5)](_0x4e5c64)) {
				const [, _0x297f07, _0x2108c5] = /^@(.*?)\.(.*?)$/ ['exec'](_0x4e5c64), _0x4898a0 = _0x297f07 ? this[_0x1f2ff6(0x12c)](_0x297f07) : '';
				if (_0x4898a0) try {
					const _0x10b715 = JSON[_0x1f2ff6(0xb3)](_0x4898a0);
					_0x256e17 = _0x10b715 ? this[_0x1f2ff6(0x11b)](_0x10b715, _0x2108c5, '') : _0x256e17;
				} catch (_0xea9da4) {
					_0x256e17 = '';
				}
			}
			return _0x256e17;
		} ['setdata'](_0x1b58e1, _0x197d08) {
			const _0x4a97e8 = _0x2d5bb3;
			let _0x281c1a = !0x1;
			if (/^@/ [_0x4a97e8(0xb5)](_0x197d08)) {
				const [, _0x11e6bd, _0x4f4472] = /^@(.*?)\.(.*?)$/ [_0x4a97e8(0xd5)](_0x197d08), _0x59b939 = this[_0x4a97e8(0x12c)](_0x11e6bd), _0x1d4469 = _0x11e6bd ? _0x4a97e8(0xb0) === _0x59b939 ? null : _0x59b939 || '{}' : '{}';
				try {
					const _0x28e8e4 = JSON[_0x4a97e8(0xb3)](_0x1d4469);
					this[_0x4a97e8(0xe4)](_0x28e8e4, _0x4f4472, _0x1b58e1), _0x281c1a = this[_0x4a97e8(0x11e)](JSON[_0x4a97e8(0xe8)](_0x28e8e4), _0x11e6bd);
				} catch (_0x12c100) {
					const _0x4db8aa = {};
					this[_0x4a97e8(0xe4)](_0x4db8aa, _0x4f4472, _0x1b58e1), _0x281c1a = this[_0x4a97e8(0x11e)](JSON[_0x4a97e8(0xe8)](_0x4db8aa), _0x11e6bd);
				}
			} else _0x281c1a = this[_0x4a97e8(0x11e)](_0x1b58e1, _0x197d08);
			return _0x281c1a;
		} ['getval'](_0x68dd6) {
			const _0x333b43 = _0x2d5bb3;
			return this['isSurge']() || this[_0x333b43(0x109)]() ? $persistentStore[_0x333b43(0x129)](_0x68dd6) : this[_0x333b43(0xf3)]() ? $prefs[_0x333b43(0x13a)](_0x68dd6) : this['isNode']() ? (this['data'] = this['loaddata'](), this[_0x333b43(0xdf)][_0x68dd6]) : this['data'] && this['data'][_0x68dd6] || null;
		} ['setval'](_0x25df3e, _0x530d27) {
			const _0x220201 = _0x2d5bb3;
			return this['isSurge']() || this[_0x220201(0x109)]() ? $persistentStore[_0x220201(0xda)](_0x25df3e, _0x530d27) : this[_0x220201(0xf3)]() ? $prefs[_0x220201(0x110)](_0x25df3e, _0x530d27) : this[_0x220201(0xe7)]() ? (this[_0x220201(0xdf)] = this[_0x220201(0x119)](), this[_0x220201(0xdf)][_0x530d27] = _0x25df3e, this[_0x220201(0xd7)](), !0x0) : this[_0x220201(0xdf)] && this[_0x220201(0xdf)][_0x530d27] || null;
		} [_0x2d5bb3(0xa2)](_0x54ec21) {
			const _0x1faed5 = _0x2d5bb3;
			this[_0x1faed5(0x10f)] = this['got'] ? this[_0x1faed5(0x10f)] : require(_0x1faed5(0x10f)), this['cktough'] = this[_0x1faed5(0x13f)] ? this[_0x1faed5(0x13f)] : require(_0x1faed5(0xfe)), this[_0x1faed5(0x101)] = this[_0x1faed5(0x101)] ? this['ckjar'] : new this[(_0x1faed5(0x13f))][(_0x1faed5(0xba))](), _0x54ec21 && (_0x54ec21['headers'] = _0x54ec21[_0x1faed5(0xd1)] ? _0x54ec21[_0x1faed5(0xd1)] : {}, void 0x0 === _0x54ec21[_0x1faed5(0xd1)][_0x1faed5(0xe3)] && void 0x0 === _0x54ec21[_0x1faed5(0xb9)] && (_0x54ec21[_0x1faed5(0xb9)] = this['ckjar']));
		} [_0x2d5bb3(0xab)](_0x53185a, _0x2fedea = () => {}) {
			const _0x4de557 = _0x2d5bb3;
			if (_0x53185a[_0x4de557(0xd1)] && (delete _0x53185a[_0x4de557(0xd1)][_0x4de557(0xfd)], delete _0x53185a[_0x4de557(0xd1)][_0x4de557(0x142)]), this['isSurge']() || this[_0x4de557(0x109)]()) this[_0x4de557(0x122)]() && this[_0x4de557(0xb7)] && (_0x53185a[_0x4de557(0xd1)] = _0x53185a['headers'] || {}, Object['assign'](_0x53185a[_0x4de557(0xd1)], {
				'X-Surge-Skip-Scripting': !0x1
			})), $httpClient['get'](_0x53185a, (_0x45ee79, _0x529f2b, _0x42c7a1) => {
				const _0x388a27 = _0x4de557;
				!_0x45ee79 && _0x529f2b && (_0x529f2b[_0x388a27(0xee)] = _0x42c7a1, _0x529f2b['statusCode'] = _0x529f2b[_0x388a27(0x134)]), _0x2fedea(_0x45ee79, _0x529f2b, _0x42c7a1);
			});
			else {
				if (this[_0x4de557(0xf3)]()) this[_0x4de557(0xb7)] && (_0x53185a[_0x4de557(0x9b)] = _0x53185a[_0x4de557(0x9b)] || {}, Object[_0x4de557(0xd2)](_0x53185a[_0x4de557(0x9b)], {
					'hints': !0x1
				})), $task[_0x4de557(0xc0)](_0x53185a)[_0x4de557(0x145)](_0x339fb3 => {
					const {
						statusCode: _0x29ef12,
						statusCode: _0x340968,
						headers: _0x1c4a0d,
						body: _0x5ef191
					} = _0x339fb3;
					_0x2fedea(null, {
						'status': _0x29ef12,
						'statusCode': _0x340968,
						'headers': _0x1c4a0d,
						'body': _0x5ef191
					}, _0x5ef191);
				}, _0x178141 => _0x2fedea(_0x178141));
				else {
					if (this[_0x4de557(0xe7)]()) {
						let _0x12d8c3 = require(_0x4de557(0x14a));
						this['initGotEnv'](_0x53185a), this[_0x4de557(0x10f)](_0x53185a)['on']('redirect', (_0x4578d5, _0x507150) => {
							const _0x119777 = _0x4de557;
							try {
								if (_0x4578d5['headers'][_0x119777(0xbd)]) {
									const _0x4e978c = _0x4578d5[_0x119777(0xd1)][_0x119777(0xbd)]['map'](this[_0x119777(0x13f)][_0x119777(0xe3)][_0x119777(0xb3)])[_0x119777(0xa7)]();
									_0x4e978c && this['ckjar'][_0x119777(0x102)](_0x4e978c, null), _0x507150[_0x119777(0xb9)] = this[_0x119777(0x101)];
								}
							} catch (_0x20c859) {
								this[_0x119777(0x106)](_0x20c859);
							}
						})[_0x4de557(0x145)](_0x5a0e7e => {
							const _0x1a0bfe = _0x4de557,
								{
									statusCode: _0x17c41b,
									statusCode: _0x4106ca,
									headers: _0x17f358,
									rawBody: _0x378e52
								} = _0x5a0e7e;
							_0x2fedea(null, {
								'status': _0x17c41b,
								'statusCode': _0x4106ca,
								'headers': _0x17f358,
								'rawBody': _0x378e52
							}, _0x12d8c3[_0x1a0bfe(0x148)](_0x378e52, this[_0x1a0bfe(0xf1)]));
						}, _0x4974b2 => {
							const _0x4b1776 = _0x4de557,
								{
									message: _0x12313f,
									response: _0x27ebc2
								} = _0x4974b2;
							_0x2fedea(_0x12313f, _0x27ebc2, _0x27ebc2 && _0x12d8c3['decode'](_0x27ebc2['rawBody'], this[_0x4b1776(0xf1)]));
						});
					}
				}
			}
		} ['post'](_0x3b9f5c, _0x39afb9 = () => {}) {
			const _0x510fdb = _0x2d5bb3,
				_0x3a9d89 = _0x3b9f5c['method'] ? _0x3b9f5c[_0x510fdb(0x137)][_0x510fdb(0x136)]() : _0x510fdb(0xa9);
			if (_0x3b9f5c[_0x510fdb(0xee)] && _0x3b9f5c['headers'] && !_0x3b9f5c[_0x510fdb(0xd1)][_0x510fdb(0xfd)] && (_0x3b9f5c[_0x510fdb(0xd1)]['Content-Type'] = 'application/x-www-form-urlencoded'), _0x3b9f5c[_0x510fdb(0xd1)] && delete _0x3b9f5c['headers'][_0x510fdb(0x142)], this['isSurge']() || this[_0x510fdb(0x109)]()) this[_0x510fdb(0x122)]() && this[_0x510fdb(0xb7)] && (_0x3b9f5c[_0x510fdb(0xd1)] = _0x3b9f5c[_0x510fdb(0xd1)] || {}, Object['assign'](_0x3b9f5c[_0x510fdb(0xd1)], {
				'X-Surge-Skip-Scripting': !0x1
			})), $httpClient[_0x3a9d89](_0x3b9f5c, (_0x480fed, _0x12657d, _0x4e9dd1) => {
				const _0x1ca7dc = _0x510fdb;
				!_0x480fed && _0x12657d && (_0x12657d[_0x1ca7dc(0xee)] = _0x4e9dd1, _0x12657d[_0x1ca7dc(0x135)] = _0x12657d[_0x1ca7dc(0x134)]), _0x39afb9(_0x480fed, _0x12657d, _0x4e9dd1);
			});
			else {
				if (this[_0x510fdb(0xf3)]()) _0x3b9f5c[_0x510fdb(0x137)] = _0x3a9d89, this[_0x510fdb(0xb7)] && (_0x3b9f5c[_0x510fdb(0x9b)] = _0x3b9f5c[_0x510fdb(0x9b)] || {}, Object[_0x510fdb(0xd2)](_0x3b9f5c['opts'], {
					'hints': !0x1
				})), $task[_0x510fdb(0xc0)](_0x3b9f5c)[_0x510fdb(0x145)](_0x15d0f6 => {
					const {
						statusCode: _0x2e06ff,
						statusCode: _0x5ee10a,
						headers: _0xd3a6e7,
						body: _0x31b649
					} = _0x15d0f6;
					_0x39afb9(null, {
						'status': _0x2e06ff,
						'statusCode': _0x5ee10a,
						'headers': _0xd3a6e7,
						'body': _0x31b649
					}, _0x31b649);
				}, _0x34816a => _0x39afb9(_0x34816a));
				else {
					if (this[_0x510fdb(0xe7)]()) {
						let _0x52f2c7 = require(_0x510fdb(0x14a));
						this[_0x510fdb(0xa2)](_0x3b9f5c);
						const {
							url: _0x1317f8,
							..._0x479f19
						} = _0x3b9f5c;
						this['got'][_0x3a9d89](_0x1317f8, _0x479f19)[_0x510fdb(0x145)](_0x2bef15 => {
							const _0x2c2c16 = _0x510fdb,
								{
									statusCode: _0x2c0ee6,
									statusCode: _0x16ba96,
									headers: _0x461adb,
									rawBody: _0x27a763
								} = _0x2bef15;
							_0x39afb9(null, {
								'status': _0x2c0ee6,
								'statusCode': _0x16ba96,
								'headers': _0x461adb,
								'rawBody': _0x27a763
							}, _0x52f2c7[_0x2c2c16(0x148)](_0x27a763, this[_0x2c2c16(0xf1)]));
						}, _0x3425a6 => {
							const _0x51545f = _0x510fdb,
								{
									message: _0x2cf379,
									response: _0x2c373e
								} = _0x3425a6;
							_0x39afb9(_0x2cf379, _0x2c373e, _0x2c373e && _0x52f2c7[_0x51545f(0x148)](_0x2c373e[_0x51545f(0xf5)], this['encoding']));
						});
					}
				}
			}
		} ['time'](_0xcba6b0, _0x54771c = null) {
			const _0xce78c = _0x2d5bb3,
				_0x1804c5 = _0x54771c ? new Date(_0x54771c) : new Date();
			let _0x54f670 = {
				'M+': _0x1804c5[_0xce78c(0xb2)]() + 0x1,
				'd+': _0x1804c5[_0xce78c(0x13b)](),
				'H+': _0x1804c5[_0xce78c(0xd6)](),
				'm+': _0x1804c5[_0xce78c(0x10a)](),
				's+': _0x1804c5[_0xce78c(0x118)](),
				'q+': Math[_0xce78c(0xb1)]((_0x1804c5[_0xce78c(0xb2)]() + 0x3) / 0x3),
				'S': _0x1804c5[_0xce78c(0x146)]()
			};
			/(y+)/ [_0xce78c(0xb5)](_0xcba6b0) && (_0xcba6b0 = _0xcba6b0['replace'](RegExp['$1'], (_0x1804c5[_0xce78c(0xc7)]() + '')['substr'](0x4 - RegExp['$1'][_0xce78c(0xfa)])));
			for (let _0x4931e4 in _0x54f670) new RegExp('(' + _0x4931e4 + ')')[_0xce78c(0xb5)](_0xcba6b0) && (_0xcba6b0 = _0xcba6b0[_0xce78c(0x121)](RegExp['$1'], 0x1 == RegExp['$1'][_0xce78c(0xfa)] ? _0x54f670[_0x4931e4] : ('00' + _0x54f670[_0x4931e4])[_0xce78c(0x120)](('' + _0x54f670[_0x4931e4])['length'])));
			return _0xcba6b0;
		} ['msg'](_0x682bf4 = _0x5c4ae9, _0x40461f = '', _0x33de13 = '', _0x381b9a) {
			const _0x197d64 = _0x2d5bb3,
				_0x327de5 = _0x2283bd => {
					const _0x341ecf = _0x319d;
					if (!_0x2283bd) return _0x2283bd;
					if (_0x341ecf(0x133) == typeof _0x2283bd) return this['isLoon']() ? _0x2283bd : this[_0x341ecf(0xf3)]() ? {
						'open-url': _0x2283bd
					} : this[_0x341ecf(0x122)]() ? {
						'url': _0x2283bd
					} : void 0x0;
					if (_0x341ecf(0xfc) == typeof _0x2283bd) {
						if (this[_0x341ecf(0x109)]()) {
							let _0x23c8ed = _0x2283bd[_0x341ecf(0x126)] || _0x2283bd['url'] || _0x2283bd['open-url'],
								_0xccd914 = _0x2283bd[_0x341ecf(0x144)] || _0x2283bd['media-url'];
							return {
								'openUrl': _0x23c8ed,
								'mediaUrl': _0xccd914
							};
						}
						if (this[_0x341ecf(0xf3)]()) {
							let _0x32c8a2 = _0x2283bd['open-url'] || _0x2283bd['url'] || _0x2283bd[_0x341ecf(0x126)],
								_0x2dbfee = _0x2283bd[_0x341ecf(0x10d)] || _0x2283bd[_0x341ecf(0x144)];
							return {
								'open-url': _0x32c8a2,
								'media-url': _0x2dbfee
							};
						}
						if (this['isSurge']()) {
							let _0x3015a0 = _0x2283bd[_0x341ecf(0xc6)] || _0x2283bd[_0x341ecf(0x126)] || _0x2283bd[_0x341ecf(0xfb)];
							return {
								'url': _0x3015a0
							};
						}
					}
				};
			if (this[_0x197d64(0xca)] || (this['isSurge']() || this[_0x197d64(0x109)]() ? $notification[_0x197d64(0xa9)](_0x682bf4, _0x40461f, _0x33de13, _0x327de5(_0x381b9a)) : this[_0x197d64(0xf3)]() && $notify(_0x682bf4, _0x40461f, _0x33de13, _0x327de5(_0x381b9a))), !this[_0x197d64(0xc9)]) {
				let _0x522f51 = ['', '==============📣系统通知📣=============='];
				_0x522f51['push'](_0x682bf4), _0x40461f && _0x522f51['push'](_0x40461f), _0x33de13 && _0x522f51[_0x197d64(0x130)](_0x33de13), console['log'](_0x522f51['join']('\x0a')), this[_0x197d64(0x139)] = this['logs']['concat'](_0x522f51);
			}
		} [_0x2d5bb3(0xea)](..._0x4de052) {
			const _0x384ee3 = _0x2d5bb3;
			_0x4de052[_0x384ee3(0xfa)] > 0x0 && (this[_0x384ee3(0x139)] = [...this[_0x384ee3(0x139)], ..._0x4de052]), console[_0x384ee3(0xea)](_0x4de052[_0x384ee3(0x12e)](this['logSeparator']));
		} [_0x2d5bb3(0x106)](_0x2348ce, _0x40a78a) {
			const _0x4bfa7b = _0x2d5bb3,
				_0x197ba2 = !this[_0x4bfa7b(0x122)]() && !this['isQuanX']() && !this[_0x4bfa7b(0x109)]();
			_0x197ba2 ? this['log']('', '❗️' + this[_0x4bfa7b(0xae)] + _0x4bfa7b(0xf6), _0x2348ce[_0x4bfa7b(0xa3)]) : this[_0x4bfa7b(0xea)]('', '❗️' + this[_0x4bfa7b(0xae)] + _0x4bfa7b(0xf6), _0x2348ce);
		} ['wait'](_0x5f20d7) {
			return new Promise(_0xddf6aa => setTimeout(_0xddf6aa, _0x5f20d7));
		} [_0x2d5bb3(0xeb)](_0x58baa2 = {}) {
			const _0xba0da5 = _0x2d5bb3,
				_0x4577a8 = new Date()[_0xba0da5(0xcb)](),
				_0x2ca70c = (_0x4577a8 - this['startTime']) / 0x3e8;
			this[_0xba0da5(0xea)]('', '🔔' + this['name'] + _0xba0da5(0xf7) + _0x2ca70c + '\x20秒'), this[_0xba0da5(0xea)](), (this[_0xba0da5(0x122)]() || this[_0xba0da5(0xf3)]() || this['isLoon']()) && $done(_0x58baa2);
		}
	}(_0x5c4ae9, _0x16332f);
}