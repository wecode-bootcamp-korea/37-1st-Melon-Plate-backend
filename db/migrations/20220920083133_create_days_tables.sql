-- migrate:up
CREATE TABLE days (
    id int not null auto_increment primary key,
    day varchar(20) NOT NULL
)

-- migrate:down
DROP TABLE days;
