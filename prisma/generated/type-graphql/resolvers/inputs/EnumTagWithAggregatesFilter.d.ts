import { NestedEnumTagFilter } from "../inputs/NestedEnumTagFilter";
import { NestedEnumTagWithAggregatesFilter } from "../inputs/NestedEnumTagWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumTagWithAggregatesFilter {
    equals?: "Deportivo" | "Academico" | "Cultural" | undefined;
    in?: Array<"Deportivo" | "Academico" | "Cultural"> | undefined;
    notIn?: Array<"Deportivo" | "Academico" | "Cultural"> | undefined;
    not?: NestedEnumTagWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTagFilter | undefined;
    _max?: NestedEnumTagFilter | undefined;
}
