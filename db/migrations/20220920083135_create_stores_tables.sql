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
    price_range varchar(50) null,
    admin_user_id int null,
    category_id int not null,
    view_count decimal(10, 0) null,
    create_at timestamp not null default current_timestamp,
    CONSTRAINT admin_user_id_fkey FOREIGN KEY (admin_user_id) REFERENCES users (id),
    CONSTRAINT category_id_fkey FOREIGN KEY (category_id) REFERENCES categories (id)
)

-- migrate:down
DROP TABLE stores;