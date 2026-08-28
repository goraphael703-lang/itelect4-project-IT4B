// src/data/mockData.ts -- NEW FILE
// Session 5 kept `student` and `course` at the top of App.tsx. Several
// pages need that data now, so it moves into its own file.
import type { User} from "../types/index";
export const student: User = {
  id: 1,
  name: "Juan dela Cruz",
  email: "juan@example.com",
  role: "student",
  isActive: true,
};

// DashboardPage is the only file that still imports from here, and
// DashboardPage does not change at all today.
