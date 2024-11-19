import { applyDecorators, UseGuards } from "@nestjs/common"
import { Roles } from "./roles.decorator"
import { AuthGuard } from "../guards/auth.guard"
import { RolesGuard } from "../guards/roles.guard"
import { ROLES } from "../constants/roles.constats"
export const AuthUser = (...roles: ROLES [])=>{
    roles.push(ROLES.ADMIN);
    return applyDecorators (

    Roles(roles),
    UseGuards(AuthGuard, RolesGuard)

    )
}