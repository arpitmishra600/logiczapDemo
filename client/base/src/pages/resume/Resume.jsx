import ResumeBuilder from "./ResumeBuilder"
import ImageQuoteDisplay from "./ImageQuoteDisplay"

export const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
    <div className="flex w-full max-w-6xl">
      <div className="w-1/2 pr-4">
        <ImageQuoteDisplay />
      </div>
      <div className="w-1/2 pl-4">
        <ResumeBuilder />
      </div>
    </div>
  </div>
  )
}