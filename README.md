# itelect4-project-gt1

## Project Concept

A general student management system built with TypeScript to practice type-safe application design. The system models core entities in a school setting -- users, courses, and submissions -- and demonstrates TypeScript features including interfaces, generics, utility types, and enums.

## Interfaces / Types Defined So Far

## Types & Interfaces Defined So Far

**Interfaces**
- User -- id, name, email, role ("student" | "admin" | "instructor"), isActive
- Course -- code, title, units, semester
- Submission -- id, studentId, courseCode, repoUrl, submittedAt, optional score
- ApiResponse<T> -- generic wrapper (success, data: T, optional message)

**Type Aliases**
- ID -- number | string
- Coordinate -- { x: number; y: number }
- Formatter -- (value: number) => string
- StringOrNumber -- string | number
- Status -- "pending" | "active" | "inactive"
- StudentWithCourse -- intersection of User and course enrollment fields

**Utility Types**
- UserUpdate -- Partial<User>
- UserPreview -- Pick<User, "id" | "name" | "role">
- PublicUser -- Omit<User, "email" | "isActive">
- RoleCount -- Record<"student" | "admin" | "instructor", number>

**Enums**
- SubmissionStatus -- regular enum (Pending, Graded, Late)
- Role -- const enum (Student, Admin, Instructor)

## How to Install and Run

1. Install dependencies
   npm install

2. Run the project directly with ts-node
   npx ts-node src/index.ts

3. (Optional) Type-check without running
   npx tsc --noEmit

## Author

Raph -- BSIT 4th Year, De La Salle Lipa, IT Elective 4