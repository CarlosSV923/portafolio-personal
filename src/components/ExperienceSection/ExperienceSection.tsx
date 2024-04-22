"use client";
import { useTranslations } from "next-intl";
import { CardItemExperience } from "./CardItemExperience";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { useConfig } from "@/contexts/portafolio.context";

const ExperienceSection = () => {
  const { data } = useConfig()!;
  const translations = useTranslations("experience");
  
  return (
    <div
      id="experience"
      className="bg-gray-800 h-full flex flex-col items-center justify-center p-8 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{ divider: "w-32", base: "justify-center" }}
      />
      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-16">
        {data?.experience?.map((experience, index) => (
          <CardItemExperience
            experience={experience}
            key={`${experience.position}-card-experience-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
