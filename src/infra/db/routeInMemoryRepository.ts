
import { Route } from '../../domain/route.entity';
import { RouteRepositoryInterface } from '../../domain/routerepository';

export class RouteInMemoryRepository implements RouteRepositoryInterface {
    items: Route[] = [];
    async insert(route: Route): Promise<void> {
        this.items.push(route);
    }
    async findAll(): Promise<Route[]> {
        return this.items;
    }
}