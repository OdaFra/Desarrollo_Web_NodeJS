import Usuario from "../models/Usuario.js";

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

const registrar = async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
};

// -> Olvide mi pass
const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", {
    pagina: "Recupera tu acceso a Bienes raices",
  });
};

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registrar,
};
