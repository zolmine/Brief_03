function import_data (){


  var name = document.getElementById("fname").value
  var email = document.getElementById("fmail").value
  var subj = document.getElementById("fsub").value
  var message = document.getElementById("fmessage").value
  document.getElementById("fullname").innerHTML = name
  document.getElementById("email").innerHTML = email
  document.getElementById("sub").innerHTML = subj
  document.getElementById("message").innerHTML = message



    const modalDisp = document.querySelector('#modal') 
    modalDisp.style.display = 'flex'
  document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none'

    


  })
    
}
 
