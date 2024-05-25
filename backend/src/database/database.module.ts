import { ConfigService } from '../config/config.service';

const config = ConfigService.getConfig();

// @Module({
//     imports: [
//         TypeOrmModule.forRoot({
//             type: 'mongodb',
//             url: config.DATABASE_URL,
//             entities: [],
//             synchronize: true,
//         }),
//     ],
// })
export class DatabaseModule {}
