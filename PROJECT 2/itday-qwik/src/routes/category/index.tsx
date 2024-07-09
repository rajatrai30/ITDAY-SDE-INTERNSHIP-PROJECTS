import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import React from "React";
import { GetStartedNow } from "~/components/sections/GetStartedNow";
import { ProfileInfo } from "~/packages/utils/profileInfo";

import member1 from "../../Assets/Images/teamMembers/member1.jpg";
import cat1 from "../../Assets/Images/CategoryPage/cat1.jpg";
import cat2 from "../../Assets/Images/CategoryPage/cat2.jpg";
import cat3 from "../../Assets/Images/CategoryPage/cat3.jpg";

export default component$(() => {
  return (
    <>
      <div className="bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <div className="p-4 pt-40 space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
          <div className="px-16 flex flex-col items-center">
            <h1 className="text-[1.12rem] lg:text-[1.15rem] fonts-space-grotesk">
              Design
            </h1>
            <h1 className="align-center text-center capitalize tracking-[.2em] text-[2.2rem] lg:text-[2.5rem] fonts-space-grotesk">
              UX review presentations
            </h1>
            <p className="align-center text-center capitalize py-3 text-[1rem] lg:text-[1.2rem] fonts-space-grotesk">
              It is said that “Every $1 invested in UX brings $100 in return
              (Forbes)”. This sums up the <br /> importance of UX for any
              organization which is trying to grow.
            </p>
          </div>
        </div>

        <ProfileInfo
          profileImg={member1}
          profileName="Surya S"
          profileDate="12 jul 2022"
          banner={cat1}
        />

        <div className="p-6 lg:px-56 lg:pt-14 space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
          <h1 className="capitalize text-[1rem] lg:text-[1.2rem] fonts-space-grotesk font-normal">
            “Investment in UX is often the difference between businesses that
            grow and those that sputter.”
            <br /> <br /> - Roman Nurik, designer and design advocate, Google{" "}
            <br /> <br /> It can almost be taken for granted that investing in
            User experience generates a massive return of investment. This is
            repeatedly mentioned or indirectly referred to in many of the
            product launches by several major companies. Most of the
            organizations now strive to achieve the same by incorporating design
            mindset across all teams. A mid-sized company dealing with a digital
            product is most likely to have a UX team or an external UX agency
            which helps them operate at a higher level of UX Maturity. <br />{" "}
            <br /> At the same time there could be companies, most startups and
            even large organizations in which there may exist a design
            perception among the top leaders. A person who is knowledgeable
            about User centricity and directs the product design with a certain
            approach. But due to lower UX maturity levels, the chances are that
            the design directions don’t get converted into desirable outcomes.
            The major reason for this is the absence of a UX team.
          </h1>
          <div className="pt-8">
            <img
              src={cat2}
              alt=""
              className="h-56/3 md:(h-56/3 * 2) lg:h-56 w-full"
            />
          </div>
          <h1 className="lg:py-14 capitalize text-[1rem] lg:text-[1.2rem] fonts-space-grotesk font-normal">
            Hiring and investing time into fresh in-house talent is a time
            taking task as it requires finding the right talent, creating a
            culture, training the bunch and then deploying to work in a live
            project. Given the requirements and deadlines of certain projects it
            is not always going to work out practically to hire in-house talent.{" "}
            <br />
            <br /> In such a scenario the ideal solution is to approach a UX
            partner who could be a lifeline to a project and provide the crucial
            design service as required. <br />
            <br /> Collaborating with a UX Partner comes with more pros than
            cons. The benefits can be broadly described as service-related and
            non-service-related. <br />
            <br /> Service-related benefits have to do with design work a UX
            partner can provide you. A team of industry experts who are
            acclimatized to finding solutions for a variety of problems. UX
            partners provide services such as: <br />
            <br /> • Redesigning your whole digital product <br /> • UX
            Assessment of your current product and help form a new strategy{" "}
            <br /> • Being part of your existing design team and contributing to
            the design work. <br />
            Non-service-related benefits are: <br />
            <br /> • Amount of time and <br />
            • Amount of money <br />
            <br /> Now it is up to you whether you want to invest in hiring a
            fresh in-house talent or you want to hire an already trained
            professional for your work. Service-related advantage
          </h1>
          <div className="">
            <img
              src={cat3}
              alt=""
              className="h-56/3 md:(h-56/3 * 2) lg:h-56 w-full"
            />
          </div>
          <h1 className="lg:py-14 capitalize text-[1rem] lg:text-[1.2rem] fonts-space-grotesk font-normal">
            • Faster design solutions <br />
            <br /> When a company invests in a UX partner it invests in a team
            of industry experts, who can deliver the desired quality of work.
            The team in a UX firm is always a diverse group of people who have
            been exposed to a wide variety of products and would have provided
            solutions in various fields (Healthcare, Fintech, logistics,
            Agritech etc.) <br />
            <br /> Given the exposure and expertise, the resources of a UX
            partner can also deliver multiple design solutions faster compared
            to hiring in-house talent. <br />
            <br /> • Sizing up your design team <br />
            <br />
            A UX partner can also be approached when an organization needs
            reinforcement of its existing design team. This mainly happens as a
            strategic step to involve a third party in the system in order to
            bring innovation. As mentioned earlier, a UX firm is always a
            diverse group of people who have been exposed to a wide variety of
            products. The experience and skill sets which come with the
            collaboration will help in creating a significant difference in the
            outcome. <br />
            <br /> Apart from adding members to the team, A UX partner can also
            act as a design mentor for startups which have a small team.
            Resources of a UX partner such as experienced designers, the tools
            and software owned by the UX partner etc. at a startup's disposal
            would facilitate informed design directions, methodologies and
            execution. Thereby producing positive user centric solutions.
          </h1>
          <h1 className="lg:pb-32 capitalize text-[1rem] lg:text-[1.2rem] fonts-space-grotesk font-normal">
            Conclusion <br />
            <br /> If you own a start-up, you know that the investment made is
            huge and there is an immediate need to place your foot in the
            market, especially in today’s cut throat competition. In such a
            scenario partnering with a UX partner will not only help you in
            getting the work done by trained professionals, but will also save a
            lot of time and effort needed to train the beginners. And once you
            set a standard for your startup, you will see it reflected in not
            only the work but also in the culture of your organization. Further
            if you want to learn about best ways for UX Design Iterations, UX
            Design strategy, UX history, and effective ways of designing UI,
            please navigate through our blog section. <br />
            <br /> As Robert L. Peters, Graphic Designer, has rightly said,
            “Design creates culture. Culture shapes values. Values determine the
            future.” <br />
            <br /> So, if you are looking to avail the best UX/UI services,
            product development and cloud services, feel free to visit
            www.itday.in. Our team of experts will be delighted to serve you.
          </h1>
          <div className="pb-10 lg:pb-32 text-[1.2rem] lg:text-[1.4rem] fonts-space-grotesk flex space-x-2 justify-center">
            <button className="sm:block group w-[16rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium  border bg-[white] dark:bg-[white] text-[#1E2124] border-[black] hover:text-[white] px-10 py-1  undefined z-0">
              <div className="bg-[black] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
              <span className="transition-all z-10">Subscribe</span>
            </button>
          </div>
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
  title: "iTDAY | Category",
};
