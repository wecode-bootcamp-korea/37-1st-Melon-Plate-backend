-- migrate:up
CREATE TABLE likes (
    id int not null auto_increment primary key,
    user_id INT NOT NULL,
    store_id INT NOT NULL,
    CONSTRAINT user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT store_id_fkey FOREIGN KEY (store_id) REFERENCES stores (id),
    UNIQUE KEY (user_id, store_id)
)

-- migrate:down
DROP TABLE likes;
