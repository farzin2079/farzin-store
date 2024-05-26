import React from "react";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import {
  FaGithub,
  FaInstagram,
  FaJ,
  FaLinkedin,
  FaPaperPlane,
  FaUpwork,
} from "react-icons/fa6";

const GroupStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function SocialGroup() {
  return (
    <div>
      <p>social networks:</p>
      <GroupStyle>
        <SocialButton
          icon={<FaPaperPlane />}
          firstColor="var(--color-grey-600)"
          secondColor="var(--color-slate-0)"
          firstBgColor="transparent"
          secondBgColor="var(--color-blue-700)"
          to="https://t.me/farzin_man"
        />
        <SocialButton
          icon={<FaInstagram />}
          firstColor="var(--color-grey-600)"
          secondColor="var(--color-slate-0)"
          firstBgColor="transparent"
          secondBgColor=" rgba(253,29,29,1)"
          to="https://instagram.com/farzin_af__"
        />
        <SocialButton
          icon={<FaLinkedin />}
          firstColor="var(--color-grey-600)"
          secondColor="var(--color-slate-0)"
          firstBgColor="transparent"
          secondBgColor="var(--color-blue-700)"
          to="https://linkedin.com/in/farzinabbasi"
        />
        <SocialButton
          icon={<FaGithub />}
          firstColor="var(--color-grey-600)"
          secondColor="var(--color-slate-0)"
          firstBgColor="transparent"
          secondBgColor="var(--color-grey-700)"
          to="https://github.com/farzin2079"
        />
        <SocialButton
          icon={<FaJ />}
          firstColor="var(--color-grey-600)"
          secondColor="var(--color-blue-700)"
          firstBgColor="transparent"
          secondBgColor="var(--color-grey-0)"
          to="https://jobvision.ir/cv/38644976-110204"
        />
        <SocialButton
          icon={<FaUpwork />}
          firstColor="var(--color-grey-600)"
          secondColor="var(--color-grey-0)"
          firstBgColor="transparent"
          secondBgColor="var(--color-green-700)"
          to="https://upwork.com"
        />
      </GroupStyle>
    </div>
  );
}
