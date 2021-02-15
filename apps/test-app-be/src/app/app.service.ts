import { Injectable } from '@nestjs/common';
import { LectureModel } from '../../../../libs/shared/src/lib/model/lecture.model';

@Injectable()
export class AppService {
  getData(): LectureModel {
    return {
      course: {
        name: 'Zaokrouhlovani',
        number: 5
      }, screens: [{
      screenType: 'INTRO',
      backgroundColor: '#1a2943',
      screenData: {
        course: {
          name: 'Zaokrouhlovani',
          number: 5
        }
      }}, {
        screenType:'FUN_FACT',
        backgroundColor: '#7feae8',
        screenData: {funFacts: [{
            answer: 510,
            answerSuffix: 'km/h',
            answerType: 'number',
            question: 'Jaka je nejvetsi rychlost auta?',
            backgroundGraphics: {
              animationName: 'car',
              imageSrc: 'asdsa'
            }
          }]}
      }]
    };
  }
}
