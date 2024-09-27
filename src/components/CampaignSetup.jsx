import React, { useState } from "react";
import { CollapsibleMenu } from "./CollapsibleMenu";
import OptionSelector from "./OptionSelector";
import SelectLeadResources from "./SelectLeadSources";
import OptionSelector from "./OptionSelector";

const CampaignSetup = () => {
  const [openSection, setOpenSection] = useState(null);
  const [obj, setObj] = useState(null);
  const [seq, setSeq] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="campaign-setup">
      {/* Step 1: Select Campaign Objective */}
      <CollapsibleMenu
        isFilterOpen={openSection === "objective"}
        renderLabel={() => (
          <button
            onClick={() => toggleSection("objective")}
            className={`flex w-full text-start items-center justify-between py-4 font-medium h-16 bg-white border-[#E4E7EC] p-4 mt-7 ${
              openSection === "objective"
                ? "rounded-t-xl border-t border-l border-r"
                : "rounded-xl border"
            }`}
          >
            Select Campaign Objective
            <img
              src="/icons/down.svg"
              alt="arrow"
              className={`size-3 ${
                openSection === "objective" ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      >
        <div className="w-full bg-white py-7 border border-[#E4E7EC] rounded-b-xl p-4">
          <OptionSelector
            onSelect={(option) => setObj(option)}
            options={[
              "Lead Nurturing",
              "Cold Outreach",
              "Product Release",
              "Follow-Up"
            ]}
            selectedOption={obj}
          />
        </div>
      </CollapsibleMenu>

      {/* Step 2: Select Lead Sources */}
      <CollapsibleMenu
        isFilterOpen={openSection === "lead_sources"}
        renderLabel={() => (
          <button
            onClick={() => toggleSection("lead_sources")}
            className={`flex w-full text-start items-center justify-between py-4 font-medium h-16 bg-white border-[#E4E7EC] p-4 mt-7 ${
              openSection === "lead_sources"
                ? "rounded-t-xl border-t border-l border-r"
                : "rounded-xl border"
            }`}
          >
            Select Lead Sources
            <img
              src="/icons/down.svg"
              alt="arrow"
              className={`size-3 ${
                openSection === "lead_sources" ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      >
        <SelectLeadResources />
      </CollapsibleMenu>

      {/* Step:3 */}
      <CollapsibleMenu
        isFilterOpen={openSection === "sequence"}
        renderLabel={() => (
          <button
            onClick={() => toggleSection("sequence")}
            className={`flex w-full text-start items-center justify-between py-4 font-medium h-16 bg-white border-[#E4E7EC] p-4 mt-7 ${
              openSection === "sequence"
                ? "rounded-t-xl border-t border-l border-r"
                : "rounded-xl border"
            }`}
          >
            Create your sequence
            <img
              src="/icons/down.svg"
              alt="arrow"
              className={`size-3 ${
                openSection === "sequence" ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      >
        <div className="w-full bg-white py-7 border border-[#E4E7EC] rounded-b-xl p-4">
          <OptionSelector
            onSelect={(option) => setSeq(option)}
            options={["Add email", "Add SMS", "Add phone call", "Add wait"]}
            selectedOption={seq}
          />
        </div>
      </CollapsibleMenu>
    </div>
  );
};

export default CampaignSetup;
