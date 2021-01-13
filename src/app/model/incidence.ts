import { CategoryValue } from "./category-value";
import { Image } from './image';
import { WorkUnit } from "./work-unit";

export class Incidence extends WorkUnit {
    type: CategoryValue
    source: CategoryValue
    area: CategoryValue
    description: string
    images: Image[]
}
