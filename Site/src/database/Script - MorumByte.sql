CREATE DATABASE morumbyte;
USE morumbyte;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    dtNascimento DATE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha CHAR(11) NOT NULL
);

CREATE TABLE perguntas_quiz (
    idPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    enunciado VARCHAR(200) NOT NULL
);

CREATE TABLE alternativas_quiz (
    idAlternativas INT PRIMARY KEY AUTO_INCREMENT ,
    alternativa VARCHAR(100) NOT NULL,
    correta BOOLEAN NOT NULL,
    fkPerguntas INT NOT NULL,
    CONSTRAINT fkPerguntaAlternativa FOREIGN KEY (fkPerguntas) REFERENCES perguntas_quiz(idPerguntas)
);

CREATE TABLE tentativa_quiz (
    idTentativas INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT NOT NULL,
    erros INT NOT NULL,
    fkUsuario INT NOT NULL,
    CONSTRAINT fkUsuarioTentativa FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE respostas_usuario (
    fkTentativas INT NOT NULL,
    fkAlternativas INT NOT NULL,
    fkPerguntas INT NOT NULL,
    data_resposta DATETIME NOT NULL,
    CONSTRAINT pkTentativaPerguntaAlternativas PRIMARY KEY (fkTentativas, fkPerguntas, fkAlternativas),
    CONSTRAINT fkTentativaPerguntaAlternativa
    FOREIGN KEY (fkTentativas) REFERENCES tentativa_quiz(idTentativas),
    FOREIGN KEY (fkAlternativas) REFERENCES alternativas_quiz(idAlternativas),
    FOREIGN KEY (fkPerguntas) REFERENCES perguntas_quiz(idPerguntas)
);