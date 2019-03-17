window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#loginButton').addEventListener('click', function(event){
event.preventDefault();

        const username=document.querySelector('#username').value;
        const password=document.querySelector('#password').value;

        if (userStorage.login(username,password)){

          

            document.querySelector('#loginForm').style.visibility='hidden';
            document.querySelector('.loginIcon').style.visibility='hidden';
            document.querySelector('.loginP').innerHTML=username;
            document.querySelector('#profile').innerHTML=username;

           
          
            document.querySelector('.loginP').addEventListener('click',function(event){
                document.querySelector('.profileBox').style.visibility='visible';

                

                

            },false);
           

        }else{
            alert("Error");
        }


       
    

    
    },false);


    document.querySelector('#registerButton').addEventListener('click', function(event){
        event.preventDefault();

        let hasErrors=false;
        const username=document.querySelector('#username2').value;
        const password=document.querySelector('#password2').value;

    if (username.trim().length<4){
        document.querySelector('#username2').style.backgroundColor='red';
        hasErrors=true;
    }else{
        document.querySelector('#username2').style.backgroundColor='green';
    }

    if (password.trim().length<6){
        document.querySelector('#password2').style.backgroundColor='red';
        hasErrors=true;
    }else{
        document.querySelector('#password2').style.backgroundColor='green';
    }
    if (!hasErrors){
        
        userStorage.register(username,password);
        document.querySelector('#username2').style.backgroundColor='white';
        document.querySelector('#username2').value='';
        document.querySelector('#password2').value='';


        document.querySelector('#password2').style.backgroundColor='white';

        document.querySelector('.formRegister').style.display='none';
        document.querySelector('#successful').style.display='inline-block';
    }
    },false);


    document.querySelector('#username2').addEventListener('keyup',function(event){
        const username=document.querySelector('#username2').value;
        const password=document.querySelector('#password2').value;

    if (username.trim().length<4){
        document.querySelector('#username2').style.backgroundColor='red';
    }else{
        document.querySelector('#username2').style.backgroundColor='green';
    }
    if(username.trim().length===0){
        document.querySelector('#username2').style.backgroundColor='white';
    }



    },false);
    document.querySelector('#password2').addEventListener('keyup',function(event){
        document.querySelector('#password2').style.backgroundColor='white';

        const username=document.querySelector('#username2').value;
        const password=document.querySelector('#password2').value;
        if (password.trim().length<6){
            document.querySelector('#password2').style.backgroundColor='red';
        }else{
            document.querySelector('#password2').style.backgroundColor='green';
        }

        if(password.trim().length===0){
            document.querySelector('#password2').style.backgroundColor='white';
        }
    },false);


    document.querySelector('#nextLast').addEventListener('click',function(event){
    document.querySelector('.profileBox').style.visibility='hidden';
    document.querySelector('.loginP').innerHTML='';
    document.querySelector('.loginIcon').style.visibility='visible';
    document.querySelector('#password').value='';


    });


});



