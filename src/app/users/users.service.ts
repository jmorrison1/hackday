import { User } from './users';
import { SqlService } from './../core/sql.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private sql: SqlService) {

    }

    addUser(user: User) {
        return this.sql.query('INSERT INTO tbl_User (id, email, name) VALUES (?,?,?)', [user.id, user.email, user.name]);
    }

    deleteUser(id: string) {
        return this.sql.query('DELETE FROM tbl_User WHERE id = ?', [id]);
    }

    getUsers() {
        return this.sql.query('SELECT * FROM tbl_User')
            .then((data) => {
                let users: User[] = [];

                for(let i = 0; i < data.rows.length; i++)
                    users.push(new User(data.rows.item(i)));

                return users;
            });
    }   
}