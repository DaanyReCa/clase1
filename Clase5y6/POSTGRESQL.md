QUERYS SQL
<hr>
LISTAR TODOS

````
select * from productos;
````

LISTAR POR COLUMNA (en este caso ID, pero puede ser cualquiera)
````
select * from productos where id = 2;
````

LISTAR REGISTROS DEPENDIENDO DE SU CONTENIDO (en este caso estamos listando los productos que contengan en su descripcion la palabra cabello)
```
select * from productos where descripcion like '%cabello%';
```

ACTUALIZAR REGISTRO
````update productos
set descripcion = 'nueva descripcion en la segunda'
where id = 2;
````

ELIMINAR REGISTRO
````DELETE FROM productos
WHERE id = 2;
````

INSERTAR REGISTROS
```
INSERT INTO productos
(nombre, descripcion, precio, inventario)

VALUES
    ('shampoo', 'anti caspa', 35.500, 300),
    ('tonico', 'acelera el crecimiento', 40.100, 200),
    ('repolarizador', 'aporta suavidad y brillo', 35.900, 150);