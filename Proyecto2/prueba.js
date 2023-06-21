let edad = 0
edad = document.getElementById("age").value
localStorage.setItem("edad_usuario", edad)

localStorage.getItem("edad_usuario")

localStorage.clear()
localStorage.removeItem("edad_usuario")
