import { create } from "zustand";

interface UserProfile {
  profile_picture: string;
}

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  organization: string;
  role: string;
  date_joined: string;
  last_login: string | null;
  profile: UserProfile;
}
interface Feedback {
  weekly_report: string;
  insights: string;
  action_items: string;
}
export interface UserData {
  id: string;
  user: User;
  feedback: Feedback;
  created: string;
  updated: string;
  is_active: boolean;
  language_proficiency: number;
  speak_to_listen_ratio: number;
  neutral_ratio: number;
  negative_ratio: number;
  positive_ratio: number;
  engagement_in_conversation: number;
  listening: number;
  honesty: number;
  clarification: number;
  issue_resolution: number;
  integration: number;
  level: number;
}

interface UserStore {
  users: UserData | null;
  others: UserData | null;
  setOthers: (others: UserData) => void;
  setUsers: (users: UserData) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: null,
  others: null,
  setOthers: (others: UserData) => set(() => ({ others })),
  setUsers: (users: UserData) => set(() => ({ users })),
}));