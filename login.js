function validate()
    {
      const username=document.getElementById("username");
      const password=document.getElementById("password");
      alert(username+"un");
      alert(password+"pwd");
      if(username =="admin" && password == "s1234")

      {
       alert("login successfully");
       return false;
      }
      else{
        alert("login failed");
      }
    }
