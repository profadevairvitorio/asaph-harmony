import { Test, TestingModule } from '@nestjs/testing';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('MusicController', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MusicController],
            providers: [MusicService],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should be defined', () => {
        expect(app).toBeDefined();
    });

    it('should return the correct major scale for C', async () => {
        const response = await request(app.getHttpServer()).get('/music/scale/major?note=C');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            name: 'C Major',
            notes: [
                { note: 'C', interval: 'Tônica' },
                { note: 'D', interval: 'Segunda maior' },
                { note: 'E', interval: 'Terça maior' },
                { note: 'F', interval: 'Quarta justa' },
                { note: 'G', interval: 'Quinta justa' },
                { note: 'A', interval: 'Sexta maior' },
                { note: 'B', interval: 'Sétima maior' },
            ],
            scale: 'C, D, E, F, G, A, B',
        });
    });

    it('should return the correct major scale for G', async () => {
        const response = await request(app.getHttpServer()).get('/music/scale/major?note=G');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            name: 'G Major',
            notes: [
                { note: 'G', interval: 'Tônica' },
                { note: 'A', interval: 'Segunda maior' },
                { note: 'B', interval: 'Terça maior' },
                { note: 'C', interval: 'Quarta justa' },
                { note: 'D', interval: 'Quinta justa' },
                { note: 'E', interval: 'Sexta maior' },
                { note: 'F#', interval: 'Sétima maior' },
            ],
            scale: 'G, A, B, C, D, E, F#',
        });
    });
});
