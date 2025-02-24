import { Test, TestingModule } from '@nestjs/testing';
import { MusicService } from './music.service';
import { MajorScaleInterface } from './interfaces/major-scale.interface';

describe('MusicService', () => {
    let service: MusicService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MusicService],
        }).compile();

        service = module.get<MusicService>(MusicService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return the correct major scale for C', () => {
        const result: MajorScaleInterface = service.getMajorScale('C');
        expect(result).toEqual({
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

    it('should return the correct major scale for G', () => {
        const result: MajorScaleInterface = service.getMajorScale('G');
        expect(result).toEqual({
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
