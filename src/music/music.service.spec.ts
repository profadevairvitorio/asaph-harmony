import { Test, TestingModule } from '@nestjs/testing';
import { MusicService } from './music.service';
import { ScaleInterface } from './interfaces/scale.interface';

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
        const result: ScaleInterface = service.getMajorScale('C');
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
        const result: ScaleInterface = service.getMajorScale('G');
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

    it('should return the correct minor scale for A', () => {
        const result: ScaleInterface = service.getMinorScale('A');
        expect(result).toEqual({
            name: 'A Minor',
            notes: [
                { note: 'A', interval: 'Tônica' },
                { note: 'B', interval: 'Segunda maior' },
                { note: 'C', interval: 'Terça menor' },
                { note: 'D', interval: 'Quarta justa' },
                { note: 'E', interval: 'Quinta justa' },
                { note: 'F', interval: 'Sexta menor' },
                { note: 'G', interval: 'Sétima menor' },
            ],
            scale: 'A, B, C, D, E, F, G',
        });
    });

    it('should return the correct minor scale for E', () => {
        const result: ScaleInterface = service.getMinorScale('E');
        expect(result).toEqual({
            name: 'E Minor',
            notes: [
                { note: 'E', interval: 'Tônica' },
                { note: 'F#', interval: 'Segunda maior' },
                { note: 'G', interval: 'Terça menor' },
                { note: 'A', interval: 'Quarta justa' },
                { note: 'B', interval: 'Quinta justa' },
                { note: 'C', interval: 'Sexta menor' },
                { note: 'D', interval: 'Sétima menor' },
            ],
            scale: 'E, F#, G, A, B, C, D',
        });
    });
});
