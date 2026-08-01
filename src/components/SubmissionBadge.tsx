// src/components/SubmissionBadge.tsx
import type { Submission } from "../types/index";
interface SubmissionBadgeProps {
  submission: Submission;
  children?: React.ReactNode;
}
const SubmissionBadge: React.FC<SubmissionBadgeProps> = ({
  submission,
  children,
}) => {
  return (
    <div className="submission-badge">
      <p className="text-gray-900 dark:text-white">Repo: {submission.repoUrl}</p>
      <p className="text-gray-900 dark:text-white">
        Score: {submission.score ?? "Not graded yet"}
      </p>
      {children}
    </div>
  );
};
export default SubmissionBadge;