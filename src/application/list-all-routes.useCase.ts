import { LatLng, Route } from "../domain/route.entity"
import { RouteRepositoryInterface } from "../domain/routerepository"

type CreateRouteOutput = {
    id: string,
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
}[]


export class ListAllRoutesUseCase {

    constructor(private routeRepo: RouteRepositoryInterface){}

    async execute(): Promise<CreateRouteOutput> {
        const routes:Route[] = await  this.routeRepo.findAll()
        return routes.map(r => r.toJSON());
    }
}