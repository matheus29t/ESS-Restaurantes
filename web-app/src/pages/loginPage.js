import axios from 'axios';

function LoginPage(){
  return(
  <form onSubmit={(e) => login(e)}>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button onClick="location.href='/dash';" type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}

function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value,
  }
  axios.post('http://localhost:8000/login', request)
  .then(resp => {
    if (resp.data.message=="Successful login!"){
      window.location.href='/dash';
    }
    else{
      alert(resp.data.message);
    }
  })
  .catch (err => {
    console.log(err);
  })

}

export default LoginPage;