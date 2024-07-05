export interface RootObject {
  id: number;
  user_id: number;
  no_of_questions: number;
  entries: Entry[];
  // created_at?: number;
  // assessment_type?: string;
  // assessment_status?: string;
  // language?: string;
  // next_question?: number;
  // responses?: Responses;
}

export interface Responses {
  id: number;
  user_id: number;
  assessment_id: number;
  responses: Response[];
  assessment_type: string;
  is_last: boolean;
  last_attempted?: number;
  tm_response_bean?: Tmresponsebean;

}

export interface Response {
  id: number;
  time: number;
  answers: Answers2;
}

export interface Answers2 {
  type: string;
  selected: string[];
}

export interface Tmresponsebean {
  test_type_id: number;
  unique_id: number;
  answer_detail: Answerdetail[];
}

export interface Answerdetail {
  question_id: number;
  answer: number;
}

export interface Entry {
  id?: number;
  language?: string;
  age_range?: string;
  age_groups?: string[];
  gender?: string;
  order?: number;
  status?: string;
  attributes?: Attributes;
  assessment_type?: string;
}

export interface Attributes {
  question: Question;
  answers: Answers;
  self_perception?: boolean | string;
  mandatory?: boolean | string;
  validity?: boolean | string;
}

export interface Answers {
  [key: string]: string;
  // media_type: string;
  // display: string;
  // choices: Choice[];
  // min_selections?: number;
  // correct?: Correct;
}

export interface Question {
  area?: string;
  description?: string;
  type?: string;
  TestConfigurationQuestionID?: number;
  TestConfigurationID?: number;
  QuestionID?: number;
  SectionID?: number;
  media?: Media;
  strengths?: Strength[];
  performance?: boolean;
  instructions?: string;
}

export interface Correct {
  strengths: Strength[];
  has_order: boolean | string;
  order: number[];
}

export interface Choice {
  strengths?: Strength[];
  description?: string;
  correct_order?: number;
  secure_url?: string;
  public_id?: string;
  format?: string;
  height?: number;
  width?: number;
  thumbnail?: string;
  media_url?: string;
}


export interface Strength {
  strength: string;
  value: number;
}

export interface Media {
  type: string;
  urls: Url[];
  timer: number;
}

export interface Url {
  href: string;
  public_id?: string;
  secure_url?: string;
  thumbnail?: string;
  format?: string;
  height?: number;
  width?: number;
}
