import { TagRepository } from '../repository/TagRepository'
import Tag from 'model/Tag';

export class TagService {

    static list(): Tag[] {
        return TagRepository.list()
    }

    static get(tag: Tag): Tag
    static get(id: number): Tag 
    static get(input?: any): Tag {
        let id: number
        if (typeof input == "number") {
            id = input
        } else {
            id = input.id
        }
        return TagRepository.get(id)
    }

    static post(tag: Tag): Boolean {
        return TagRepository.post(tag)
    }

    static delete(tag: Tag): Tag
    static delete(id: number): Tag 
    static delete(input?: any): Tag {
        let id: number
        if (typeof input == "number") {
            id = input
        } else {
            id = input.id
        }
        return TagRepository.delete(id)
    }

    static update(tag: Tag, id: number): Tag[] {
        tag.id = id
        return TagRepository.update(tag)
    }
}