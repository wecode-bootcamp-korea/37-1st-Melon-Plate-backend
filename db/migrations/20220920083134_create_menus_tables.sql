-- migrate:up
CREATE TABLE menus (
    id int not null auto_increment primary key,
    name varchar(50) NOT NULL,
    store_id int NOT NULL,
    price DECIMAL(10,0) NOT NULL
)

-- migrate:down
DROP TABLE menus
