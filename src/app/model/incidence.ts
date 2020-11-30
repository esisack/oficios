import { CategoryValue } from "./category-value";
import { WorkUnit } from "./work-unit";

export class Incidence extends WorkUnit {
    type: CategoryValue
    source: CategoryValue
    area: CategoryValue
    description: string
}
