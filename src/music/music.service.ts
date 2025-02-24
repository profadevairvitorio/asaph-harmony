import { Injectable } from '@nestjs/common';
import {MajorScale} from "./models/major-scale.model";
import {ScaleInterface} from "./interfaces/scale.interface";

@Injectable()
export class MusicService {
    getMajorScale(root: string): ScaleInterface {
        const scale = new MajorScale(root);
        return scale.getScale();
    }
}