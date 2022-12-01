import { RouteProps } from "../../domain/route.entity";
import { Route } from '../../domain/route.entity';
import { RouteInMemoryRepository } from './routeInMemoryRepository';

describe('RouteInMemoryRepository Test', () => {
    it('should insert a new route', async () => {
        const repository = new RouteInMemoryRepository();

        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
            points: [
                { lat: 0, lng: 1 }
            ]
        }

        const route = new Route(routeProps);
        await repository.insert(route)   
        
        expect(repository.items).toHaveLength(1)
        expect(repository.items).toStrictEqual([route]);

    })
})