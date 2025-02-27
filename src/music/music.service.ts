import { Injectable } from '@nestjs/common';
import { MinorScale } from './models/minor-scale.model';
import { ScaleInterface } from './interfaces/scale.interface';
import {MajorScale} from "./models/major-scale.model";

@Injectable()
export class MusicService {
    private normalizeRoot(root: string): string {
        return root.replace('sharp', '#');
    }

    getMajorScale(root: string): ScaleInterface {
        const normalizedRoot = this.normalizeRoot(root);
        const scale = new MajorScale(normalizedRoot);
        return scale.getScale();
    }

    getMinorScale(root: string): ScaleInterface {
        const normalizedRoot = this.normalizeRoot(root);
        const scale = new MinorScale(normalizedRoot);
        return scale.getScale();
    }
}
