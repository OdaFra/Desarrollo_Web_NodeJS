// CONTROLLERS

// -> LOGIN
const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Inicio de sesión",
  });
};

// -> REGISTER
const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    pagina: "Crear cuenta",
  });
};

// -> Forgot muy pass
const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", {
    pagina: "Recupera tu acceso a Bienes raices",
  });
};

export { formularioLogin, formularioRegistro, formularioOlvidePassword };
