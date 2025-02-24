import { Note } from './note.model';
import {ScaleInterface} from "../interfaces/scale.interface";

export class MajorScale extends Note {
    name: string;
    notes: { note: string, interval: string }[];
    scale: string;

    constructor(root: string) {
        super();
        this.name = `${root} Major`;

        const rootIndex = Note.NOTES.indexOf(root);

        this.notes = [
            { note: Note.NOTES[rootIndex], interval: 'Tônica' },
            { note: Note.NOTES[(rootIndex + 2) % 12], interval: 'Segunda maior' },
            { note: Note.NOTES[(rootIndex + 4) % 12], interval: 'Terça maior' },
            { note: Note.NOTES[(rootIndex + 5) % 12], interval: 'Quarta justa' },
            { note: Note.NOTES[(rootIndex + 7) % 12], interval: 'Quinta justa' },
            { note: Note.NOTES[(rootIndex + 9) % 12], interval: 'Sexta maior' },
            { note: Note.NOTES[(rootIndex + 11) % 12], interval: 'Sétima maior' },
        ];

        this.scale = this.notes.map(n => n.note).join(', ');
    }

    getScale(): ScaleInterface {
        return {
            name: this.name,
            notes: this.notes,
            scale: this.scale
        };
    }
}
