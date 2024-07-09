import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EvenToLeftTitle } from "../../../packages/utils";
import { TurnDownArrowRight } from "../../../packages/utils/icons";
import { TurnDownArrowRightLight } from "../../../packages/utils/icons";


const Product2 = () => {
  return (
    <div className="p-4 lg:py-10 w-full space-y-8">
      <EvenToLeftTitle className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] font-light tracking-wide">
        Platforms
      </EvenToLeftTitle>
      <div className="flex flex-row justify-around">
        <div>
          <Item name="Fountry" />
        </div>
        <div>
          <Item name="gotham" />
        </div>
        <div>
          <Item name="apollo" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex justify-center p-6 bg-dark text-white border-dark dark:bg-white dark:text-dark dark:border-white">
            <p>
              Foundry leverages an open architecture to inform closed-loop
              operations — connecting data, analytics, and business teams to a
              common foundation. <br />
              <br />
              From data integration to operational applications, Foundry is the
              end-to-end solution for data-driven decision-making — and it's
              deployable in hours.
            </p>
          </div>
          <div className="flex justify-center p-6 bg-dark text-white border-dark dark:bg-white dark:text-dark dark:border-white">
            <p>
              Foundry leverages an open architecture to inform closed-loop
              operations — connecting data, analytics, and business teams to a
              common foundation. <br />
              <br />
              From data integration to operational applications, Foundry is the
              end-to-end solution for data-driven decision-making — and it's
              deployable in hours.
            </p>
          </div>
          <div className="flex justify-center p-6 bg-dark text-white border-dark dark:bg-white dark:text-dark dark:border-white">
            <p>
              Foundry leverages an open architecture to inform closed-loop
              operations — connecting data, analytics, and business teams to a
              common foundation. <br />
              <br />
              From data integration to operational applications, Foundry is the
              end-to-end solution for data-driven decision-making — and it's
              deployable in hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = (props: { name: string; link?: string }) => {
  const login = false;
  return (
    <div className="w-full">
      <hr className="text-white" />
      <div className="flex items-start space-x-4 text-2xl lg:text-4xl py-4 lg:py-8">
        <div className="text-dark">
          {(login) ? <TurnDownArrowRight />: <TurnDownArrowRightLight/>}</div>
        <span className="capitalize font-light">{props.name}</span>
      </div>
    </div>
  );
};

export default Product2;
