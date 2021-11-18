import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CoffeesModule } from './coffees/coffees.module'

@Module({
    imports: [
        CoffeesModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '0.0.0.0',
            port: 5432,
            username: 'postgres',
            password: 'pass123',
            database: 'postgres',
            autoLoadEntities: true,
            synchronize: true, // Disable in prod
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
