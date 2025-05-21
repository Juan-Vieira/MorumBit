create database morumbyte;
use morumbyte;

-- Tabela com os dados do usuário
CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    dtNascimento DATE,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(11) NOT NULL
);

-- Tabela com o número da questão do quiz
CREATE TABLE questoes_quiz (
    idQuestao INT AUTO_INCREMENT PRIMARY KEY,
    numero INT
);

-- Tabela com os dados referentes a tentativa do usuário
CREATE TABLE tentativas_quiz (
    idTentativa INT AUTO_INCREMENT PRIMARY KEY,
    fkUsuario INT NOT NULL,
    acertos INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

-- Tabela com a verificação de acerto ou não (TRUE ou FALSE) de cada questão na determinada tentativa
CREATE TABLE respostas_tentativa (
    idResposta INT AUTO_INCREMENT PRIMARY KEY,
    fkTentativa INT NOT NULL,
    fkQuestao INT NOT NULL,
    acertou BOOLEAN NOT NULL,
    FOREIGN KEY (fkTentativa) REFERENCES tentativas_quiz(idTentativa),
    FOREIGN KEY (fkQuestao) REFERENCES questoes(idQuestao)
);

-- Exemplos de insert
INSERT INTO usuario (username, dtNascimento, email, senha) VALUES 
	('joao silva', '1999-10-02', 'joao@email.com', 'ASHSEGURO01'),
    ('juan vieira', '2000-05-10', 'juan@email.com', '$Hsfsfsfs02'),
    ('ayane pereira', '2025-08-15', 'ayane@email.com', 'dcsdvs03'),
    ('pedro alves', '1800-01-01', 'pedro@email.com', 'URO04');
    
-- Definindo o número das questões
INSERT INTO questoes (numero) VALUES 
	(1),
	(2),
	(3),
	(4),
	(5);

-- Definindo a quantidade de acertos do usuário por tentativa
INSERT INTO tentativas_quiz (fkUsuario, acertos) VALUES 
	(1, 4),
    (1, 3),
    (2, 1),
    (2, 5),
    (3, 3),
    (4, 4);


-- Respostas do usuário em cada questão (1 até 5), referente a Tentativa 1 (ID = 1)
INSERT INTO respostas_tentativa (fkTentativa, fkQuestao, acertou) VALUES 
	(1, 1, TRUE),
    (1, 2, FALSE),
    (1, 3, TRUE),
    (1, 4, TRUE),
    (1, 5, TRUE);

-- Respostas do usuário em cada questão (1 até 5), referente a Tentativa 2 (ID = 2)
INSERT INTO respostas_tentativa (fkTentativa, fkQuestao, acertou) VALUES 
	(2, 1, TRUE),
    (2, 2, FALSE),
    (2, 3, TRUE),
    (2, 4, FALSE),
    (2, 5, TRUE);
    
-- Respostas do usuário em cada questão (1 até 5), referente a Tentativa 3 (ID = 3)
INSERT INTO respostas_tentativa (fkTentativa, fkQuestao, acertou) VALUES 
	(3, 1, FALSE),
    (3, 2, FALSE),
    (3, 3, FALSE),
    (3, 4, FALSE),
    (3, 5, TRUE);
    
-- Respostas do usuário em cada questão (1 até 5), referente a Tentativa 4 (ID = 4)
INSERT INTO respostas_tentativa (fkTentativa, fkQuestao, acertou) VALUES 
	(4, 1, TRUE),
    (4, 2, TRUE),
    (4, 3, TRUE),
    (4, 4, TRUE),
    (4, 5, TRUE);
    
-- Respostas do usuário em cada questão (1 até 5), referente a Tentativa 5 (ID = 5)
INSERT INTO respostas_tentativa (fkTentativa, fkQuestao, acertou) VALUES 
	(5, 1, FALSE),
    (5, 2, FALSE),
    (5, 3, TRUE),
    (5, 4, TRUE),
    (5, 5, TRUE);
    
-- Respostas do usuário em cada questão (1 até 5), referente a Tentativa 6 (ID = 6)
INSERT INTO respostas_tentativa (fkTentativa, fkQuestao, acertou) VALUES 
	(6, 1, FALSE),
    (6, 2, TRUE),
    (6, 3, TRUE),
    (6, 4, TRUE),
    (6, 5, TRUE);
    
-- Exibindo todos os dados
select * from usuario;
select * from tentativas_quiz;
select * from questoes;
select * from respostas_tentativa;

-- UPDATE
-- Atualizar Dados
UPDATE usuario SET username = "Reiz",
	dtNascimento = "1000-10-10",
    email = "Reiz@gmail.com",
    senha = "Reiz123"
    WHERE idUsuario = 2;

-- SELECTS

-- Número de usuários que respondeu o quiz
SELECT count(distinct fkUsuario) from tentativas_quiz;

-- Média de acertos dos usuários no quiz
select avg(acertos) from tentativas_quiz;

-- Taxa média de acertos por questão
SELECT 
	q.numero,
    ROUND(SUM(r.acertou) * 100.0 / COUNT(r.idResposta), 2)
FROM questoes q
LEFT JOIN respostas_tentativa r ON q.idQuestao = r.fkQuestao
GROUP BY q.numero;

-- Desempenho dos ultimos 10 usuarios
SELECT username, acertos FROM usuario JOIN tentativas_quiz ON idUsuario = fkUsuario;

-- Questão com maior porcentagem de acertos
SELECT 
    sub.numero,
    sub.porcentagem_acertos
FROM (
    SELECT 
        q.numero,
        ROUND(SUM(r.acertou) * 100.0 / COUNT(r.idResposta), 2) AS porcentagem_acertos
    FROM questoes q
    LEFT JOIN respostas_tentativa r ON q.idQuestao = r.fkQuestao
    GROUP BY q.idQuestao
) AS sub
ORDER BY sub.porcentagem_acertos DESC
LIMIT 1;


-- Questão com maior porcentagem de erros
SELECT 
    sub.numero,
    sub.porcentagem_acertos
FROM (
    SELECT 
        q.numero,
        ROUND(SUM(r.acertou) * 100.0 / COUNT(r.idResposta), 2) AS porcentagem_acertos
    FROM questoes q
    LEFT JOIN respostas_tentativa r ON q.idQuestao = r.fkQuestao
    GROUP BY q.idQuestao
) AS sub
ORDER BY sub.porcentagem_acertos
LIMIT 1;