import {
  CODE_ANALYSIS,
  COMMUNICATION,
  COMMUNICATION_SCORE,
  ROLES,
} from "./enums";

export type RoleData = {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  post: string;
  role: ROLES;
  id: number;
  level: number;
  origin: string;
  duration: number;
  communication: {
    [COMMUNICATION.LANGUAGE_PROFICIENCY]: number;
    [COMMUNICATION.CULTURAL_HARMONY]: number;
    [COMMUNICATION.COLLABORATION]: number;
  };
  communicationScore: {
    [COMMUNICATION_SCORE.LISTENING_ABILITY]: number;
    [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: number;
  };
  codeScore: {
    [CODE_ANALYSIS.CODE_COMMITS]: number;
    [CODE_ANALYSIS.CODE_REVIEWS]: number;
  };
}[];

export const Managers: RoleData = [
  {
    image: "/assets/png/avatar.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    id: 1,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    image: "/assets/png/avatar1.png",
    firstName: "John",
    lastName: "Doe",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    id: 2,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 3,
    image: "/assets/png/avatar2.png",
    firstName: "Marvin",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 4,
    image: "/assets/png/avatar3.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 5,
    image: "/assets/png/avatar4.png",
    firstName: "Andrei",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 6,
    image: "/assets/png/avatar5.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 7,
    image: "/assets/png/avatar6.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Senior Manager",
    role: ROLES.MANAGER,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 8,
    image: "/assets/png/avatar.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 9,
    image: "/assets/png/avatar1.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 10,
    image: "/assets/png/avatar2.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 11,
    image: "/assets/png/avatar3.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 12,
    image: "/assets/png/avatar4.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 13,
    image: "/assets/png/avatar5.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
  {
    id: 14,
    image: "/assets/png/avatar6.png",
    firstName: "Hassan",
    lastName: "Ahmed",
    email: "hassanahmed@abc.com",
    score: 80,
    post: "Developer",
    role: ROLES.EMPLOYEE,
    level: 8,
    origin: "Indian",
    duration: 6,
    communication: {
      [COMMUNICATION.LANGUAGE_PROFICIENCY]: 87,
      [COMMUNICATION.CULTURAL_HARMONY]: 64,
      [COMMUNICATION.COLLABORATION]: 45,
    },
    communicationScore: {
      [COMMUNICATION_SCORE.LISTENING_ABILITY]: 57,
      [COMMUNICATION_SCORE.ISSUE_RESOLUTION]: 57,
    },
    codeScore: {
      [CODE_ANALYSIS.CODE_COMMITS]: 87,
      [CODE_ANALYSIS.CODE_REVIEWS]: 64,
    },
  },
];
