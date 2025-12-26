    <h1>Blog Api -- Routes documantation</h1>

     <h3>/auth</h3>
     <p>- main route for authentication</p>

     <h4>/auth/register</h4>
     <p>- sub route reserved for registering</p>
     <code>
        // POST  <br>
        // data eg
        <br> <br>

        { <br>
            "email": "email@email.com", <br>
            "username": "bigahdih", <br>
            "firstname": "John", <br>
            "lastname": "Doe", <br>
            "password": "abc123!@#"
             <br>
        }
     </code>

     <h4>/auth/login</h4>
     <p>- sub route reserved for logging in</p>

     <code>
        // POST  <br>
        // data eg
        <br> <br>

        { <br>
            "email": "email@email.com", <br>
            "password": "abc123!@#"
             <br>
        }
     </code>