import { Note } from './note.model';

describe('Note class', () => {
    it('should have a static NOTES array with the correct values', () => {
        expect(Array.isArray(Note.NOTES)).toBe(true);

        expect(Note.NOTES.length).toBe(12);

        const expectedNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        expect(Note.NOTES).toEqual(expectedNotes);
    });
});
