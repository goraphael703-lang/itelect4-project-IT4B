// src/components/SubmissionBadge.tsx
import type { ApiSubmission } from "../types/index";
interface SubmissionBadgeProps {
  submission: ApiSubmission;
  children?: React.ReactNode;
}
const SubmissionBadge: React.FC<SubmissionBadgeProps> = ({
  submission,
  children,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {" "}
      <p className="text-gray-900 dark:text-white">
        Repo: {submission.repoUrl}
      </p>
      <p className="text-gray-900 dark:text-white">
        Score: {submission.score ?? "Not graded yet"}
      </p>
      {children}
    </div>
  );
};
export default SubmissionBadge;

// Why this is not a hack: the data on this page came out of an HTTP
// response, so the prop type should say so. Left as Submission, it
// would be describing a Date that is really a string and a number
// that is really a string -- both wrong, and both completely silent.