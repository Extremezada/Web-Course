UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT nome FROM estados WHERE sigla = 'MA'

UPDATE estados 
set nome = 'Paraná', 
    populacao = 11.32
WHERE sigla = 'PR'

SELECT 
    est.nome, 
    sigla, 
    populacao 
FROM estados est
WHERE sigla = 'PR'
