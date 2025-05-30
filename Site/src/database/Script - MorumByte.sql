create database morumbyte;
use morumbyte;

-- Dados do usuário
CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    dtNascimento DATE,
    email VARCHAR(30) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL
);

-- Dados da questão do quiz
CREATE TABLE questoes_quiz (
    idQuestao INT AUTO_INCREMENT PRIMARY KEY,
    numero INT
);

-- Dados da tentativa do usuário no quiz
CREATE TABLE tentativas_quiz (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    fkUsuario INT,
    CONSTRAINT fkUsuarioTentativa FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

-- Dados das respostas do usuário no quiz
CREATE TABLE respostas_quiz (
    fkTentativa INT,
    fkQuestao INT,
    acertos TINYINT,
    PRIMARY KEY (fkTentativa, fkQuestao),
    FOREIGN KEY (fkTentativa) REFERENCES tentativas_quiz(idTentativa),
    FOREIGN KEY (fkQuestao) REFERENCES questoes_quiz(idQuestao)
);

-- INSERTS (EXEMPLOS)

-- Inserindo usuários
INSERT INTO usuario (username, dtNascimento, email, senha) VALUES 
('user1', '2000-01-01', 'user1@email.com', 'senha123'),
('user2', '2001-02-02', 'user2@email.com', 'senha456'),
('user3', '2000-01-01', 'user3@email.com', 'senha123');

-- Inserindo questões
INSERT INTO questoes_quiz (numero) VALUES 
(1), 
(2), 
(3);

-- Inserindo tentativas

-- INÍCIO DO QUIZ
INSERT INTO tentativas_quiz (acertos, fkUsuario) VALUES
(0, 1);  -- user1 acertou 2 questões

INSERT INTO tentativas_quiz (acertos, fkUsuario) VALUES
(2, 1),  -- user1 acertou 2 questões
(1, 2),  -- user2 acertou 1 questão
(1, 3),  -- user3 acertou 1 questões
(2, 2);  -- user2 acertou 2 questão

-- Inserindo respostas
INSERT INTO respostas_quiz (fkTentativa, fkQuestao, acertos) VALUES
(1, 1, 1),  -- tentativa 1, questão 1, acertou
(1, 2, 1),  -- tentativa 1, questão 2, acertou
(1, 3, 0),  -- tentativa 1, questão 3, errou

(2, 1, 0),  -- tentativa 2, questão 1, errou
(2, 2, 0),  -- tentativa 2, questão 2, errou
(2, 3, 1),  -- tentativa 2, questão 3, acertou

(3, 1, 0),  -- tentativa 3, questão 1, errou
(3, 2, 1),  -- tentativa 3, questão 2, acertou
(3, 3, 0),  -- tentativa 3, questão 3, errou

(4, 1, 1),  -- tentativa 4, questão 1, acertou
(4, 2, 0),  -- tentativa 4, questão 2, errou
(4, 3, 1);  -- tentativa 4, questão 3, acertou

	
-- Exibindo todos os dados
select * from usuario;
select * from tentativas_quiz;
select * from questoes_quiz;
select * from respostas_quiz;

-- UPDATE
-- Atualizar Dados
UPDATE usuario SET username = "Reiz",
	dtNascimento = "1000-10-10",
    email = "Reiz@gmail.com",
    senha = "Reiz123"
    WHERE idUsuario = 2;
    
-- Atualizar número de acertos da tentativa do quiz
UPDATE tentativas_quiz SET acertos = 10
WHERE idTentativa = 3 AND fkUsuario = 3;

-- SELECTS
-- Login

 SELECT idUsuario, username, dtNascimento, email, senha FROM usuario WHERE email = 'juan@gmail.com' AND senha = 'juan123';

-- Número de usuários que respondeu o quiz
SELECT COUNT(DISTINCT fkUsuario) AS usuarios_que_responderam
FROM tentativas_quiz;

-- Média de acertos dos usuários no quiz
SELECT ROUND(AVG(acertos),0) AS media_acertos
FROM tentativas_quiz;

-- Taxa média de acertos por questão
SELECT fkQuestao, 
       ROUND(AVG(acertos) * 100, 2) AS taxa_media_acertos_percentual
FROM respostas_quiz
GROUP BY fkQuestao;

-- Desempenho dos usuarios
SELECT t.idTentativa, u.username, SUM(t.acertos) AS total_acertos
FROM usuario u
JOIN tentativas_quiz t ON u.idUsuario = t.fkUsuario
GROUP BY t.idTentativa, u.idUsuario
ORDER BY t.idTentativa;

-- Questão com maior porcentagem de acertos
SELECT fkQuestao, 
       ROUND(SUM(acertos) / COUNT(*) * 100, 2) AS porcentagem_acertos
FROM respostas_quiz
GROUP BY fkQuestao
ORDER BY porcentagem_acertos DESC
LIMIT 1;

-- Questão com maior porcentagem de erros
SELECT fkQuestao, 
       ROUND((1 - AVG(acertos)) * 100, 2) AS porcentagem_erros
FROM respostas_quiz
GROUP BY fkQuestao
ORDER BY porcentagem_erros DESC
LIMIT 1;
