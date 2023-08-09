import { Body, Controller, Post, HttpStatus, Get, Param } from '@nestjs/common';
import { PartnerService } from './partner.service';
import {
  GetPartnerDto,
  GetAllPartnerDto,
  GetAllRolesDto,
} from './dto/get-partner.dto';
import { GetPartnerCmd, GetPartnerRoleCmd } from './cmd/get-partner.cmd';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('partner')
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post('auth/login')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetPartnerDto,
  })
  @ApiResponse({
    description: 'Error on request.',
    status: HttpStatus.BAD_REQUEST,
  })
  public async loginPartner(
    @Body() partner: GetPartnerCmd,
  ): Promise<GetPartnerDto> {
    const cust = await this.partnerService.loginPartner(partner);
    return new GetPartnerDto(cust);
  }

  @Post('get')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetPartnerDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async findPartner(
    @Body() partner: GetPartnerCmd,
  ): Promise<GetPartnerDto> {
    const cust = await this.partnerService.findPartner(partner);
    return new GetPartnerDto(cust);
  }

  @Post('get/role/:id')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getPartnerRole(
    @Param('id') roles_id: number,
  ): Promise<GetAllRolesDto> {
    const roles = new GetAllRolesDto();
    roles.result = await this.partnerService.getPartnerRole(roles_id);
    return roles;
  }

  @Get('get/all')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetAllPartnerDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getPartner(): Promise<GetAllPartnerDto> {
    const getAllPartnerDto = new GetAllPartnerDto();
    getAllPartnerDto.result = await this.partnerService.getAllPartners();
    return getAllPartnerDto;
  }
}
