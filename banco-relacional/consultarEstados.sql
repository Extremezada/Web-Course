SELECT * from estados

SELECT 
    nome as 'Nome Do Estado', 
    sigla as 'Sigla Do Estado' 
from estados
WHERE regiao = 'Sul'

SELECT 
    nome, 
    regiao,
    populacao
from estados 
WHERE populacao >= 10 
ORDER by populacao desc