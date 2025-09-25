import Education from "./Education";
import Experiences from "./Experiences";
import Wrapper from "./Wrapper";

export default function TabsExpEdu() {
  return (
    <>
      <Wrapper>
        <div className="relative flex justify-center gap-16 flex-col md:flex-row my-40 px-4 md:px-0">
          <div className="bg-paper-grid" />
          <Education />
          <Experiences />
        </div>
      </Wrapper>
    </>
  );
}
