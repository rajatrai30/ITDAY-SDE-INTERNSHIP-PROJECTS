import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import logo from "../../Assets/Images/logo1.png";
import { GetStartedNow } from "~/components/sections/GetStartedNow";
import React from "React";
import { JobRoleInfo } from "~/packages/utils/items";

export default component$(() => {
  return (
    <>
      <header className="w-screen fixed top-0 left-0 z-50 py-3 bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between p-4 lg:px-8">
          <img src={logo} alt="Logo" />
        </div>
      </header>
      <div className="p-4 pt-40 space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <JobRoleInfo
          profileTitle="Product Designer"
          location="Bangalore, india /DESIGN / FULL-TIME"
        />

        <hr className="text-black" />

        <div className="sm:px-16 pb-12 flex flex-col justify-between items-start">
          <div className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
            <h1 className="tracking-[.15em] pt-6 text-[1.5rem] lg:text-[1.5rem] fonts-space-grotesk">
              A World-Changing Company
            </h1>
            <p className="py-6 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              At Palantir, we’re passionate about building software that solves
              problems. We partner with the most important institutions in the
              world to transform how they use data and technology. Our software
              has been used to stop terrorist attacks, discover new medicines,
              gain an edge in global financial markets, and more. If these types
              of projects excite you, we'd love for you to join us.
            </p>
          </div>
        </div>

        <div className="sm:px-16 pb-12 flex flex-col justify-between items-start">
          <div className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
            <h1 className="tracking-[.15em] text-[1.5rem] lg:text-[1.5rem] fonts-space-grotesk">
              The Role
            </h1>
            <p className="py-6 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              The Palantir Design Team is responsible for the human experience
              of using our software. Our team is growing rapidly, but we're
              committed to creating a tight-knit team environment that fosters
              trust, integrity, empathy, and growth. We work together in
              realizing a shared product vision, and regularly give feedback and
              critique to each other.
              <br />
              <br />
              Designing at Palantir is a varied experience. On a given day, you
              might be: leading a design sprint for your product team; designing
              a micro-interaction to make a complex analytical task feel simple;
              and/or advocating for UX consistency by creating flexible,
              reusable UI components.
            </p>
          </div>
        </div>

        <div className="sm:px-16 pb-12 flex flex-col justify-between items-start">
          <div className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
            <h1 className="tracking-[.15em] text-[1.5rem] lg:text-[1.5rem] fonts-space-grotesk">
              Core Responsibilities
            </h1>
            <p className="py-6 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              <span className="font-bold">
                • Interaction and visual design.{" "}
              </span>
              As a product designer, you'll be involved at every stage of design
              work. You'll help define early product concepts, flesh out the
              high-level workflow and micro-interactions of a feature, and
              execute on a crisp and effective visual design. You should have
              experience with some of the following mockup and prototyping
              tools: Sketch, Framer, Principle, Figma, Invision. <br />
              <span className="font-bold">• User research.</span> We frequently
              do informal user research, and value people who can be flexible
              with research processes and methodologies to achieve the right
              outcome. You'll often visit customer offices to interview and
              learn from the users we serve. You'll pair qualitative methods
              (e.g. scripted usability tests and contextual inquiry) with
              quantitative information, like product and usage metrics. <br />
              <span className="font-bold">• Prototyping. </span>
              You will prototype—using software like Principle and Framer, or
              another favorite method—both to communicate your designs and
              validate your decisions. <br />
              <span className="font-bold">• Partnering with engineers.</span> We
              work closely with product and forward deployed engineers to
              realize our design ideas. You'll treat engineers as partners and
              collaborate with them to prototype and build out products. <br />
              <span className="font-bold">
                • Awareness of how software interfaces are built.
              </span>{" "}
              Familiarity with HTML, CSS, Javascript, and Typescript is
              appreciated. You don't need to be an expert—just fluent enough to
              collaborate with engineers, and know what's possible with frontend
              technologies. Resources and mentorship are available to designers
              who want to learn more.
            </p>
            <p className="py-6 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              Designers at Palantir have great autonomy over their work, so a
              wide skill set is necessary. However, many designers on the team
              are also passionate experts in one area. You might be the kind of
              designer who ships code every week, or the kind of designer who
              shares detailed user research findings with your team.
            </p>
          </div>
        </div>

        <div className="sm:px-16 pb-12 flex flex-col justify-between items-start">
          <div className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
            <h1 className="tracking-[.15em] text-[1.5rem] lg:text-[1.5rem] fonts-space-grotesk">
              Requirements
            </h1>
            <p className="py-3 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              • A portfolio demonstrating at least one software interface design
              project. If parts of your portfolio are password-protected, please
              include your portfolio password under 'Additional Information'
              when applying.
            </p>
            <p className="py-3 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              Our team has people from a variety of backgrounds—people who
              studied type design, computer science, psychology; people who
              joined Palantir right after university; and people who joined our
              team after switching industries. We value skills and mindset over
              a specific educational background. <br /> <br />
            </p>
            <p className="py-3 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              Palantir is committed to promoting a culture of diversity, equity,
              and inclusion. We believe that all Palantirians share the
              responsibility of upholding our commitment to these values and
              encourage candidates from a wide range of backgrounds,
              perspectives, and lived experiences to join us in solving the
              world’s hardest problems.
            </p>
            <p className="py-3 text-[1.2rem] lg:text-[1.3rem] fonts-space-grotesk">
              Palantir is committed to making the job application process
              accessible to everyone. If you are living with a disability
              (visible or not visible) and need to request a reasonable
              accommodation for any part of the application or hiring process,
              please reach out and let us know how we can help.
            </p>
          </div>
        </div>
        <div className="pb-10 sm:pb-28 text-[1.2rem] lg:text-[1.4rem] fonts-space-grotesk flex space-x-2 justify-center">
          <button className="sm:block group w-[20rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium  border bg-[white] dark:bg-[white] text-[#1E2124] border-[black] hover:text-[white] px-10 py-1  undefined z-0">
            <div className="bg-[black] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
            <span className="transition-all z-10 capitalize">
              Apply for this job
            </span>
          </button>
        </div>
      </div>
      <div className="p-4 fonts-space-grotesk">
        <hr className="text-[#767676] dark:text-[#767676]" />
      </div>
      <GetStartedNow
        heading="Need any help"
        para="Now in over 40 sectors and industries worldwide."
        button="Contact Us"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "iTDAY | CareerDesc",
};
