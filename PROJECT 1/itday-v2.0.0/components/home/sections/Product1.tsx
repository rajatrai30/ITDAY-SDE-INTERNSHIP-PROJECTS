import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EvenToLeftTitle, LinkButton } from "../../../packages/utils";

const Product1 = () => {
  return (
    <div className="p-4 lg:py-10 space-y-8">
      <div className="grid grid-cols-2 gap-x-4 p-4 py-10">
        <p></p>
        <EvenToLeftTitle className="text-3xl lg:text-4xl text-right">
          Generating Alpha Amidst Continuous Disruption
        </EvenToLeftTitle>
      </div>
      <div className="w-full flex items-center">
        <div className="w-full lg:w-[90vw] grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
          <div className="grid grid-cols-2 gap-4 p-4 py-10">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                We are entering an era of continuous disruption.
              </h3>
              <p className="text-textGrey">
                In this context, Palantir recognizes our customers existential
                need to utilize software to generate competitive advantage — or,
                alpha. Everyone else will find themselves in a perpetual game of
                catchup.
              </p>
            </div>
            <div className="h-full flex flex-col items-start justify-between space-y-4">
              <p className="text-textGrey">
                We've advanced beyond incremental efficiencies to bring
                intelligence to the core of everything that matters most to your
                enterprise.
              </p>
              <div>
                <LinkButton>
                  <span>Learn More About Alpha Generation</span>
                  <div className="text-white w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </LinkButton>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
