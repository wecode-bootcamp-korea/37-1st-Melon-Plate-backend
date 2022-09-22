-- migrate:up
CREATE TABLE stores(
    id int not null auto_increment primary key,
    name varchar(100) not null unique key,
    image varchar(400) not null,
    description varchar(500) not null,
    address varchar(200) not null,
    tel varchar(50) not null,
    open_time time null,
    closed_time time null,
    closed_day_id int null,
    price_range varchar(50) null,
    create_at timestamp not null default current_timestamp,
    CONSTRAINT closed_day_id_fkey FOREIGN KEY (closed_day_id) REFERENCES days (id)
)

-- migrate:down
DROP TABLE stores;