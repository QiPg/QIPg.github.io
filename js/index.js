DOMReady(function() {
			// 头部导航栏却换样式
			! function() {
				var navs = document.getElementsByClassName('header-nav');
				var lh = navs.length;
				for (var i = 0; i < lh; i++) {
					(function(j) {
						navs[j].onclick = function() {
							for (var jj = 0; jj < lh; jj++) {
								if (navs[jj]) {
									navs[jj].firstElementChild.className = '';
									navs[jj].className = 'header-nav';
								}
							}
							this.firstElementChild.className = 'nav-buttom-p';
							this.className = 'header-nav nav-buttom';
						};
					})(i)
				}
			}();
			//内容list绑定事件
			+function() {
				var lis = document.getElementsByClassName('cell-text-rol');
				var lislh = lis.length;
				for (var i = 0; i < lislh; i++) {
					(function(j) {
							//移入
							lis[j].onmouseover = function() {
								for (var jj = 0; jj < lislh; jj++) {
									if (lis[jj]) {
										lis[jj].lastElementChild.className = 'rol-active';
									}
								}
								this.lastElementChild.className = 'rol-active mshow';
							};
							//移出
							lis[j].onmouseout= function() {
								this.lastElementChild.className = 'rol-active';
							};
				})(i);
				}
				}();
				
				
})
		function DOMReady(callback) {
			document.addEventListener('DOMContentLoaded', function() {
				callback();
			});
		};
