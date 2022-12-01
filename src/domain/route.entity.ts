import crypto from 'crypto'

export type LatLng = { lat: number, lng: number }

export type RouteProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
}

export class Route {
    public readonly id: string;
    public props: Required<RouteProps>;

    constructor(
        props: RouteProps, id?: string
    ) {
        this.id = id || crypto.randomUUID();
        this.props = {
            ...props,
            points: props.points || [],
        }
    }

    updateTitle(title: string){
        this.title = title
        // change for uppercase
        // validation
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition
        this.endPosition = endPosition
    }

    updatePoints(points: LatLng[]) {
        this.points = points
    }

    get points() {
        return this.props.points;
    }
    private set points(points: LatLng[]){
        this.props.points = points;
    }

    get endPosition() {
        return this.props.endPosition;
    }
    private set endPosition(endPosition: LatLng){
        this.props.endPosition = endPosition;
    }
    
    get startPosition() {
        return this.props.startPosition;
    }
    private set startPosition(startPosition: LatLng){
        this.props.startPosition = startPosition;
    }

    get title() {
        return this.props.title
    }
    private set title(value: string){
        this.props.title = value;
    }

    toJSON() {
        return {
            ...this.props,
            id: this.id
        }; 
    }
}