import { RouteInMemoryRepository } from '../infra/db/routeInMemoryRepository';
import { CreateRouteUseCase } from './createroute.usecase';

describe('CreateRouteUseCase', () => {
    it('should create new route', async () => {

        const repository = new RouteInMemoryRepository();
        const createUseCase = new CreateRouteUseCase(repository);

        const output = await createUseCase.execute({
            title: 'minha rota',
            startPosition: { lat: 1, lng: 3 },
            endPosition: { lat: 4, lng: 5 },
        })

        expect(repository.items).toHaveLength(1)
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'minha rota',
            startPosition: { lat: 1, lng: 3 },
            endPosition: { lat: 4, lng: 5 },
            points: []
        })

    })
})