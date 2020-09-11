export interface EventItem {
  person?: string;
  date: any;
  text?: string;
  type: 'birthday' | 'event' | 'reminder';
  daysBefore: number;
  isActive: boolean;
}
