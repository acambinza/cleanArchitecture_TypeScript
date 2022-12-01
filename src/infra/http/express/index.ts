import express, {Express, Request, Response} from 'express';
import { RouteInMemoryRepository } from '../../db/routeInMemoryRepository';
import { CreateRouteUseCase } from '../../../application/createroute.usecase';
import { ListAllRoutesUseCase } from '../../../application/list-all-routes.useCase';

const app: Express = express();

app.use(express.json())

const PORT = process.env.PORT || 3000
const routeRepo = new RouteInMemoryRepository();

app.post('/routes', async (req: Request, res: Response) => {
      const createUseCase = new CreateRouteUseCase(routeRepo)
      const output = await createUseCase.execute(req.body)
      res.status(201).json(output)
})

app.get('/routes', async (req: Request, res: Response) => {
    const listAll = new ListAllRoutesUseCase(routeRepo)
    const output = await listAll.execute()
    res.json(output)
})
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})