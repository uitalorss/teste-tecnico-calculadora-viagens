import { container } from "tsyringe";
import { IRideRepository } from "../../modules/rides/domain/repositories/IRideRepository";
import { RideRepository } from "../../modules/rides/infra/repositories/RideRepository";



container.registerSingleton<IRideRepository>("RideRepository", RideRepository)