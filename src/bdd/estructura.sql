


CREATE DATABASE parodi_lucas;

USE parodi_lucas;

CREATE TABLE libros (
    id INT AUTO_INCREMENT,
    nombre VARCHAR (30)
    autor VARCHAR (30)
    categoria VARCHAR (30)
    anio-publicacion DATE
    ISBN VARCHAR (13)

    CONSTRAINT PK_id_libro PRIMARY KEY (id)
);

INSERT INTO libros (nombre, autor, categoria, anio_publicacion, ISBN) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 'Novela', '1967-05-30', '9780307474728'),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Clásico', '1605-01-16', '9788491050035'),
('La sombra del viento', 'Carlos Ruiz Zafón', 'Ficción', '2001-04-17', '9788408170398'),
('1984', 'George Orwell', 'Distopía', '1949-06-08', '9780451524935'),
('El Principito', 'Antoine de Saint-Exupéry', 'Infantil', '1943-04-06', '9780156012195'),
('Fahrenheit 451', 'Ray Bradbury', 'Ciencia Ficción', '1953-10-19', '9781451673319'),
('Orgullo y prejuicio', 'Jane Austen', 'Romance', '1813-01-28', '9780141439518'),
('Matar a un ruiseñor', 'Harper Lee', 'Drama', '1960-07-11', '9780061120084'),
('El gran Gatsby', 'F. Scott Fitzgerald', 'Novela', '1925-04-10', '9780743273565'),
('Brave New World', 'Aldous Huxley', 'Ciencia Ficción', '1932-08-01', '9780060850524'),
('El Hobbit', 'J.R.R. Tolkien', 'Fantasía', '1937-09-21', '9780345339683'),
('Los juegos del hambre', 'Suzanne Collins', 'Distopía', '2008-09-14', '9780439023528'),
('Harry Potter', 'J.K. Rowling', 'Fantasía', '1997-06-26', '9780747532743'),
('Cumbres borrascosas', 'Emily Brontë', 'Clásico', '1847-12-01', '9780141439556'),
('El nombre del viento', 'Patrick Rothfuss', 'Fantasía', '2007-03-27', '9780756404741'),
('Dune', 'Frank Herbert', 'Ciencia Ficción', '1965-08-01', '9780441013593'),
('Crónica de una muerte', 'Gabriel García Márquez', 'Novela', '1981-01-01', '9780307387004'),
('Los pilares de la tierra', 'Ken Follett', 'Histórico', '1989-08-01', '9780451166890'),
('La chica del tren', 'Paula Hawkins', 'Thriller', '2015-01-13', '9781594634024'),
('Mujer en la arena', 'Kobo Abe', 'Ficción', '1962-04-01', '9780374530066');
