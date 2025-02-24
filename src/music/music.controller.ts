import { Controller, Get, Query } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
    constructor(private readonly musicService: MusicService) {}

    @Get('scale/major')
    getMajorScale(@Query('note') note: string): {
        name: string;
        notes: { note: string; interval: string }[];
        scale: string;
    } {
        return this.musicService.getMajorScale(note);
    }

    @Get('scale/minor')
    getMinorScale(@Query('note') note: string): {
        name: string;
        notes: { note: string; interval: string }[];
        scale: string;
    } {
        return this.musicService.getMinorScale(note);
    }
}
