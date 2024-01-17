select * from prefeitos;

select * from cidades;

SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;
    
SELECT * FROM cidades c left JOIN prefeitos p ON c.id = p.cidade_id;

SELECT * FROM cidades c right JOIN prefeitos p ON c.id = p.cidade_id;

SELECT * FROM cidades c left JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidades c right JOIN prefeitos p ON c.id = p.cidade_id;