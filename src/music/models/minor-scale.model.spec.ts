import { MinorScale } from './minor-scale.model';  // Adjust import according to the file structure

describe('MinorScale', () => {
    let scale: MinorScale;
    const root = 'C';
    beforeEach(() => {
        scale = new MinorScale(root);
    });

    it('should create an instance of MinorScale', () => {
        expect(scale).toBeInstanceOf(MinorScale);
    });

    it('should have the correct scale name', () => {
        expect(scale.name).toBe(`${root} Minor`);
    });

    it('should have the correct notes and intervals', () => {
        const expectedNotes = [
            { note: 'C', interval: 'Tônica' },
            { note: 'D', interval: 'Segunda maior' },
            { note: 'D#', interval: 'Terça menor' },
            { note: 'F', interval: 'Quarta justa' },
            { note: 'G', interval: 'Quinta justa' },
            { note: 'G#', interval: 'Sexta menor' },
            { note: 'A#', interval: 'Sétima menor' },
        ];

        expect(scale.notes).toEqual(expectedNotes);
    });

    it('should generate the correct scale string', () => {
        const expectedScale = 'C, D, D#, F, G, G#, A#';
        expect(scale.scale).toBe(expectedScale);
    });

    it('should return the correct scale data', () => {
        const expectedData = {
            name: `${root} Minor`,
            notes: [
                { note: 'C', interval: 'Tônica' },
                { note: 'D', interval: 'Segunda maior' },
                { note: 'D#', interval: 'Terça menor' },
                { note: 'F', interval: 'Quarta justa' },
                { note: 'G', interval: 'Quinta justa' },
                { note: 'G#', interval: 'Sexta menor' },
                { note: 'A#', interval: 'Sétima menor' },
            ],
            scale: 'C, D, D#, F, G, G#, A#'
        };

        expect(scale.getScale()).toEqual(expectedData);
    });
});
