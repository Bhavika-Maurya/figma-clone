import { Module } from "@nestjs/common";
import { DesignModuleBase } from "./base/design.module.base";
import { DesignService } from "./design.service";
import { DesignController } from "./design.controller";
import { DesignResolver } from "./design.resolver";

@Module({
  imports: [DesignModuleBase],
  controllers: [DesignController],
  providers: [DesignService, DesignResolver],
  exports: [DesignService],
})
export class DesignModule {}
