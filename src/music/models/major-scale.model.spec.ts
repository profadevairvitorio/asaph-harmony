import {MajorScale} from "./major-scale.model";

describe('MajorScale class', () => {
    it('should create an instance of MajorScale', () => {
        const cMajor = new MajorScale('C');
        expect(cMajor).toBeInstanceOf(MajorScale);
    });

    it('should set the correct name for the scale', () => {
        const cMajor = new MajorScale('C');
        expect(cMajor.name).toBe('C Major');
    });

    it('should have the correct notes and intervals for C Major', () => {
        const cMajor = new MajorScale('C');

        const expectedNotes = [
            { note: 'C', interval: 'Tônica' },
            { note: 'D', interval: 'Segunda maior' },
            { note: 'E', interval: 'Terça maior' },
            { note: 'F', interval: 'Quarta justa' },
            { note: 'G', interval: 'Quinta justa' },
            { note: 'A', interval: 'Sexta maior' },
            { note: 'B', interval: 'Sétima maior' }
        ];

        expect(cMajor.notes).toEqual(expectedNotes);
    });

    it('should correctly format the scale as a string', () => {
        const cMajor = new MajorScale('C');
        const expectedScale = 'C, D, E, F, G, A, B';
        expect(cMajor.scale).toBe(expectedScale);
    });

    it('should correctly calculate notes and intervals for D Major', () => {
        const dMajor = new MajorScale('D');

        const expectedNotes = [
            { note: 'D', interval: 'Tônica' },
            { note: 'E', interval: 'Segunda maior' },
            { note: 'F#', interval: 'Terça maior' },
            { note: 'G', interval: 'Quarta justa' },
            { note: 'A', interval: 'Quinta justa' },
            { note: 'B', interval: 'Sexta maior' },
            { note: 'C#', interval: 'Sétima maior' }
        ];

        const expectedScale = 'D, E, F#, G, A, B, C#';

        expect(dMajor.notes).toEqual(expectedNotes);
        expect(dMajor.scale).toBe(expectedScale);
    });

    it('should create scales for all notes correctly', () => {
        const allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        allNotes.forEach(note => {
            const scale = new MajorScale(note);
            expect(scale.name).toBe(`${note} Major`);
            expect(scale.notes.length).toBe(7);
            expect(scale.scale).toBeTruthy();
        });
    });

    it('should associate the correct intervals with the notes', () => {
        const cMajor = new MajorScale('C');

        const expectedIntervals = [
            'Tônica',
            'Segunda maior',
            'Terça maior',
            'Quarta justa',
            'Quinta justa',
            'Sexta maior',
            'Sétima maior'
        ];

        cMajor.notes.forEach((note, index) => {
            expect(note.interval).toBe(expectedIntervals[index]);
        });
    });
});
