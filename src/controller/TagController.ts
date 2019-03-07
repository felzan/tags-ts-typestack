import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { TagService } from '../service/TagService'
import Tag from "../model/Tag";

@JsonController("/tags")
export class TagController {

   @Get()
   getAll(): Tag[]{
      return TagService.list();
   }

   @Get("/:id")
   getOne(@Param("id") id: number) {
      return TagService.get(id);
   }

   @Post()
   post(@Body() tag: Tag) {
      return TagService.post(tag);
   }

   @Put("/:id")
   put(@Param("id") id: number, @Body() tag: Tag) {
      return TagService.update(tag, id);
   }

   @Delete("/:id")
   remove(@Param("id") id: number) {
      return TagService.delete(id);
   }

}