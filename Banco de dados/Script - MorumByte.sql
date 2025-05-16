CREATE DATABASE morumbyte;
USE morumbyte;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) UNIQUE,
dtNascimento DATE,
email VARCHAR(50) UNIQUE,
senha CHAR(11)
);

CREATE TABLE tentativas_quiz (
idTentativa INT,
fkUsuario INT,
CONSTRAINT pkUsuarioTentativa PRIMARY KEY (idTentativa, fkUsuario),
CONSTRAINT fkUsuarioTentativa FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
acertos INT,
erros INT
);