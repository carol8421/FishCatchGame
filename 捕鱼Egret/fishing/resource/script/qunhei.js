(function() {
    var g = function() {};
    g.prototype = {
		unid:'1',
		payListener:null,
		init: function(sdata){
			var shareurl = 'http://m.qunhei.com/game/getShare.html?'+this.formatParams(sdata);
			this.qhjsonp(shareurl,function(ret){
				if(ret.code!=1){
					return;
				}
				//wxShare(ret.msg);
			});
		},		
		pay: function(pdata,lisenter) {	
			if(pdata.userId=='3229965'){
				//alert(pdata.gid);
			}
			var orderurl = 'http://m.qunhei.com/pay/getOrder.html?'+this.formatParams(pdata);
			this.qhjsonp(orderurl,function(ret){
				if(ret.code!=1){
					lisenter(ret.code,ret.msg);
					return;
				}
				// ����js
				sdkLoad(ret.msg);
				onmessage=function(e){
					e=e||event;
					if(e.data.codes){
						lisenter(e.data.codes,e.data.msg);
					}
				}
			});
        },
		loadJs: function(src, callback) {
			var oHead = document.getElementsByTagName('head').item(0);
			var oScript= document.createElement("script");
			oScript.type = "text/javascript";
			oScript.src = src;
			oHead.appendChild(oScript);
			oScript.onload=oScript.onreadystatechange=function(){
				if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){
					callback();
				}
				oScript.onload=oScript.onreadystatechange=null;
			};
		},
		qhjsonp: function(url, callback) {
			if (!url) {
				return;
			}
			var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //����һ�������Ա�������������
			var r1 = Math.floor(Math.random() * 10);
			var r2 = Math.floor(Math.random() * 10);
			var r3 = Math.floor(Math.random() * 10);
			var name = 'getJSONP' + a[r1] + a[r2] + a[r3];
			var cbname = 'qhsdk.qhjsonp.' + name; //��Ϊjsonp����������
			if (url.indexOf('?') === -1) {
				url += '?callback=' + cbname;
			} else {
				url += '&callback=' + cbname;
			}
			var script = document.createElement('script');
			//���屻�ű�ִ�еĻص�����
			qhsdk.qhjsonp[name] = function (e) {
				try {
					callback && callback(e);
				}catch (e) {
					//
				}
				finally {
					//���ɾ���ú�����scriptԪ��
					delete qhsdk.qhjsonp[name];
					script.parentNode.removeChild(script);
				}
			};
			script.src = url;
			document.getElementsByTagName('head')[0].appendChild(script);
		},
		formatParams: function(a) {
			var b, c = [];
			for (b in a) a.hasOwnProperty(b) && c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a[b]));
			return c.join("&")
		},
    };
    window.qhsdk = new g;
	function sdkLoad(order){
		switch(order.unid){
			case 'aiaiyx':
				qhsdk.loadJs(order.jsurl, function(){
					var initdata = {
						"app_id":order.app_id,
						"open_id":order.open_id,
						"channel":order.channel
					}; 
					aiaiusdk.init(initdata);
					var paydata = { 
						   "open_id":order.open_id,
						   "access_token":order.access_token,
						   'bill_no':order.bill_no,
						   "goods_name":order.goods_name, 
						   "total_fee":order.total_fee,
						   "ext":order.ext,
						   "sign":order.sign
						};
					aiaiusdk.pay( paydata, function (code, msg) {
						var codes = code==6?1:2;
						window.postMessage({'codes': codes,'msg':msg}, "*");
					});			
				});	
				break;
			case 'meitugame':
				qhsdk.loadJs(order.jsurl, function(){
					quwanwansdk.pay({
						token: order.token,
						sign: order.sign,
						callFunc: function (status,msg) {
							var codes = status=='success'?1:2;
							window.postMessage({'codes': codes,'msg':msg}, "*");
						}
					});
				});	
				break;
			case 'tianjie':
				qhsdk.loadJs(order.jsurl, function(){
					var tjObj = new tjGame({"gamekey": order.gamekey});
					tjObj.init(function(){});
					var orderInfo = { 
					   "gamekey":order.gamekey,
					   "userid":order.userid,
					   'timestamp':order.timestamp,
					   "prop_name":order.prop_name, 
					   "pay_money":order.pay_money,
					   "game_orderid":order.game_orderid,
					   "nonce":order.nonce,
					   "notify_url":order.notify_url,
					   "sign":order.sign
					};
					tjObj.pay( orderInfo, function (result) { 
						var codes = result.code==0?1:2;
						window.postMessage({'codes': codes,'msg':result.msg}, "*");
					});
				});
				break;
			case 'tianniu':	
				alert(order.goods_id);
				var o = { uid:order.uid, amount:order.amount, out_order_id : order.out_order_id, body:order.body, detail : order.detail, gameid : order.gameid,out_attach:order.out_attach};
				window.parent.postMessage(JSON.stringify(o), '*');	
				break;
			case 'ig1758':
				qhsdk.loadJs(order.jsurl, function(){
					var hlmysdk = window.HLMY_SDK;
					hlmysdk.init({
					  "gid":order.igid,        //ͨ��"�û���֤"�ӿڻ�ȡ����1758ƽ̨gid
					  "appKey":order.appKey,     //��Ϸ��appkey
					  "hlmy_gw":order.hlmy_gw    //1758ƽ̨���Զ��������CPͨ����Ȩ�ص���ַ��Ĳ������
					});
					hlmysdk.pay({
					  "paySafecode":order.paySafecode  //ͨ������������̨�µ��ӿڡ����ص�֧����ȫ��
					});
				});
				break;
			case 'yx3500':
				qhsdk.loadJs(order.jsurl, function(){
					var game35 = new Game35({
						uid: order.uid,	//�û�id
						token: order.token // 3500�û� token����¼����
				    });
					var data = {
							orderid: order.orderid,			// ������
							money: order.money,				// ��������λ���֣�
							product: order.product,		// ��Ʒ����
							appid: order.appid,				// ������ spid
							sign: order.sign,					// ǩ��
							ext: order.ext,				//��չ������������ǩ��
							onPayCallback: function(data) {
								var codes = data.status == 99 ? 1 : 2;
								window.postMessage({'codes': codes,'msg':'֧���ɹ�'}, "*");
							},
							onPayCancel: function() {
								window.postMessage({'codes': 2,'msg':'֧��ʧ��'}, "*");
							}
						};
					game35.pay(data);
				});
				break;
			case 'dangle':
				qhsdk.loadJs(order.jsurl, function(){
					var payData = new Object();
					payData.amount = order.amount;
					payData.unionId = order.unionId;
					payData.cpOrder = order.cpOrder;
					payData.subject = order.subject;
					payData.sign = order.sign;
					payData.serverName = order.serverName;
					payData.roleName = order.roleName;
					var callback = function (result){
						//result.code 1=�ɹ���-1=ȡ��������ʧ��
						window.postMessage({'codes': result.code,'msg':result.message}, "*");
					}
					var djGame = new DownjoySdk();
					djGame.pay(payData,callback);
				});
				break;
			case 'haiwanwan':
				qhsdk.loadJs(order.jsurl, function(){
					Hwwsdk.pay(order.goodsName, order.amount, order.roleName, order.callBackInfo,order.sign);
				});
				break;
			case 'ibeargame':
				qhsdk.loadJs(order.jsurl, function(){
					BEAR.goToPay(order.appId,order.productId,order.gameUid,order.gameUserName,order.extra);
				});
				break;
			case 'games51':
				qhsdk.loadJs('http://test.dayukeji.com/javascripts/jquery-3.1.0.min.js', function(){});
				qhsdk.loadJs(order.jsurl, function(){
					var params = {
						UID:order.UID,
						game_id:order.game_id,
						recharge:order.recharge,	
						order_id: order.order_id,									
						ext:order.ext,
						sign:order.sign
					}
					games51ToPayment(params);
				});
				break;
			case 'game9g':
				qhsdk.loadJs(order.jsurl, function(){
					var game9g = new Game9G({
						gameid: order.gameid,	
						channel: order.channel,	
						token: order.token		
					});
					var data = {
						orderid: order.orderid,			
						money: order.money,				
						product: order.product,	
						spid: order.spid,				
						sign: order.sign,				
						attach: order.attach,				
						onPayCallback: function(data) {
							if (data.status == 1) {
								window.postMessage({'codes': data.status,'msg':'֧���ɹ�'}, "*");
							} else {
								window.postMessage({'codes': data.status,'msg':'֧��ʧ��'}, "*");
							}
						},
						onPayCancel: function() {
							window.postMessage({'codes':'3','msg':'ȡ��֧��'}, "*");
						}
					};
					game9g.pay(data);
				});
				break;
			case 'game16':
				qhsdk.loadJs(order.jsurl, function(){
					alert(order.sign);
					var params={
							pay:{ 
								success: function(){
									window.postMessage({'codes':'1','msg':'֧���ɹ�'}, "*");
								}, 
								cancel: function(){
									window.postMessage({'codes':'3','msg':'ȡ��֧��'}, "*");
								}, 
							}
					};
					LWGAME_SDK.config(params);
					var payparams={
						out_trade_no: order.out_trade_no, 
						product_id: order.product_id, 
						total_fee: order.total_fee, 
						body: order.body, 
						detail: order.detail, 
						attach: order.attach, 
						sign: order.sign, 
					};
					LWGAME_SDK.pay(payparams);
				});
				break;
			default:
				var gourl = order.jsurl+'?'+qhsdk.formatParams(order);
				//alert(gourl);
				location.href=gourl;
				break;
		}
	}
	function wxShare(data){
		switch(data.unid){
			case 'game9g':
				qhsdk.loadJs(data.jsurl, function(){
					var game9g = new Game9G({
						gameid: data.gameid,	
						channel: data.channel,	
						token: data.token		
					});
					game9g.onShareOK(function() {
						window.postMessage('shareok', "*");
					});
				});					
				break;
			default:
				return;
				break;
		}
	}	
})();