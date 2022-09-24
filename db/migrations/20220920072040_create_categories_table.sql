-- migrate:up
CREATE TABLE categories(
    id int not null auto_increment primary key,
    category varchar(30) not null UNIQUE
)

-- migrate:down
DROP TABLE categories;
