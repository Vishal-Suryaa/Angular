import { AssessmentConfig } from "./assessments/assessmenets.model";

export const assessmentConfigs: { [key: string]: AssessmentConfig } = {
  THRIVELY: {
    title: 'Thrively',
    logo: '',
    image: '',
    info: '',
    description1: '',
    description2: '',
    apiEndpoint: '/assess/start/:id?assessment_type=THRIVELY&language=en',
    questionTypes: ['radio', 'slider', 'video', 'drag-and-drop', 'audio'],
    buttonState: ['start', 'Next', 'Back', 'Finish'],
    totalQuestions: 60
  },
  MIDAS: {
    title: 'MIDAS',
    logo: 'https://images.thrively.com/v7/https://api.filerob…a5778b50000/midas-circle.png?func=bound&w=80&h=80',
    image: 'https://images.thrively.com/v7/https://api.filerob…-9af7-57cd-9b61-5cbef3a50000/assessment-intro.png',
    info: 'The Multiple Intelligences Developmental Assessment Scales (aka MIDAS) aptitude test takes about 25 minutes to complete. There are 8 areas of activities, skills, and interests covered.',
    description1: `You'll be asked questions in each area and be given multiple answers to choose from. Pick the answer that best matches your experience`,
    description2: `Remember, your results will only be as accurate as your answers. It's OK to say that you don't know.`,
    apiEndpoint: '/assess/start_midas/:id',
    questionTypes: ['radio'],
    buttonState: ['start', 'Next', 'Back', 'Finish'],
    totalQuestions: 119
  },
  THOMAS: {
    title: 'Thomas',
    logo: `https://images.thrively.com/v7/https://api.filerobot.com/thrively/v5/get/8bf444e1-1002-5787-a09a-05c5f3150000/thomas_print_logo.png?func=bound&w=80&h=80`,
    image: 'https://images.thrively.com/v7/https://api.filerob…-9af7-57cd-9b61-5cbef3a50000/assessment-intro.png',
    info: 'The Habits of Mind assessment takes about 25 minutes to complete. There are 16 habits explored across social, emotional, physical, and mental aspects of your character.',
    description1: `You'll be asked questions in each area and be given multiple answers to choose from. Pick the answer that best matches your experience`,
    description2: `Remember, your results will only be as accurate as your answers. It's OK to say that you don't know.`,
    apiEndpoint: '/assess/start_thomas/:id',
    questionTypes: ['radio'],
    buttonState: ['start', 'Next', 'Back', 'Finish'],
    totalQuestions: 80
  },
  RIASEC: {
    title: 'RIASEC',
    logo: '	https://images.thrively.com/v7/https://api.filerob…t/cf1d6c2d-e888-5104-a0d7-5fcc5d450000/riasec.jpg',
    image: 'https://images.thrively.com/v7/https://api.filerob…2aa850000/riasec_intro.png?func=bound&w=440&h=160',
    info: 'The Thrively Interest Profiler can help you zero in on your interests and better understand how those might best connect to the world of work.',
    description1: 'Read each question carefully, and consider how you might feel doing each type of work. These responses will help determine your top personality types.',
    description2: 'There are no wrong or right answers! You are simply learning more about how your interests match up with future career pathways',
    apiEndpoint: '/assess/start_riasec/:id',
    questionTypes: ['radio'],
    buttonState: ['start', 'Next', 'Back', 'Finish'],
    totalQuestions: 60
  }
};

//dummy data
export const riasec = {
  assessment_type: "RIASEC",
  created_at: 1720170924046,
  entries: [
    {
      id: 2204,
      language: "en",
      age_range: "8-12",
      gender: "Both",
      order: 1,
      status: "Published",
      attributes: {
        question: {
          area: "Realistic",
          description: "Build kitchen cabinets",
          type: "multiple_choice"
        },
        answers: {
          1: "Strongly Dislike",
          2: "Dislike",
          3: "Unsure",
          4: "Like",
          5: "Strongly Like"

        },
        assessment_type: "RIASEC"
      }
    },
    {
      id: 2205,
      language: "en",
      age_range: "8-12",
      gender: "Both",
      order: 2,
      status: "Published",
      attributes: {
        question: {
          area: "Realistic",
          description: "Lay brick or tile",
          type: "multiple_choice"
        },
        answers: {
          1: "Strongly Dislike",
          2: "Dislike",
          3: "Unsure",
          4: "Like",
          5: "Strongly Like"
        }
      },
      assessment_type: "RIASEC"
    },
  ],
  id: 1202185,
  language: "en",
  next_question: 1,
  no_of_questions: 60,
  responses: {
    assessment_id: 1202185,
    assessment_type: "RIASEC",
    id: 1133479,
    is_last: false,
    responses: [
      {
        id: 2204,
        time: 2616548,
        answers: {
          type: "index",
          selected: [
            "4"
          ]
        }
      }
    ],
    user_id: 3229536
  },
  user_id: 3229536
}