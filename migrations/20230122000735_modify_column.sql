update users set nickname = "nickname" where nickname is null;
ALTER TABLE users ALTER COLUMN nickname SET not null;
