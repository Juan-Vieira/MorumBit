CREATE DATABASE morumbyte;
USE morumbyte;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) UNIQUE,
dtNascimento DATE,
email VARCHAR(50) UNIQUE,
senha CHAR(11)
);

CREATE TABLE perguntas_quiz (
idPerguntas INT PRIMARY KEY,
enunciado VARCHAR(200),
fkUsuario INT,
CONSTRAINT fkUsuarioPergunta FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE alternativas_quiz (
idAlternativas INT PRIMARY KEY,
enunciado VARCHAR(100),
correta BOOLEAN,
fkPerguntas INT,
CONSTRAINT fkPerguntasAlternativas FOREIGN KEY (fkPerguntas) REFERENCES perguntas_quiz (idPerguntas)
);

CREATE TABLE resposta_quiz (
idRespostas INT PRIMARY KEY,
correta BOOLEAN,
fkUsuario INT,
fkPerguntas INT,
fkAlternativas INT, 
CONSTRAINT fkRespostaQuiz 
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
FOREIGN KEY (fkPerguntas) REFERENCES perguntas_quiz (idPerguntas),
FOREIGN KEY (fkAlternativas) REFERENCES alternativas_quiz (idAlternativas)
);

CREATE TABLE resultados_quiz (
idResultados INT PRIMARY KEY,
acertos INT,
erros INT,
fkUsuario INT,
CONSTRAINT fkUsuarioResultado FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);