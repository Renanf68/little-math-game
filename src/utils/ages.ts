import number4 from "../images/number4.png";
import number5 from "../images/number5.png";
import number6 from "../images/number6.png";
import number7 from "../images/number7.png";
import number8 from "../images/number8.png";
import number9 from "../images/number9.png";
import number10 from "../images/number10.png";
import number11 from "../images/number11.png";

export const getUserAvatar = (age: number) => {
  if (age === 4) return number4;
  else if (age === 5) return number5;
  else if (age === 6) return number6;
  else if (age === 7) return number7;
  else if (age === 8) return number8;
  else if (age === 9) return number9;
  else if (age === 10) return number10;
  return number11;
};
