import Education from "./Education";
import Experiences from "./Experiences";
import Wrapper from "./Wrapper";

export default function TabsExpEdu() {
  return (
    <>
      <Wrapper>
        <div className="flex justify-center gap-8 flex-col md:flex-row my-20">
          <Experiences />
          <Education />
        </div>
      </Wrapper>
    </>
  );
}
