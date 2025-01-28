USE banco1022b;
CREATE TABLE IF NOT EXISTS exercicios(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    imagem VARCHAR(300)
);
INSERT INTO exercicios VALUES (1,'Supino reto','Para parte medial do peito','SEM IMAGEM');

CREATE TABLE IF NOT EXISTS usuarios(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    funcao VARCHAR(50),
    email VARCHAR(500),
    foto VARCHAR(500)
);
INSERT INTO usuarios VALUES (1,'Souza','Administrador','luis.ribeiro2@estudante.ifms.edu.br');