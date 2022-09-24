-- migrate:up
CREATE TABLE store_menus (
    id int not null auto_increment primary key,
    store_id INT NOT NULL,
    menu_id INT NOT NULL,
    CONSTRAINT storess_fkey FOREIGN KEY (store_id) REFERENCES stores (id),
    CONSTRAINT menu_fkey FOREIGN KEY (menu_id) REFERENCES menus (id),
    UNIQUE KEY (store_id, menu_id)
)

-- migrate:down
DROP TABLE store_menus;
