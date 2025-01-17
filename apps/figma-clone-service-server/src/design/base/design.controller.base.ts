/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DesignService } from "../design.service";
import { DesignCreateInput } from "./DesignCreateInput";
import { Design } from "./Design";
import { DesignFindManyArgs } from "./DesignFindManyArgs";
import { DesignWhereUniqueInput } from "./DesignWhereUniqueInput";
import { DesignUpdateInput } from "./DesignUpdateInput";

export class DesignControllerBase {
  constructor(protected readonly service: DesignService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Design })
  async createDesign(@common.Body() data: DesignCreateInput): Promise<Design> {
    return await this.service.createDesign({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Design] })
  @ApiNestedQuery(DesignFindManyArgs)
  async designs(@common.Req() request: Request): Promise<Design[]> {
    const args = plainToClass(DesignFindManyArgs, request.query);
    return this.service.designs({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Design })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async design(
    @common.Param() params: DesignWhereUniqueInput
  ): Promise<Design | null> {
    const result = await this.service.design({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Design })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDesign(
    @common.Param() params: DesignWhereUniqueInput,
    @common.Body() data: DesignUpdateInput
  ): Promise<Design | null> {
    try {
      return await this.service.updateDesign({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Design })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDesign(
    @common.Param() params: DesignWhereUniqueInput
  ): Promise<Design | null> {
    try {
      return await this.service.deleteDesign({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
