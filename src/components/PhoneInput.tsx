"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (phone: string, country: any) => void;
}) => {
  const { theme } = useTheme();
  return (
    <div className={`qt-phone-input ${theme}-theme`}>
      <PhoneInput
        country={"in"}
        value={value}
        onChange={(phone, country) => onChange(phone, country)}
        placeholder="Phone Number*"
        onBlur={(input, country) => {
          if (value.length < 5) {
            onChange("", country);
          }
        }}
        // inputProps={{
        //   name: "phone",
        //   required: true,
        // }}
        enableSearch={true}
        countryCodeEditable
      />
    </div>
  );
};

export default PhoneInputField;
