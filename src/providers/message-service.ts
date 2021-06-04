import { Subject } from 'rxjs';
import { SurvivalItem } from '../types';

const subject = new Subject();

export const MessageService = {
  sendMessage: (msg: { item: SurvivalItem; push: boolean }) => {
    subject.next(msg);
  },
  clearMessages: () => subject.next(null),
  getMessage: () => subject.asObservable()
};
