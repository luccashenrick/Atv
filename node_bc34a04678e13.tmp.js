let idade = 18;

switch (idade) {
  case idade >= 0 && idade <= 12:
    categoria = "Criança";
    break;

  case idade >= 13 && idade <= 17:
    categoria = "Adolescente";
    break;

  case idade >= 18 && idade <= 64:
    categoria = "Adulto";
    break;

  case idade >= 60:
    categoria = "Idoso";
    break;
}

