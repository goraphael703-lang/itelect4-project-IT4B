// src/App.tsx
// ===== LOADING MOCK DATA WITH useEffect ====
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import CourseCard from "./components/CourseCard";
import SubmissionBadge from "./components/SubmissionBadge";
import type { User, Course, Submission } from "./types/index";
import useToggle from "./hooks/useToggle";
import usePrevious from "./hooks/usePrevious";

// ===== TYPED DOM REFERENCE WITH useRef ====
import { useRef } from "react";

const student: User = {
  id: 1,
  name: "Raphael Lorenzo B. Go",
  email: "raph@example.com",
  role: "student",
  isActive: true,
};
const course: Course[] = [
  {
    code: "ITELECT4",
    title: "IT Elective 4",
    units: 3,
    semester: "1st Semester 2026-2027",
  },

  {
    code: "THESELF",
    title: "Understanding the Self",
    units: 3,
    semester: "1st Semester 2026-2027",
  },
  {
    code: "ETIKOS",
    title: "Ethics",
    units: 3,
    semester: "1st Semester 2026-2027",
  },
];
const submission: Submission = {
  id: 1,
  studentId: 1,
  courseCode: "ITELECT4",
  repoUrl: "github.com/juandc/itelect4-project",
  submittedAt: new Date(),
  score: 95,
};

// src/App.tsx (final -- state and effects, continued)
// ===== TYPED STATE WITH useState<T> =====
function App() {
  // useState<T> -- T is the type of the state value
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // Array state -- starts empty, filled after "loading"
  const [courses, setCourses] = useState<Course[]>([]);
  // Boolean state -- tracks whether data has finished loading
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Inside function App(), with your other code:
  const [searchTerm, setSearchTerm] = useState<string>("");
  // useRef<T>(null) -- T is the DOM element type
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [showDetails, toggleDetails] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false); /* new */
  const previousSearch = usePrevious(searchTerm);
  const [isError, setIsError] = useState<boolean>(false);

  // Focus the input programmatically (e.g. after loading finishes)
  const focusSearch = (): void => {
    searchInputRef.current?.focus();
  };

  // src/App.tsx (final -- render)
  // React.ChangeEvent<HTMLInputElement> types e.target as an <input>
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };
  // Derived value -- recomputed every render, not stored in state
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // ===== LOADING MOCK DATA WITH useEffect =====
  // useEffect(fn, deps) -- fn runs after render;
  // an empty deps array [] means "run once, on mount"
  useEffect(() => {
    setTimeout(() => {
      // Reusing GT1's course mock data as the “fetched” result
      setCourses(course);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="animate-pulse p-6 text-gray-500">Loading courses...</div>
    );
  }
  if (isError) {
    // <-- NEW block
    return (
      <div className="m-6 rounded-lg bg-red-50 p-4 text-red-700">
        Could not load courses. Please try again.
      </div>
    );
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 p-6 dark:bg-gray-900">
        <button
          onClick={toggleDarkMode}
          className="rounded bg-gray-800 px-3 py-1.5 text-sm text-white 
          dark:bg-gray-200 dark:text-gray-900"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={() => setIsError(true)}
          className="ml-2 rounded bg-red-100 px-2 py-1 text-xs text-red-700"
        >
          Simulate Error
        </button>
      <div className="mt-4">
        <input
          ref={searchInputRef}
          value={searchTerm}
          type="text"
          placeholder="Search courses..."
          onChange={handleSearchChange}
          className="text-gray-900 dark:text-white"
        />
        {previousSearch !== undefined && previousSearch !== searchTerm && (
          <p className="text-gray-900 dark:text-white">
            Previous search: "{previousSearch}"
          </p>
        )}
        </div>
        {selectedUser && (
          <p className="text-gray-900 dark:text-white">
            Selected: {selectedUser.name}
          </p>
        )}
        <button
          onClick={toggleDetails}
          className="text-gray-900 dark:text-white"
        >
          {showDetails ? "Hide" : "Show"} Details
        </button>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UserCard user={student} onSelect={(u) => setSelectedUser(u)} />
          {filteredCourses.map((c) => (
            <CourseCard key={c.code} course={c} />
          ))}
        </div>

        <SubmissionBadge submission={submission}>
          <p className="text-gray-900 dark:text-white">On time!</p>
        </SubmissionBadge>
      </div>
    </div>
  );
}

export default App;