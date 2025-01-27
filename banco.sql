USE banco1022b;
CREATE TABLE IF NOT EXISTS exercicios(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    imagem VARCHAR(300)
);
INSERT INTO exercicios VALUES (1,'Supino reto','Para parte medial do peito','SEM IMAGEM');