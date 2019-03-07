import { knex as db, knex } from '../config/db'
import Tag from '../model/Tag';

const TABLE_NAME = "tag"

export class TagRepository {

    static list(): any {
        return knex(TABLE_NAME)
        .select();
    }

    static get(id: number): any {
        return knex(TABLE_NAME)
        .select()
        .from(TABLE_NAME)
        .where('id', id);
    }

    static post(tag: Tag): any {
        return knex(TABLE_NAME)
        .insert(tag);
    }

    static delete(id: number): any {
        return knex(TABLE_NAME)
        .where('id', id)
        .delete();
    }

    static update(tag: Tag): any {
        return knex(TABLE_NAME)
        .where('id', tag.id)
        .update(tag);
    }
}