-- migrate:up
CREATE TABLE categories(
    id int not null auto_increment primary key,
    info varchar(50) not null
)

-- migrate:down
DROP TABLE categories;
