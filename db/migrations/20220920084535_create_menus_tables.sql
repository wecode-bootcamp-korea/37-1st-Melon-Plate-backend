-- migrate:up
CREATE TABLE menus (
    id int not null auto_increment primary key,
    name varchar(50) NOT NULL,
    price DECIMAL(7, 2) NOT NULL
)

-- migrate:down
DROP TABLE menus
