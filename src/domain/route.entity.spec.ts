import { LatLng, Route, RouteProps } from "./route.entity"

describe('Route Teste', () => {
    test('constructor', () => {

        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }

        let route = new Route(routeProps);

        expect(route.props).toStrictEqual({
            ...routeProps,
            points: []
        })

        routeProps = {
            title: 'minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
            points: [
                { lat: 0, lng: 1 }
            ]
        }

        route = new Route(routeProps);
        
        expect(route.id).toBeDefined();
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: [
                { lat: 0, lng: 1 }
            ]
        })
    })

    test('updateTitle method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }

        const route = new Route(routeProps);
        route.updateTitle('title updated')

        expect(route.title).toBe('title updated')
    })

    test('updatePosition method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }

        const route = new Route(routeProps);
        const startPosition: LatLng = { lat: 0, lng: 10 }
        const endPosition: LatLng = { lat: 20, lng: 30 }
        route.updatePosition(startPosition, endPosition)

        expect(route.startPosition).toBe(startPosition)
        expect(route.endPosition).toBe(endPosition)

    })
    test('updatePoints method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }

        const route = new Route(routeProps);
        const points: LatLng[] = [
            { lat: 20, lng: 13 },
        ]

        route.updatePoints(points)

        expect(route.points).toStrictEqual(points)
        expect(route.points).toHaveLength(1)
    })
})