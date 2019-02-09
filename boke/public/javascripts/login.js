$(function(){
	$("#btn").on("click",function(e){
		e.preventDefault();
		var username = $("#username").val();
		var psw = $("#psw").val();
		$.post("/users/login",{
			username:username,
			password:psw
		},function(data){
			if(data==0){
				alert("用户名或者密码错误")
			};
			if(data==1){
				location.href="/"
			}
		})
	})
		
	
})