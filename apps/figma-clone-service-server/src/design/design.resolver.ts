import * as graphql from "@nestjs/graphql";
import { DesignResolverBase } from "./base/design.resolver.base";
import { Design } from "./base/Design";
import { DesignService } from "./design.service";

@graphql.Resolver(() => Design)
export class DesignResolver extends DesignResolverBase {
  constructor(protected readonly service: DesignService) {
    super(service);
  }
}
