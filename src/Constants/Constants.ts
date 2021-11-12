// AUTH CONST
export const required="required";

export const name = {
    MAXLONGNAME: 40,
    MINLONGNAME: 2,
    MSGERRMINAME: "El nombre ingresado es demasiado corto",
    MSGERRMAXNAME: "El nombre ingresado es demasiado largo",
    MSGREQUIRED: "Debe ingresar su nombre",
  };

  export const lastname = {
    MAXLONGNAME: 40,
    MINLONGNAME: 2,
    MSGERRMINAME: "El apellido ingresado es demasiado corto",
    MSGERRMAXNAME: "El apellido ingresado es demasiado largo",
    MSGREQUIRED: "Debe ingresar su apellido",
  };


export const authpassword = {
    MSGREQUIRED: "Debe ingresar su contraseña",
    MSGERR: "La contraseña debe tener más 8 caracteres",
    TYPE: "password",
    MINVALUE: 8,
  }


  export const authemail = {
    REQUIRED:'email es requerido',
    TYPE:"email",
    PATTERN:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PATTERNMSG:'El formato de su correo electronico no corresponde a uno valido'
  }

  export const authphone = {
    TYPE:"text",
    PATTERN: /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
    PATTERNMSG:'El numero de telefono no coincide con un telefono en servicio'
  }
  export const TOKEN = "session-t";