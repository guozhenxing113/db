let _toString = Object.prototype.toString;
var hasOwnAttribute = Object.prototype.hasOwnProperty;

export default {
	// 判断是否是对象
	isPlainObject(obj) {
		return _toString.call(obj) === '[object Object]'
	},
	// 判断是否是数组
	isPlainArray(obj) {
		return _toString.call(obj) === '[object Array]'
	},
	// 快速对象检查-这主要用于判断,知道原始值时，从原始值获取对象
	isObject(obj) {
		return obj !== null && typeof obj === 'object'
	},
	// 判断是否是正则
	isRegExp(v) {
		return _toString.call(v) === '[object RegExp]'
	},
	// 将值转换为实际呈现的字符串
	toStr(val) {
		return val == null ?
			'' :
			Array.isArray(val) || (this.isPlainObject(val) && val.toString === _toString) ?
			JSON.stringify(val, null, 2) :
			String(val)
	},
	// 转换成数字
	toNumber(val) {
		var n = parseFloat(val);
		return isNaN(n) ? val : n
	},
	// 从数组中删除一个项
	remove(arr, item) {
		if (arr.length) {
			var index = arr.indexOf(item);
			if (index > -1) {
				return arr.splice(index, 1)
			}
		}
	},
	// 检查对象是否具有该属性
	hasOwn(obj, key) {
		return hasOwnAttribute.call(obj, key)
	},
	// 冒泡排序
	bubbleSort(arr) {
		for (var i = 0; i < arr.length - 1; i++) {
			for (var j = 0; j < arr.length - i; j++) {
				if (arr[j] > arr[j + 1]) {
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		return arr;
	},
	// 选择排序
	selectSort(arr) {
		var min, temp;
		for (var i = 0; i < arr.length - 1; i++) {
			min = i;
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
			}
			temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;

		}
		return arr;
	},
	// 快速排序
	quickSort(arr) {
		if (arr.length < 2) {
			return arr
		}
		var left = [],
			right = [],
			mid = arr.splice(Math.floor(arr.length / 2), 1);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] < mid) {
				left.push(arr[i]);
			} else {
				right.push(arr[i])
			}
		}
		return this.quickSort(left).concat(mid, this.quickSort(right))
	},
	// 插入排序
	insertSort(arr) {
		var len = arr.length;
		for (var i = 1; i < len; i++) {
			var key = arr[i];
			var j = i - 1;
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = key;
		}
		return arr;
	},
	// 将一个类数组对象转换为一个真实的数组
	toArray(list, start) {
		start = start || 0;
		var i = list.length - start;
		var ret = new Array(i);
		while (i--) {
			ret[i] = list[i + start];
		}
		return ret
	},
	// 将一个对象增加到另一个对象中
	extend(to, _from) {
		for (var key in _from) {
			to[key] = _from[key];
		}
		return to
	},
	// 将对象数组合并为单个对象
	toObject(arr) {
		var res = {};
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]) {
				this.extend(res, arr[i]);
			}
		}
		return res
	},
	// 确保一个函数只被调用一次
	once(fn) {
		var called = false;
		return function() {
			if (!called) {
				called = true;
				fn.apply(this, arguments);
			}
		}
	},
  // 去重
  onlyArray(arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
      if (newArr.indexOf(arr[i])===-1) {
        newArr.push(arr[i]);
      }
    }
    return newArr
  },
	// 检查字符串是否以$或_开头
	isReserved(str) {
		var c = (str + '').charCodeAt(0);
		return c === 0x24 || c === 0x5F
	},
  // 倒计时
  countDown(that) {
    that.codeText = that.totalTime + ' s'
    that.timer = window.setInterval(() => {
      that.totalTime--
      that.codeText = that.totalTime + ' s'
      if (that.totalTime < 0) {
        this.clearCountDown(that)
      }
    }, 1000)
  },
  //清除定时器
  clearCountDown(that) {
    if (that.timer) {
      window.clearInterval(that.timer)
      that.codeText = '发 送'
      that.totalTime = 60
      that.isSend = false //这里重新开启
    }
  },
	// 判断访问终端
	browser() {
		var u = navigator.userAgent
		return {
			trident: u.indexOf('Trident') > -1, // IE内核
			presto: u.indexOf('Presto') > -1, // opera内核
			webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
			iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, // 是否iPad
			webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
			alipay: u.indexOf('AlipayClient') > -1, // 是否支付宝
			qq: u.match(/\sQQ/i) === ' qq' // 是否QQ
		}
	},
	// 上传本地图片
	handleFile(e, that) {
		return new Promise((resolve, reject) => {
			let file = e.target.files;
			let max = 2 * 1024 * 1024
			if (file[0].size > max) {
				that.$message.error('上传文件小于2M！')
				return false;
			}
			let imgObj = file[0]
			let reader = new FileReader(); //读取文件
			reader.readAsDataURL(file[0]);
			reader.onload = () => {
				let data = {
					file: imgObj,
					url: reader.result
				}
				resolve(data)
			}
		})
	},
	// 深拷贝
	deepCopy(obj) {
		var result = Array.isArray(obj) ? [] : {};
		for (var key in obj) {
			if (this.hasOwn(obj, key)) {
				if (typeof obj[key] === 'object' && obj[key] !== null) {
					result[key] = this.deepCopy(obj[key]); //递归复制
				} else {
					result[key] = obj[key];
				}
			}
		}
		return result;
	},
	//设置缓存
	setItem(params) {
		let obj = {
			name: 'STORAGE',
			value: '',
			expires: "", //过期时间 、1 * 24 * 3600 * 1000
			startTime: new Date().getTime() //记录何时将值存入缓存，毫秒级
		}
		let options = {};
		//将obj和传进来的params合并
		Object.assign(options, obj, params);
		if (options.expires) {
			//如果options.expires设置了的话
			//以options.name为key，options为值放进去
			localStorage.setItem(options.name, JSON.stringify(options));
		} else {
			//如果options.expires没有设置，就判断一下value的类型
			//如果value是对象或者数组对象的类型，就先用JSON.stringify转一下，再存进去
			if (this.isPlainObject(options.value) || this.isPlainArray(options.value)) {
				options.value = JSON.stringify(options.value);
			}
			localStorage.setItem(options.name, options.value);
		}
	},
	//拿到缓存
	getItem(name) {
		let item = localStorage.getItem(name);
		//先将拿到的试着进行json转为对象的形式
		try {
			item = JSON.parse(item);
		} catch (error) {
			//如果不行就不是json的字符串，就直接返回
			// item = item;
		}
		//如果有startTime的值，说明设置了失效时间
		if (item && item.startTime) {
			let date = new Date().getTime();
			//何时将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
			if (date - item.startTime > item.expires) {
				//缓存过期，清除缓存，返回false
				localStorage.removeItem(name);
				return false;
			} else {
				//缓存未过期，返回值
				return item.value;
			}
		} else {
			//如果没有设置失效时间，直接返回值
			return item;
		}
	},
	//移出缓存
	removeItem(name) {
		localStorage.removeItem(name);
	},
	//移出全部缓存
	clear() {
		localStorage.clear();
	},
	// 临时存储
	sessionSetItem(params) {
		let obj = {
			name: 'SESSION-STORAGE',
			value: ''
		}
		let options = {};
		//将obj和传进来的params合并
		Object.assign(options, obj, params);
		if (this.isPlainObject(options.value) || this.isPlainArray(options.value)) {
			options.value = JSON.stringify(options.value);
		}
		sessionStorage.setItem(options.name, options.value)
	},
	// 获取临时存储
	sessionGetItem(name) {
		let item = sessionStorage.getItem(name);
		try {
			item = JSON.parse(item)
		} catch (e) {
			// item = item
			//TODO handle the exception
		}
		if (item) {
			return item
		} else {
			return ''
		}
	},
	// 临时缓存删除
	sessionRemove(name) {
		sessionStorage.removeItem(name)
	},
	// 移除全部临时缓存
	sessionClear() {
		sessionStorage.clear()
	},
	// 设置cookie
	setCookie(name, value, time) {
		var date = time || 7 * 24 * 3600 * 1000
		var exp = new Date()
		exp.setTime(exp.getTime() + date)
		document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
	},
	// 获取cookie
	getCookie(name) {
		var search = name + '=' // 查询检索的值
		var returnvalue = '' // 返回值
		if (document.cookie.length > 0) {
			var sd = document.cookie.indexOf(search)
			if (sd !== -1) {
				sd += search.length
				var end = document.cookie.indexOf(';', sd)
				if (end === -1) {
					end = document.cookie.length
				}
				// unescape() 函数可对通过 escape() 编码的字符串进行解码。
				returnvalue = unescape(document.cookie.substring(sd, end))
        if (!returnvalue) {
          this.delCookie(name)
        }
			}
		}
		return returnvalue
	},
	// 删除cookie
	delCookie(name) {
		var exp = new Date()
		exp.setTime(exp.getTime() - 1)
		var cval = this.getCookie(name)
		if (cval != null) {
			document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
		}
	},
	// 删除所有cookie
	delAllCookie() {
		let cookies = document.cookie.split(';')
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i]
			let eqPos = cookie.indexOf('=')
			let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
		}
	},
	//判断开始时间<结束时间
	validTime(startTime, endTime) {
		let beginDate = startTime
		let endDate = endTime
		let d1 = new Date(beginDate.replace(/\-/g, "\/"))
		let d2 = new Date(endDate.replace(/\-/g, "\/"))
		if ((beginDate != "") && (endDate != "") && d1 >= d2) {
			// 根据使用的组件这里调取提示语
			// Toast({ message: "开始时间必须小于结束时间！", duration: 1500 });
			return false;
		}
		return true
	},
	// 动态加载文件,默认加载js文件
	loadscript(url, type) {
		if (!url) {
			return
		}
		let script = document.createElement("script");
		script.type = "text/javacript";
		if (type) {
			script.type = type
		}
		script.src = url;
		document.body.appendChild(script);
	},
	// 获取url参数
	getQueryString() {
		var url = window.location.search;
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			var strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	},
	//解析时间戳
	timeData(data) {
		var date = new Date(parseInt(data) * 1000)
		var Y = date.getFullYear() + '-'
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
		var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
		var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
		var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
		var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
		let dateObj = {
			YMDHMS: Y + M + D + h + m + s, //年月日时分秒
			YMDHM: Y + M + D + h + m, //年月日时分
			YMD: Y + M + D, //年月日
			MDHMD: Y + M + D, //月日时分秒
			HMS: h + m + s, //时分秒
			HM: m + s, //时分
		}
		return dateObj
	}
}
