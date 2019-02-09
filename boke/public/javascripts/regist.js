$(function(){
	$(".biaotou li").eq(1).hover(function(){
		$(this).css("background","blue")
	},function(){
		$(this).css("background","none")
	}).on("click",function(){
		location.href="../login"
	});
	
	
	$("#txt").blur(function(){
		var username = $("#txt").val();
		var reg = /^1[3|7|5|8]\d{9}$/;		
		if(!reg.test(username)){
			$("#tip1").html("请输入正确的手机号")
		}else{
			$("#tip1").html("")
		}
	});
	$("#pass").blur(function(){
		var psw = $("#pass").val();
		var reg = /(\d|[a-z]|[A-z]){6,20}/;		
		if(!reg.test(psw)){
			$("#tip2").html("请输入6-20位密码")
		}else{
			$("#tip2").html("");			
		}
	});
	$("#btn").on("click",function(e){
				e.preventDefault();
				var username = $("#txt").val();
				var psw = $("#pass").val();
				$.post("/users/regist",{
					username:username,
					password:psw
				},function(data){
					//console.log(data)
					if(data==0){
						$("#tip1").html("用户名已被占用")
					};
					if(data==1){
						location.href="/login"
					}
				})
			})
})
