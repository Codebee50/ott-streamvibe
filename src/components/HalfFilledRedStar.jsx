import { HiStar } from "react-icons/hi2";

const HalfFilledRedStar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="halfFilledPattern"
          width="50%"
          height="100%"
          //   patternContentUnits="objectBoundingBox"
        >
          <rect width="50%" height="100%" fill="red" />
          <rect width="50%" height="100%" x="50%" fill="blue" />
        </pattern>
      </defs>
      <HiStar
        className="fill-pattern"
        style={{ fill: "url(#halfFilledPattern)" }}
      />
    </svg>
  );
};

export default HalfFilledRedStar;
