import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img
        src={`${getImagePrefix()}images/logo/logo.png`}
        alt="logo"
        // width={100}
        // height
        style={{ width: "250px", height: "70px" }}
      />
    </Link>
  );
};

export default Logo;
