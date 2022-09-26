-- migrate:up
CREATE TABLE reviews(
    id int not null auto_increment primary key,
    text varchar(1000) not null,
    user_id int not null,
    store_id int not null,
    rate decimal(4, 2) not null,
    create_at timestamp not null default current_timestamp,
    CONSTRAINT users_id_fkey foreign key (user_id) references users (id),
    CONSTRAINT stores_id_fkey foreign key (store_id) references stores (id)
)

-- migrate:down
DROP TABLE reviews;
