import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ListService } from "@entities/lists/list.service";
import {CreateListDto} from "@entities/lists/dto/create.list.dto";

@ApiTags('Списки')
@Controller('lists')
export class ListController {

  constructor(private readonly listService: ListService) {

  }
  @ApiOperation({summary:'Получение всех листов по пользователю'})
  @ApiResponse({status:200,type:[CreateListDto]})
  @Get('/:id')
  async getAllListsByUser(@Param('id') id:number) {
    return this.listService.getAllColumnsByUserId(id);

  }


}
