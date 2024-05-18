// CONTROLLERS

// -> LOGIN
const formularioLogin = (req, res) => {
  res.render("auth/login", {
  });
};

// -> REGISTER
const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    pagina:'Crear cuenta'
  });
};

export { formularioLogin, formularioRegistro };
