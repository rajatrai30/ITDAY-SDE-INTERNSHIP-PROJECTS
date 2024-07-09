import { EvenToLeftTitle } from "../../../packages/utils";
import { TurnDownArrowRight } from "../../../packages/utils/icons";

const Product3 = () => {
  return (
    <div className="p-4 lg:py-10 w-full space-y-8">
      <EvenToLeftTitle className="text-4xl lg:text-5xl max-w-[35rem] leading-tight tracking-wide">What Makes Palantir Platforms Powerful</EvenToLeftTitle>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        <Item
          title="Day 1 Value"
          description="Our platforms deliver value out of the box. Days, not years."
          section="A"
          buttonName="Explore Platforms"
        />
        <Item
          title="Decision Advantage Across Your Organization"
          description="Bring intelligence to your entire enterprise, and to the core of the decisions and operations that matter most."
          section="B"
          buttonName="Explore Offerings"
        />
        <Item
          title="Full Stack Interoperability"
          description="Palantir meets you where you are, automatically connecting with and enhancing your existing data systems."
          section="C"
          buttonName="Explore Interoperability"
        />
        <Item
          title="Multi-Layered Security and Data Privacy"
          description="Our approach to security enables collaboration instead of inhibiting it. With founding roots in intel and defense, Palantir carries certifications or attestations of compliance for the most stringent standards, including FedRamp, IL5, and more."
          section="D"
          buttonName="Explore Security"
        />
      </div>
    </div>
  )
}

const Item = (props: {
  title: string,
  description: string,
  link?: string,
  buttonName: string,
  section: string
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="text-textGrey font-extralight uppercase">
        - {props.section}
      </div>
      <div className="space-y-4">
        <h1 className="text-white text-2xl">{props.title}</h1>
        <p className="text-xs text-textGrey font-light">{props.description}</p>
        <div className="flex items-start space-x-2">
          <TurnDownArrowRight />
          <span>{props.buttonName}</span>
        </div>
      </div>
    </div>
  )
}

export default Product3;