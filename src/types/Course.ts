export default interface Course {
  uuid: string;
  title: string;
  code: string;
  expired_at: Date;
  released_at: Date;
  completion_time: string;
  thumb: object;
  banner: object;
  content: Text;
  accreditation: Text;
  participant_types: Array<string>;
  specialities: Array<string>;
  speakers: Array<string>;
  is_test_published: boolean;
  short_text: Text;
}