function getNowDateTime() {
			var d = new Date(); 
			// Mon Dec 18 2017 21:29:58 GMT+0800 (中国标准时间)
			var weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];//定义一个从星期日到星期六的数组，因为后面获取的星期数返回的是0-6
			//在西方看来，星期日才是一周的开始
			var year = d.getFullYear(); //获取年份
			var mouth = (d.getMonth() + 1)<10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);//获取月份，返回值是0-11，因此需要加1
			var day = d.getDate()<10 ? '0'+d.getDate():d.getDate();//获取日期
			var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();//获取小时，三元表达式，判断是否小于10，小于10就在前面加0（字符串拼接），例如：08
			var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();//获取分钟
			var second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();//获取秒数
			var weekIndex = d.getDay();//获取星期数，返回0-6
			var week = weeks[weekIndex];//根据获取的星期数，到之前定义的数组去取值
			return year + '-' + mouth + '-' + day + ' ' + hour + ':' + minutes;
													
		}