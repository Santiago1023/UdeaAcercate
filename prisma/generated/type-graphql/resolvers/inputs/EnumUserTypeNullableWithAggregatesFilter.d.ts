import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
import { NestedEnumUserTypeNullableWithAggregatesFilter } from "../inputs/NestedEnumUserTypeNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumUserTypeNullableWithAggregatesFilter {
    equals?: "Estudiante" | "Profesor" | "Administrativo" | "Egresado" | undefined;
    in?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado"> | undefined;
    notIn?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado"> | undefined;
    not?: NestedEnumUserTypeNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumUserTypeNullableFilter | undefined;
    _max?: NestedEnumUserTypeNullableFilter | undefined;
}
