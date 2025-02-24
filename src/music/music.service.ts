import { Injectable } from '@nestjs/common';
import { MinorScale } from './models/minor-scale.model';
import { ScaleInterface } from './interfaces/scale.interface';
import {MajorScale} from "./models/major-scale.model";

@Injectable()
export class MusicService {
    getMajorScale(root: string): ScaleInterface {
        const scale = new MajorScale(root);
        return scale.getScale();
    }

    getMinorScale(root: string): ScaleInterface {
        const scale = new MinorScale(root);
        return scale.getScale();
    }
}
