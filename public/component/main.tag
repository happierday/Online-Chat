<main>
    
    <div>
        <a href ="/">home</a>
        <button hide = {hide} name = "loginButton" onclick="login()">login</button>
        <h1 hide = {show} >{user}</h1>
        <button hide = {show}  class = "signoutButton" onclick= "signout()">signout</button>      
    </div>
    <script>
        this.user = opts.user;
        if(this.user){
            this.hide = true;
            this.show = false;
        }else{
            this.hide = false;
            this.show = true;
        }
    </script>
    <style>
        div{
            white-space:nowrap;
        }
        div * {
            display:inline;
        }
        button{
            background-color: #FFE4C4;
            border:none;
            border-radius: 25px;
            color: #D2691E;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            float:right;
        }
        button:hover{
            background:#DEB887;
        }

        h1{
            text-align: center;
        }

        a{
            background-color: #FFE4C4;
            border:none;
            border-radius: 25px;
            color: #D2691E;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
        }
        a:hover {
            background:#DEB887;
        }
    </style>
</main>