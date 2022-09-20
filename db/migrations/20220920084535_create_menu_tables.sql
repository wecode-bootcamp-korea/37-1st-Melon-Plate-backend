-- migrate:up
CREATE TABLE menu (
    id int not null auto_increment primary key,
    name varchar(50) NOT NULL,
    priceß decimal NOT NULL
)

-- migrate:down
DROP TABLE menu
