import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DesignService } from "./design.service";
import { DesignControllerBase } from "./base/design.controller.base";

@swagger.ApiTags("designs")
@common.Controller("designs")
export class DesignController extends DesignControllerBase {
  constructor(protected readonly service: DesignService) {
    super(service);
  }
}
