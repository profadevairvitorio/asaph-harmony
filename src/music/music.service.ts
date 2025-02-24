import { Injectable } from '@nestjs/common';
import {MajorScale} from "./models/major-scale.model";
import {MajorScaleInterface} from "./interfaces/major-scale.interface";

@Injectable()
export class MusicService {
    getMajorScale(root: string): MajorScaleInterface {
        const scale = new MajorScale(root);
        return scale.getScale();
    }
}