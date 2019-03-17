var userStorage=(function(){
    class User{
        constructor(username,password){
            this.username=username;
            this.password=password;
            this.numberComments=0;
        }
    }

      
    let userlist=[]
    if(localStorage.getItem('userlist') !== null){
userlist=JSON.parse(localStorage.getItem('userlist'));
    }else{
        userlist=[
            new User('Gosho','123456'),
            
           
        ];
}

    return {
        login : function(username,password){
            return userlist.some(user=>user.username===username && 
                user.password===password);  
        },
        register:function(username,password){
            userlist.push(new User (username, password));
            localStorage.setItem('userlist', JSON.stringify(userlist));
        }
    }

})();