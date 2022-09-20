-- migrate:up
CREATE TABLE storeInfo (
    id int not null auto_increment primary key,
    store_id INT NOT NULL,
    info_id INT NOT NULL,
    CONSTRAINT storess_fkey FOREIGN KEY (store_id) REFERENCES stores (id),
    CONSTRAINT info_fkey FOREIGN KEY (info_id) REFERENCES categories (id),
    UNIQUE KEY (info_id, store_id)
)

-- migrate:down
DROP TABLE storeInfo;
