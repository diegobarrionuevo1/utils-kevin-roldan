import argon2  from "argon2";

async function verifyPassword(userInputPassword, storedHash) {
  try {
    if (await argon2.verify(storedHash, userInputPassword)) {
      // La contraseña coincide
      console.log("La contraseña coincide");
      return true;
    } else {
      // La contraseña no coincide
      console.log("La contraseña no coincide");
      return false;
    }
  } catch (err) {
    // Manejar error
    console.error(err);
    return false;
  }
}

verifyPassword("12334djkf", "$argon2id$v=19$m=65536,t=3,p=4$VoJ+97cXxvKHm4vfyZqjvA$e+XKzLjrr3LdYXA0XXwCowA1wZ+OzYTy0bNcKfE4m20");