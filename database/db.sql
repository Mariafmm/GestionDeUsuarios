CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  edad INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email, edad)
VALUES
  ('Mariana López', 'mariana@example.com', 25),
  ('Carlos Pérez', 'carlos@example.com', 30),
  ('Luisa García', 'luisa@example.com', 22);

SELECT * FROM usuarios